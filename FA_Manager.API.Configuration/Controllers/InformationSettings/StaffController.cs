using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;

namespace FA_Manager.API.Configuration.Controllers.InformationSettings
{
    [Route("api/information")]
    [ApiController]
    public class StaffController : ControllerBase
    {
        private readonly ILogger _logger;

        public StaffController(ILogger logger)
        {
            _logger = logger;
        }

        [ProducesResponseType(StatusCodes.Status200OK)]
        [HttpGet]
        [Route("list")]
        public IActionResult GetList()
        {
            return Ok("Submitted!!!");
        }
    }
}
