using FA_Manager.Services.Configuration.Interfaces;
using FA_Manager.Services.Configuration.Models;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using System.Data;

namespace FA_Manager.API.Configuration.Controllers.ExecutiveSettings
{
    [ApiController]
    [Route("api/configuration")]
    [Produces("application/json")]
    [ProducesResponseType(StatusCodes.Status200OK)]
    [ProducesResponseType(StatusCodes.Status404NotFound)]
    [EnableCors("AllowSpecificOrigin")]
    public class E1_CompanySetupController : ControllerBase
    {  
        private readonly ILogger _logger;
        private readonly IE1_CompanySetupService _service;

        public E1_CompanySetupController(IE1_CompanySetupService service, ILogger<E1_CompanySetupController> logger)
        {
            _logger = logger;
            _service = service;
        }
        [ProducesResponseType(StatusCodes.Status200OK)]
        [HttpGet]
        [Route("chartofaccounts-list")]
        public IActionResult Get_Hirarchy() => Ok(_service.Get_COA());

        [ProducesResponseType(StatusCodes.Status200OK)]
        [HttpGet]
        [Route("coa-tree")]
        public IActionResult Get_Tree_COA() => Ok(_service.Get_Tree_COA());


        [ProducesResponseType(StatusCodes.Status200OK)]
        [HttpPost]
        [Route("Save-COA")]
        public IActionResult SAVE_COA(COADetails AccountDetails)
        {
            StoreCode store = _service.Save_COA(AccountDetails);
            return Ok(store);
        }
    }
 
}
