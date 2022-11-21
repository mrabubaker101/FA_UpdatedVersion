using FA_Manager.Services.Global.Interfaces;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;

namespace FA_Manager.API.Global.Controllers
{  
    [ApiController]
    [Route("api/global")]
    [Produces("application/json")]
    [ProducesResponseType(StatusCodes.Status200OK)]
    [ProducesResponseType(StatusCodes.Status404NotFound)]
    [EnableCors("AllowSpecificOrigin")]
    public class Lookup_A1Controller : ControllerBase
    {

        #region Testing Dependency Injection LifeTime
        private readonly ILookup_A1 _ILookup_A1;
        private readonly ILogger _logger;


        public Lookup_A1Controller(ILookup_A1 ILookup_A1,ILogger<Lookup_A1Controller> logger)
        {
            _ILookup_A1 = ILookup_A1;
            _logger = logger;
        }

        [ProducesResponseType(StatusCodes.Status200OK)]
        [HttpGet]
        [Route("accountlist")]
        public IActionResult Get_Vendors()
        {
            var res =  _ILookup_A1.Get_AccountList();
            return Ok(res);
        }
         
        [ProducesResponseType(StatusCodes.Status200OK)]
        [HttpGet]
        [Route("entries")]
        public IActionResult Get_Entries()
        {
            var res = _ILookup_A1.Get_Enries();
            return Ok(res);
        }
         
        [ProducesResponseType(StatusCodes.Status200OK)]
        [HttpGet]
        [Route("vouchers")]
        public IActionResult Get_Vouchers()
        {
            var res = _ILookup_A1.Get_Vouchers();
            return Ok(res);
        }
        [ProducesResponseType(StatusCodes.Status200OK)]
        [HttpGet]
        [Route("appcontrols")]
        public IActionResult Get_Global()
        {
            var data = _ILookup_A1.Get_Control();
            return Ok(data);
        }
        [ProducesResponseType(StatusCodes.Status200OK)]
        [HttpGet]
        [Route("lookup_a1/all")]
        public IActionResult Get_List(string type)
        {
            var data =_ILookup_A1.MT1();
            return Ok(data);
        }

        #endregion
    }
}
