using FA_Manager.Services.Configuration.Models;
using FA_Solutions.Microservice.Interfaces;
using System.Collections.Generic;
using System.Data;
namespace FA_Manager.Services.Configuration.Interfaces
{
    public interface IE1_CompanySetupService : MyTransientService
    {
        DataTable COA { get; }
        DataTable Get_COA();

        List<Mdl_COA_Hirarchy> Get_Tree_COA();
        StoreCode Save_COA(COADetails AccountDetails);
    }
}
