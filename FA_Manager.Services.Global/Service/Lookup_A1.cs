using FA_Manager.Services.Global.Interfaces;
using FA_Manager.Services.Global.Models;
using FA_Solutions.AdvanceLibrary.DBEnvironment;
using Microsoft.Extensions.Logging;
using System;
using System.Collections.Generic;
using System.Data;

namespace FA_Manager.Services.Global.Service
{
    public class Lookup_A1 : ILookup_A1
    {
        private readonly IDatabase _database;
        private readonly ILogger<Lookup_A1> _logger;
         
        public Lookup_A1(IDatabase database, ILogger<Lookup_A1> logger)
        {
            _logger = logger;
            _database =database;
        }
        public string MT1()
        {
            return "Lookup_A1 Class's Method";
        }

        public IEnumerable<Accounts> Get_AccountList()
        {
            try
            {

            }
            catch (Exception e)
            { 
                
            }
            DataTable  accounts = _database.SqlView("select * from [accounts]");
            List<Accounts> ls = new List<Accounts>();
            foreach (DataRow dr in accounts.Rows)
            {
                Accounts acc = new Accounts();
                acc.Code = dr["code"].ToString();
                acc.Name = dr["ac_name"].ToString();
                acc.Type = dr["type"].ToString();
                acc.Parent = Convert.ToInt32(dr["parent"]);
                acc.levelno = Convert.ToInt32(dr["levelno"]);
                acc.active = Convert.ToBoolean(dr["active"]);
                ls.Add(acc);
            }
            return ls;
        }

        public DataTable Get_Enries() => _database.SqlView("select * from [FA_Entry]");
        public DataTable Get_Vouchers() => _database.SqlView("select * from [FA_Voucher]");
        public object Get_Chart_Of_Accounts() => _database.SqlView("select * from [TBL_COA]");
        public DataTable Get_Control() => _database.SqlView("select * from tbl_control");
         
        
    }

}
