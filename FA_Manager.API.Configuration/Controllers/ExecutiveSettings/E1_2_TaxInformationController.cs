using FA_Manager.Services.Configuration.Interfaces;
using FA_Manager.Services.Configuration.Models;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
 
namespace FA_Manager.API.Configuration.Controllers.ExecutiveSettings
{
    [ApiController]
    [Route("api/configuration")]
    [Produces("application/json")]
    [ProducesResponseType(StatusCodes.Status200OK)]
    [ProducesResponseType(StatusCodes.Status404NotFound)]
    [EnableCors("AllowSpecificOrigin")]
    public class E1_2_TaxInformationController : ControllerBase
    {
        private readonly ILogger _logger;
        private readonly IE1_2_TaxInformation _service;

        public E1_2_TaxInformationController(IE1_2_TaxInformation service, ILogger<E1_2_TaxInformationController> logger)
        {
            _logger = logger;
            _service = service;
        }
        [ProducesResponseType(StatusCodes.Status200OK)]
        [HttpGet]
        [Route("bank-list")]
        public IActionResult Get_Banks() => Ok(_service.Get_AllBanks());

        [ProducesResponseType(StatusCodes.Status200OK)]
        [HttpPost]
        [Route("add-bank")]
        public IActionResult Add_Bank(Bank_Request request) => Ok(_service.Add_Bank(request));

        [ProducesResponseType(StatusCodes.Status200OK)]
        [HttpPost]
        [Route("Edit-bank")]
        public IActionResult Edit_Bank(int BankId, Bank_Request request) => Ok(_service.Edit_Bank(BankId, request));


        [ProducesResponseType(StatusCodes.Status200OK)]
        [HttpDelete]
        [Route("remove-bank")]
        public IActionResult Edit_Bank(int BankId) => Ok(_service.Delete_Bank(BankId));

    }
}
