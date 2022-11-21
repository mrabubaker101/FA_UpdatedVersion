using System;
using System.Data;
using System.Data.Common;
using System.Data.SqlClient; 

namespace FA_Solutions.Utility
{
    public class DataBaseEnvironment
    {
        private SqlConnection con = null;
        private DbDataAdapter dbAdapter;
        private SqlConnection connection;
        private string connectionString { get; set; }

        //public [readonly]
        public SqlConnection connectionStr { get; }

        public DataBaseEnvironment(string pconnectionString = "")
        {
            connectionString = pconnectionString;
            if (string.IsNullOrEmpty(pconnectionString))
            {
                connectionString = ConfigHelper.Configuration["ConnectionStrings:DefaultConnection"];
            }
            connection = new SqlConnection(connectionString);
            connectionStr = connection;
        }
         
        public DataTable SqlView(string queryString)
        {
            connection = new SqlConnection(connectionString);
            DataTable dt = new DataTable();
            DataSet ds = new DataSet();
            try
            {
                connection.Open();
                SqlDataAdapter adapter = new SqlDataAdapter(queryString, connection);
                adapter.Fill(ds);
                dt = ds.Tables[0];
            }
            catch (SqlException e)
            { 
                dt = null;
            }
            finally
            {
                connection.Close();
            }
            return dt;
        }

        public int NonQuery(string sqlCommand)
        {
            connection = new SqlConnection(connectionString);
            int recordsAffected = 0;
            try
            {
                SqlCommand cmd = new SqlCommand(sqlCommand, connection);
                //cmd.CommandTimeout = 90;
                //foreach (var item in parameter)
                //{
                //    cmd.Parameters.Add(item);
                //}
                connection.Open();
                recordsAffected = cmd.ExecuteNonQuery();
            }
            catch (Exception e)
            {
                return 0;
            }
            finally
            {
                connection.Close();
            }
            return recordsAffected;
        }
    }
}
