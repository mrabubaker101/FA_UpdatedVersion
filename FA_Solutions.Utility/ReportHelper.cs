using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace FA_Solutions.Utility
{
    public class ReportHelper
    {
        static string BASE_PATH;
        public ReportHelper()
        { 
        }

        public static byte[] CreateReport(string RepName, DataSet ds, bool InDirectory = false, string DestinationPath = "")
        {
            throw new NotImplementedException();
            //try
            //{
            //string mimtype = "";
            //int extension = 1;
            //BASE_PATH = ConfigHelper.Configuration["BackOffice:ReportPath"];
            //Dictionary<string, string> para = new Dictionary<string, string>();
            //string _reportPath = $"{BASE_PATH + RepName}.rdlc";
            //LocalReport localReport = new LocalReport(_reportPath);
            //ds.DataSetName = "DataSet1";
            //localReport.AddDataSource(ds.DataSetName, ds.Tables[0]);
            //Encoding.RegisterProvider(CodePagesEncodingProvider.Instance);
            //ReportResult result = localReport.Execute(RenderType.Pdf, extension, parameters: para, mimtype);
            //    byte[] bytes = result.MainStream;
            //    if (InDirectory)
            //        File.WriteAllBytes(DestinationPath, bytes);
            //    return bytes;
            //}
            //catch (Exception ex)
            //{
            //    return null;
            //}
            //}
        }
    }
}
