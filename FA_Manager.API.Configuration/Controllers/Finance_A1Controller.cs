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
    public class Finance_A1Controller : ControllerBase
    {
        IFinance_A1 _IFinance_A1;

        public Finance_A1Controller(IFinance_A1 IFinance_A1)
        {
            _IFinance_A1 = IFinance_A1;
        }



        [ProducesResponseType(StatusCodes.Status200OK)]
        [HttpGet]
        [Route("finance_a1/all")]
        public IActionResult Get_List(string type)
        {
            var data = _IFinance_A1.FINANCE2();
            return Ok(data);
        }
    }
}
