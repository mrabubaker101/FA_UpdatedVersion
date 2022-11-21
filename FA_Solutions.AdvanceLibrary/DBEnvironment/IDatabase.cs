using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Data.SqlClient;
using Microsoft.Extensions.Caching.Memory;

namespace FA_Solutions.AdvanceLibrary.DBEnvironment
{
    public interface IDatabase
    {  
        protected string connectionString { get; }

        public DataSet SqlView_DataSet(string sqlCommand);

        public void InitConnection(IMemoryCache memoryCache, string clientCode, string userID); 
        public int ExecuteNonQuery(string sqlCommand, List<SqlParameter> parameter=null);
        public DataTable SqlView(string sqlCommand);
        public DataTable SqlView(string sqlCommand, List<SqlParameter> par);   
        public List<T> SqlView<T>(string sqlCommand, bool clientId = false);
    }
}
