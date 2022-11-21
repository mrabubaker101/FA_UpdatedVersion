using Microsoft.Extensions.Configuration;
 
namespace FA_Solutions.Utility
{
    public class ConfigHelper
    {
        public static string EnvironmentName { get; set; }
        public static IConfiguration Configuration { get; set; }
    }
}
