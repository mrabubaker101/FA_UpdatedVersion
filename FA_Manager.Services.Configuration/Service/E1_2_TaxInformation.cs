using FA_Manager.Services.Configuration.Interfaces;
using FA_Manager.Services.Configuration.Models;
using FA_Solutions.AdvanceLibrary.DBEnvironment;
using Microsoft.Extensions.Logging;
using System.Data;

namespace FA_Manager.Services.Configuration.Service
{
    public class E1_2_TaxInformation : IE1_2_TaxInformation
    { 
        private readonly IDatabase _database;
        private readonly ILogger _logger;
        public E1_2_TaxInformation(IDatabase database, ILogger<E1_2_TaxInformation> logger)
        {
            _database = database;
            _logger = logger;
        }

        public ResponseHelper Add_Bank(Bank_Request request)
        {
            throw new System.NotImplementedException();
        }

        public ResponseHelper Delete_Bank(int BankId)
        {
            throw new System.NotImplementedException();
        }

        public ResponseHelper Edit_Bank(int BankId, Bank_Request request)
        {
            throw new System.NotImplementedException();
        }

        public DataTable Get_AllBanks()
        {
            throw new System.NotImplementedException();
        }
    }
}
