using FA_Manager.Services.Configuration.Interfaces;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc; 

namespace FA_Manager.API.Configuration.Controllers
{
    [ApiController]
    [Route("api/configuration")]
    [Produces("application/json")]
    [ProducesResponseType(StatusCodes.Status200OK)]
    [ProducesResponseType(StatusCodes.Status404NotFound)]
    [EnableCors("AllowSpecificOrigin")]
    public class Finance_A2Controller : ControllerBase
    {

        IFinance_A2 _IFinance_A2;

        public Finance_A2Controller(IFinance_A2 IFinance_A2)
        {
            _IFinance_A2 = IFinance_A2;
        }

        [ProducesResponseType(StatusCodes.Status200OK)]
        [HttpGet]
        [Route("finance_a2/all")]
        public IActionResult Get_List(string type)
        {
            var data = _IFinance_A2.FINT1();
            return Ok(data);
        }
    }
}
