using AutoMapper;
using FA_Solutions.Microservice;
using FA_Solutions.Microservice.Interfaces;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using System.Linq;
namespace FA_Manager.API.Configuration
{
    public class Startup : StartupBase
    {
        public Startup(IConfiguration configuration) :base(configuration)
        {
            Configuration = configuration;
        }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            var names = services.Select(c => c.ServiceType.Name);
            //services.AddTransient<IFinance_A1, Finance_A1>();
            var rev = names.Reverse();
            var check = services;
            var a = typeof(Program);
            var a1 = typeof(Program).Assembly;


            //Get all classes [Included .NET built-in]
            //var a2 = services.Scan(a => a.FromAssemblyDependencies(typeof(Program).Assembly));


            //[Note] : 
            // AddClasses() starts out with all public, non-abstract types in this running assembly.
            // These types are then filtered by the delegate passed to the method.

            //Implementation

            //Assign all classes included .Net's built-in
            //services.Scan(a => a.FromAssemblyDependencies(typeof(Program).Assembly)
            //.AddClasses());


            //[NOTE] :
            //But In this case, we filter out only the classes that are assignable to our
            //ITransientService, IScopedService , ISingletonService,
            //[these 3 interfaces Names are choice here]

            //Implementation [for single lifetime] of only selected placeholder [AssignableTo means that interfaces that implement 'ITransientService']

            //Notes for understanding
            //Implementation [for all three lifetimes]
            services.Scan(a => a.FromAssemblyDependencies(typeof(Program).Assembly)
                .AddClasses(c => c.AssignableTo<MyTransientService>())  //Select your custom Name  (i.e ITransientService)            
                .AsMatchingInterface() //  Make a Check of Matching this Name in all classes
                .WithTransientLifetime() //Assign that classes to the particular lifetime

            //Same for remaining
            .AddClasses(c => c.AssignableTo<MyScopedService>()).AsMatchingInterface().WithScopedLifetime()
            .AddClasses(c => c.AssignableTo<MySingletonService>()).AsMatchingInterface().WithSingletonLifetime()
            );

            //Call Parent's function and register more services
            BaseConfigureServices(services);

            //Duplication protection
            // services.Scan(scan => scan
            //.FromAssemblyOf<BackOffice.Global.CommonHelper>()
            //    .AddClasses(classes => classes.AssignableTo<ITransientService>())
            //        .UsingRegistrationStrategy(RegistrationStrategy.Skip)      //Duplication protection
            //        .AsMatchingInterface().WithTransientLifetime()


            //    .AddClasses(classes => classes.AssignableTo<IScopedService>())
            //        .UsingRegistrationStrategy(RegistrationStrategy.Skip)      //Duplication protection
            //        .AsMatchingInterface() .WithScopedLifetime()


            //    .AddClasses(classes => classes.AssignableTo<ISingletonService>())
            //        .UsingRegistrationStrategy(RegistrationStrategy.Skip)      //Duplication protection
            //        .AsMatchingInterface());



            // Auto Mapper Configurations
            var mapperConfig = new MapperConfiguration(mc =>
            {
                mc.AddProfile(new MappingProfile());
            });
            IMapper mapper = mapperConfig.CreateMapper();
            services.AddSingleton(mapper);
        }

        public class MappingProfile : Profile
        {
            public MappingProfile()
            {
            }
        }
    }
}
