using Microsoft.Extensions.Caching.Memory;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.Logging;
using System;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient; 


namespace FA_Solutions.AdvanceLibrary.DBEnvironment
{
    public class DataBase : IDatabase
    {
        //Initialize Database Factory class
        
        private SqlConnection connection;
        private IMemoryCache _memoryCache; 
        private ILogger _logger; 
        private string connectionString { get; set; }
          
        string IDatabase.connectionString => connectionString;

        private readonly IConfiguration _configuration;
        public DataBase(IConfiguration configuration,ILogger<DataBase> logger, string pConnectionString = "")
        {
            _configuration = configuration;
            _logger = logger;
            connectionString = pConnectionString;
            if (string.IsNullOrEmpty(pConnectionString))
            {
                connectionString = _configuration["ConnectionStrings:DefaultConnection"];
            } 
            connection = new SqlConnection(connectionString); 
        }

        public void InitConnection(IMemoryCache memoryCache, string clientCode, string userID)
        {
            throw new NotImplementedException();
        }
         
        public int ExecuteNonQuery(string sqlCommand, List<SqlParameter> parameter=null)
        {
            int rowsAffected = 0;
            try
            {
                using (SqlConnection con = new SqlConnection(connectionString))
                {
                    using (SqlCommand cmd = new SqlCommand(sqlCommand, con))
                    {
                        cmd.CommandType = CommandType.Text;
                        
                        
                        //cmd.Parameters.AddWithValue("@Name", name);
                        //cmd.Parameters.AddWithValue("@City", city);
                        
                        con.Open();
                        rowsAffected = cmd.ExecuteNonQuery();
                        con.Close();
                    }
                }
            }
            catch (Exception)
            { 
                throw;
            }
            return rowsAffected;
        }

        public DataTable SqlView(string sqlCommand)
        {
            DataTable dt = new DataTable();
            try
            {
                using (SqlConnection con = new SqlConnection(connectionString))
                {
                    using (SqlCommand cmd = new SqlCommand(sqlCommand, con))
                    {
                        cmd.CommandType = CommandType.Text;
                        using (SqlDataAdapter sda = new SqlDataAdapter(cmd))
                        {
                            sda.Fill(dt);
                        }
                    }
                }
            }
            catch (Exception)
            {
                throw;
            }
            return dt;
        }
        public DataSet SqlView_DataSet(string sqlCommand)
        {
            DataSet set = new DataSet();
            try
            {
                using (SqlConnection con = new SqlConnection(connectionString))
                {
                    using (SqlCommand cmd = new SqlCommand(sqlCommand, con))
                    {
                        cmd.CommandType = CommandType.Text;
                        using (SqlDataAdapter sda = new SqlDataAdapter(cmd))
                        {
                            using (DataTable dt = new DataTable())
                            {
                                sda.Fill(dt);
                                set.Tables.Add(dt);
                            }
                        }
                    }
                }
            }
            catch (Exception)
            {
                throw;
            }
            return set;
        }

        public DataTable SqlView(string sqlCommand, List<SqlParameter> par)
        {
            throw new NotImplementedException();
        }
          
        public List<T> SqlView<T>(string sqlCommand, bool clientId = false)
        {
            throw new NotImplementedException();
        } 
        
    }
}
