using AutoMapper;
using FA_Solutions.AdvanceLibrary.DBEnvironment;
using FA_Solutions.Utility;
//using Microsoft.ApplicationInsights.DependencyCollector;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Cors.Infrastructure;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Server.Kestrel.Core;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Microsoft.Extensions.Logging;
using Microsoft.OpenApi.Models;
using System;
using System.Collections.Generic;
using System.Linq;

using System.Reflection;


namespace FA_Solutions.Microservice
{
    public abstract class StartupBase 
    {
        public StartupBase(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; set; }
        private IConfigurationSection swaggerSettings;
        protected string assemblyName = Assembly.GetExecutingAssembly().GetName().Name;


        //A.B
        //1st Main Method

        // This method gets called by the runtime. Use this method to add services to the container.
        public void BaseConfigureServices(IServiceCollection services)
        {  
            services.AddMemoryCache(); // Step:1, Register it
            services.AddControllers();

            //services.AddHttpContextAccessor();

            //injecting Database for ADO.NET global
            services.AddScoped<IDatabase, DataBase>();  //DataBase is an implementation class


            //allowing to send whole DataTable result
            services.AddControllersWithViews().AddJsonOptions(options =>
            {
                options.JsonSerializerOptions.Converters.Add(new DataTableJsonConverter()); //a custome Class
            });

            //Auto Mapper Configurations
            var mapperConfig = new MapperConfiguration(mc =>
            {
                mc.AddProfile(new BaseMappingProfile());
            });

            IMapper mapper = mapperConfig.CreateMapper();
            services.AddSingleton(mapper);

            //CORS Policies
            var corsBuilder = new CorsPolicyBuilder();
            string corsOrigin = Configuration["ApplicationSettings:CORSOrigins"];
            corsBuilder.AllowAnyHeader();
            corsBuilder.AllowAnyMethod();
            corsBuilder.WithOrigins(corsOrigin.Split(','))
                .SetPreflightMaxAge(TimeSpan.FromMinutes(15))
                .SetIsOriginAllowedToAllowWildcardSubdomains()
                .AllowAnyHeader()
                .AllowAnyMethod();

            services.AddCors(options =>
            {
                options.AddPolicy("AllowSpecificOrigin", corsBuilder.Build());
            });



            //Add JWT Asymmetric authentication
            //LWAuthorization auth = new(Configuration);
            //auth.SetupJWTServices(services);

              
            // Add Healthchecks
            //services.AddHealthChecks();


            // Register the Swagger services
            services.AddSwaggerGen(c =>
            {
                c.SwaggerDoc("v1", new OpenApiInfo { Title = "FA Manager API", Version = "v1" });

            //    c.AddSecurityDefinition("Bearer", new OpenApiSecurityScheme
            //    {
            //        Description = @"JWT Authorization header using the Bearer scheme. <br/></br>
            //          Enter 'Bearer' [space] and then your token in the text input below.<br/>
            //          Example: 'Bearer 12345abcdef'<br/></br>
            //          To get the token run the Login API<br/></br>",
            //        Name = "Authorization",
            //        In = ParameterLocation.Header,
            //        Type = SecuritySchemeType.ApiKey,
            //        Scheme = "Bearer"
            //    });

            //    c.AddSecurityRequirement(new OpenApiSecurityRequirement()
            //    {
            //        {
            //            new OpenApiSecurityScheme
            //            {
            //            Reference = new OpenApiReference
            //                {
            //                Type = ReferenceType.SecurityScheme,
            //                Id = "Bearer"
            //                },
            //                Scheme = "oauth2",
            //                Name = "Bearer",
            //                In = ParameterLocation.Header,

            //            },
            //            new List<string>()
            //        }
                });
            //    // Set the comments path for the Swagger JSON and UI.
            //    //var xmlFile = $"{assemblyName}.xml";
            //    //var xmlPath = System.IO.Path.Combine(AppContext.BaseDirectory, xmlFile);
            //    //c.IncludeXmlComments(xmlPath);
            //});

            //services.AddHsts(options =>
            //{
            //    options.Preload = false;
            //    options.IncludeSubDomains = false;
            //    options.MaxAge = TimeSpan.FromDays(365);
            //});

            SetOutputFormatters(services);

            ConfigHelper.Configuration = Configuration;
        }



        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IWebHostEnvironment env, ILoggerFactory loggerFactory)
        {
            var projectName = Assembly.GetEntryAssembly().GetName().Name.Split('.').Last().ToLower();
            var basePath = $"/{projectName}";

            if (env.IsProduction() || env.IsStaging())
            {
                //app.UseExceptionHandler("/Error");
                // The default HSTS value is 30 days, the max-days is defined above in services.AddHsts
                //app.UseHsts();
            }
            else if(env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage(); 
            }

            ConfigHelper.EnvironmentName = env.EnvironmentName;

            // Setup Global Exception Handler
            //app.UseMiddleware<ExceptionMiddleware>();

            app.UsePathBase(basePath);
            app.UseRouting();
            app.UseHttpsRedirection();
            app.UseCors("AllowSpecificOrigin");

            //app.UseAuthentication();
            //app.UseAuthorization();

            app.UseEndpoints(endpoints =>
            {
                endpoints.MapControllers();
                //endpoints.EnableDependencyInjection();
            });

            // Register the Swagger generator and the Swagger UI middlewares
            //AB
            #region Swagger


            app.UseSwagger(options =>
            {
                options.PreSerializeFilters.Add((swagger, httpReq) =>
                {
                    swagger.Servers = new List<OpenApiServer> { new OpenApiServer { Url = $"{httpReq.Scheme}://{httpReq.Host.Value}{basePath}" } };
                });
            });


            //Take from 
            app.UseSwaggerUI(c =>
            {
                //Bachon wali Logic for customization
                c.SwaggerEndpoint($"{basePath}/{this.GetSwaggerSetting<string>("UI:EndPoint:Url")}", this.GetSwaggerSetting<string>("UI:EndPoint:Name"));
                c.RoutePrefix = string.Empty;
            });
           
            #endregion 
        }
        private T GetSwaggerSetting<T>(string key)
        {
            if (swaggerSettings == null)
                swaggerSettings = this.Configuration.GetSection("Swagger");

            return swaggerSettings.GetValue<T>(key);
        }
        protected static void SetOutputFormatters(IServiceCollection services)
        {
            //services.AddMvcCore(options =>
            //{
            //    IEnumerable<ODataOutputFormatter> outputFormatters =
            //        options.OutputFormatters.OfType<ODataOutputFormatter>()
            //            .Where(formatter => formatter.SupportedMediaTypes.Count == 0);

            //    foreach (var outputFormatter in outputFormatters)
            //    {
            //        outputFormatter.SupportedMediaTypes.Add(new MediaTypeHeaderValue("application/odata"));
            //    }

            //    IEnumerable<ODataInputFormatter> inputFormatters =
            //       options.InputFormatters.OfType<ODataInputFormatter>()
            //           .Where(formatter => formatter.SupportedMediaTypes.Count == 0);

            //    foreach (var inputFormatter in inputFormatters)
            //    {
            //        inputFormatter.SupportedMediaTypes.Add(new MediaTypeHeaderValue("application/odata"));
            //    }
            //});
        }
    }

    public class BaseMappingProfile : Profile
    {
        public BaseMappingProfile()
        {
        }
    }
}
