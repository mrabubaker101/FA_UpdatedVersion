using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using TestCore;
using Xunit;

namespace FA_Manager.Test.Configuration
{
    public class FA_E11_Form : TestBase
    {

        //private ILWF11_Service _request;

        [Fact]
        [Trait("ANY", "ANY")]
        public async Task Test_Add_FADep()
        {
            try
            {
                //dbEnv.InitConnection(memoryCache, "MAC002", "1");
                //_request = new LWF11_Service(dbEnv, commonHelper, (Microsoft.Extensions.Logging.ILogger<LWF11_Service>)logger, gv);
                //req.CntInvoiceDate = DateTime.Now;
                //var Result = _request.AddFaDep(2333, 3232, req);
                //Assert.True(Result);
            }
            catch (Exception e)
            {

            }
        }
    }
}
