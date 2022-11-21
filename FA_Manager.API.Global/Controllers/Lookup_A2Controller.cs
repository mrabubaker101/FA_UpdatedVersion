using FA_Manager.Services.Global.Interfaces;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc; 

namespace FA_Manager.API.Global.Controllers
{
    [ApiController]
    [Route("api/global")]
    [Produces("application/json")]
    [ProducesResponseType(StatusCodes.Status200OK)]
    [ProducesResponseType(StatusCodes.Status404NotFound)]
    [EnableCors("AllowSpecificOrigin")]
    public class Lookup_A2Controller : ControllerBase
    {
         
        #region Testing Dependency Injection LifeTime
        ILookup_A2 _ILookup_A2;


        public Lookup_A2Controller(ILookup_A2 ILookup_A2)
        {
            _ILookup_A2 = ILookup_A2;
        }



        [ProducesResponseType(StatusCodes.Status200OK)]
        [HttpGet]
        [Route("lookup_a2/all")]
        public IActionResult Get_List(string type)
        {
            var data = _ILookup_A2.MIT1();
            return Ok(data);
        }
        #endregion

    }
}
