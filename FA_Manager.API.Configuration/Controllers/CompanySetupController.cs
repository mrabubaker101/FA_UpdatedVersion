using FA_Solutions.Utility;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Caching.Memory;
using Microsoft.Extensions.Logging;
using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Threading.Tasks;

namespace FA_Manager.API.Configuration.Controllers
{
    [ApiController]
    [Produces("application/json")]
    [ProducesResponseType(StatusCodes.Status200OK)]
    [ProducesResponseType(StatusCodes.Status404NotFound)]
    [Route("api/configuration")]
    [EnableCors("AllowSpecificOrigin")]
    public class CompanySetupController : ControllerBase
    {

        private readonly ILogger<CompanySetupController> _logger;
        private readonly IMemoryCache _cache;
        public CompanySetupController(ILogger<CompanySetupController> logger,IMemoryCache cache)
        {
            _logger = logger;
            _cache = cache;
        }


        [ProducesResponseType(StatusCodes.Status200OK)]
        [HttpGet]
        [Route("getlist")]
        public IActionResult Get_List(string type)
        {
            var data = new[] { "abubaker", "Umer", "Usman", "Furqan" };
            return Ok(data);
        }


        [ProducesResponseType(StatusCodes.Status200OK)]
        [HttpGet]
        [Route("lwgltran")]
        public async Task<IActionResult> Get_LWGLTRAN(int top)
        {
            DataBaseEnvironment dbEnv = new DataBaseEnvironment();
            DateTime dt;
            List<TestData> test = new List<TestData>();
            bool Exists = _cache.TryGetValue("gltran", out test);
            string msg = "";
            if (!Exists)
            {
                //Set Cache 
                var EntryOption = new MemoryCacheEntryOptions();
                EntryOption.SetSlidingExpiration(TimeSpan.FromSeconds(20));
                 
                //var provider = new LazyCache.Providers.MemoryCacheProvider(memoryCache);
                //LazyCache.IAppCache cache = new LazyCache.CachingService(provider);
                //customerConfigurations = cache.GetOrAdd(cacheKey, cacheEntry =>
                //{
                //    cacheEntry.AbsoluteExpiration = DateTime.Now.AddSeconds(60 * 15);
                //    cacheEntry.Priority = CacheItemPriority.High;
                //    cacheEntry.SlidingExpiration = TimeSpan.FromSeconds(60);
                //    var listcc = SqlView<CustomerConfiguration>("SELECT * FROM ClientConfiguration");
                //    return listcc;
                //});
                DataTable data = dbEnv.SqlView($"select top {top} * from lwgltran");
                test = (from a in data.AsEnumerable()
                        select new TestData()
                        {
                            Id_Pk = a.Field<int>("Id_pk"),
                            Amount = Convert.ToDouble(a.Field<decimal>("amount")),
                            PAYEE = a.Field<string>("PAYEE"),
                            REFERENCE = a.Field<string>("REFERENCE"),
                            GL_ACCT = a.Field<string>("GL_ACCT"),
                            AUDIT = a.Field<string>("AUDIT")
                        }).ToList();

                _cache.Set("gltran", test, EntryOption);
                msg = "Loaded from Database";
            }
            else
            {
                msg = "Loaded from Cache";
            }
            return Ok(new { test, msg });
        }
         

    }

    public class TestData
    {
    public int Id_Pk { get; set; }
    public double Amount { get; set; }

        public string REFERENCE { get; set; }
        public string GL_ACCT { get; set; }
        public string AUDIT { get; set; }
        public string PAYEE { get; set; }

    }
}
