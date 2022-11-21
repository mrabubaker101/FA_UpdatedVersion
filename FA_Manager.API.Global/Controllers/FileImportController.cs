using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using System.IO;

namespace FA_Manager.API.Global.Controllers
{
    [Route("api/global")]
    [ApiController]
    [EnableCors("AllowSpecificOrigin")]
    public class FileImportController : ControllerBase
    {

        //Single File Model => Working 
        [HttpPost]
        [AllowAnonymous]
        [Route("import-file")]
        public IActionResult GetFile([FromForm] FileModal File)
        {
            ImportDocument_Response response = new ImportDocument_Response();
            try
            {
                string path = Path.Combine(Directory.GetCurrentDirectory(), "wwwroot", File.FileName);
                using (Stream stream = new FileStream(path, FileMode.Create))
                {
                    File.File.CopyTo(stream);
                    response.GoodResponse = true;
                    response.MessageBox = "Successfully Saved";
                }
            }
            catch (System.Exception e)
            {
                response.GoodResponse = false;
                response.MessageBox = "Exception due to " + e.Message;
            }
            return Ok(response);
        }
             
       //Multiple File Model => Working 
        [HttpPost]
        [AllowAnonymous]
        [Route("import-multiple-dcument")]
        public IActionResult GetDocuments([FromForm] List<Documents> documents)
        {
            ImportDocument_Response response = new ImportDocument_Response();
            try
            {
                foreach (Documents file in documents)
                {
                    string path = Path.Combine(Directory.GetCurrentDirectory(), "wwwroot", file.DocumentName);
                    using (Stream stream = new FileStream(path, FileMode.Create))
                    {
                        file.Document.CopyTo(stream);
                        response.GoodResponse = true;
                        response.MessageBox = "Successfully Saved";
                    }
                }
            }
            catch (System.Exception e)
            {
                response.GoodResponse = false;
                response.MessageBox = "Exception due to " + e.Message;
            }
            return Ok(response);
        }
    }
    public class Documents
    {
        public string DocumentName { get; set; }
        public IFormFile Document { get; set; }
        public string UserId { get; set; }
    }
    public class FileModal
    {
        public string FileName { get; set; }
        public IFormFile File { get; set; } 
    } 
    public class ImportDocument_Response
    {
        public string MessageBox { get; set; }
        public bool GoodResponse { get; set; } //single File
    }
}
