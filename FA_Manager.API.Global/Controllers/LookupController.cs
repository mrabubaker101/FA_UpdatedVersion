using FA_Manager.Services.Global.Interfaces;
using FA_Manager.Services.Global.Models;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace FA_Manager.API.Global.Controllers
{
    [Route("api/global")]
    [ApiController]
    [Produces("application/json")]
    [ProducesResponseType(StatusCodes.Status200OK)]
    [ProducesResponseType(StatusCodes.Status404NotFound)]
    [EnableCors("AllowSpecificOrigin")]
    public class LookupController : ControllerBase
    { 
        private readonly ILookupService _Lookup;
        private readonly ILogger _logger;


        public LookupController(ILookupService Lookup, ILogger<LookupController> logger)
        {
            _Lookup = Lookup;
            _logger = logger;
        }

        [ProducesResponseType(StatusCodes.Status200OK)]
        [HttpGet]
        [Route("lookup/{code}")]
        public IActionResult Get_Vendors(string code)
        {
            //the IP Address can be determined by using HttpContext.Connection.RemoteIpAddress
            var ip = HttpContext.Connection.RemoteIpAddress;

            Lookup_Model res = new Lookup_Model();
            switch (code.ToUpper())
            {
                case "FINANCE/P":
                    res = _Lookup.Parent_COAs();
                    break;
                case "FINANCE/D":
                    res = _Lookup.Detailed_COAs();
                    break;
                default:
                    res.MessageBox = $"Did not get Lookup through {(code=="" ? "Empty" : code)} Code";
                    break;
            }
            return Ok(res);
        }
    }
}
