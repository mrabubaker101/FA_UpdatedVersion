using Microsoft.AspNetCore.Authorization;
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
    public class Login_AuthController : ControllerBase
    {

        private readonly ILogger<Login_AuthController> _logger;

        public Login_AuthController(ILogger<Login_AuthController> logger)
        {
            _logger = logger;
        }

        [AllowAnonymous]
        [ProducesResponseType(StatusCodes.Status200OK)]
        [HttpPost]
        [Route("login")]
        public IActionResult Do_Login(LoginModel login)
        {
            if (login.username == "aa")
            {
                return Ok(new {Message = "Login Successfully", user = login, token = "abcdefghijklmnopqrstuvwxyz" });
            }
            else
            {
                return BadRequest(new { Message = "Invalid attempt to login" });
            }
        }


        [AllowAnonymous]
        [ProducesResponseType(StatusCodes.Status200OK)]
        [HttpGet]
        [Route("test")]
        public IActionResult Do_API_Test(LoginModel login)
        {
                return Ok("Do_API_Tested called");
        }
    }
    public class LoginModel
    {
        public string username { get; set; }
        public string Password { get; set; }
        public int clientcode { get; set; }
        
    }
}
