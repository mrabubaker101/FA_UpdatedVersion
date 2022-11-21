using AutoMapper;
using FA_Manager.Services.Global.Interfaces;
using FA_Manager.Services.Global.Service;
using FA_Solutions.Microservice;
using FA_Solutions.Microservice.Interfaces;
using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.Configuration; 
using Microsoft.Extensions.DependencyInjection;

namespace FA_Manager.API.Global
{
    public class Startup : StartupBase
    {
        public Startup(IConfiguration configuration) : base(configuration)
        {
            //assemblyName = Assembly.GetExecutingAssembly().GetName().Name;
        }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            //Foa a single Class Activation
            //Htta single Class Activation
            services.AddTransient<ILookup_A1, Lookup_A1>();

            //For dynamically all Classes Activation [This should in seperate each Project (not in base class)]
            services.Scan(a => a.FromAssemblyDependencies(typeof(Program).Assembly)
                   .AddClasses(c => c.AssignableTo<MyTransientService>())  //Select your custom Name  (i.e ITransientService)            
                   .AsMatchingInterface() //  Make a Check of Matching this Name in all classes
                   .WithTransientLifetime() //Assign that classes to the particular lifetime

               //Same for remaining
               .AddClasses(c => c.AssignableTo<MyScopedService>()).AsMatchingInterface().WithScopedLifetime()
               .AddClasses(c => c.AssignableTo<MySingletonService>()).AsMatchingInterface().WithSingletonLifetime()
               );
            BaseConfigureServices(services);

            // Auto Mapper Configurations
            //var mapperConfig = new MapperConfiguration(mc =>
            //{
            //    mc.AddProfile(new MappingProfile());
            //});
            //IMapper mapper = mapperConfig.CreateMapper();
            //services.AddSingleton(mapper);
        }


        public class MappingProfile : Profile
        {
            public MappingProfile()
            {
            }
        }
    }
}
