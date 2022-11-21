
using FA_Manager.Services.Configuration.Models;
using FA_Solutions.Microservice.Interfaces;
using System.Data;

namespace FA_Manager.Services.Configuration.Interfaces
{
    public interface IE1_2_TaxInformation : MyTransientService
    {
        DataTable Get_AllBanks();
        ResponseHelper Add_Bank(Bank_Request request);
        ResponseHelper Edit_Bank(int BankId, Bank_Request request);
        ResponseHelper Delete_Bank(int BankId);
        
    }


}
