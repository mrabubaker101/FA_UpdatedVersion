using FA_Manager.Services.Global.Models;
using FA_Solutions.Microservice.Interfaces; 

namespace FA_Manager.Services.Global.Interfaces
{
    public interface ILookupService : MyTransientService
    {
        Lookup_Model Detailed_COAs();
        Lookup_Model Parent_COAs();
    }
}
