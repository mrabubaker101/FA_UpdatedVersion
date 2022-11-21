using FA_Manager.Services.Global.Interfaces;
using FA_Manager.Services.Global.Models;
using FA_Solutions.AdvanceLibrary.DBEnvironment;
using Microsoft.Extensions.Logging;
namespace FA_Manager.Services.Global.Service
{
    public class LookupService : ILookupService
    {
        private readonly IDatabase _database;
        private readonly ILogger<LookupService> _logger;

        public LookupService(IDatabase database, ILogger<LookupService> logger)
        {
            _logger = logger;
            _database = database;
        }

        public Lookup_Model Detailed_COAs() =>new Lookup_Model() { Data = _database.SqlView("select * from TBL_COA where Type = 'D'") } ;
        public Lookup_Model Parent_COAs() => new Lookup_Model() { Data = _database.SqlView("select * from TBL_COA where Type = 'P'") };
    }
}
