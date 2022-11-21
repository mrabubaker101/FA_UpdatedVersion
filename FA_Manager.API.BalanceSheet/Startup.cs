using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.HttpsPolicy;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Microsoft.Extensions.Logging;
using Microsoft.OpenApi.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;   
using FA_Solutions.Microservice;
using FA_Solutions.Microservice;
using FA_Solutions.Microservice.Interfaces;
using Microsoft.Extensions.Configuration;
using FA_Solutions.Microservice.Interfaces;  

namespace FA_Manager.API.BalanceSheet
{
    public class Startup : FA_Solutions.Microservice.StartupBase
    {
        public Startup(IConfiguration configuration) : base(configuration)
        {
            Configuration = configuration;
        }

 
        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {


            //Call Parent's function and register more services
            BaseConfigureServices(services);

        } 
    }
}
