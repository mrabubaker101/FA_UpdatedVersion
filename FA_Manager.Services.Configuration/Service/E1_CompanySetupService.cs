using FA_Manager.Services.Configuration.Interfaces;
using FA_Manager.Services.Configuration.Models;
using FA_Solutions.AdvanceLibrary.DBEnvironment;
using FA_Solutions.AdvanceLibrary.Toolkitz;
using Microsoft.Extensions.Logging;
using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
namespace FA_Manager.Services.Configuration.Service
{
    public  class E1_CompanySetupService : IE1_CompanySetupService
    {
        private readonly IDatabase _database;
        private readonly ILogger _logger;
        public E1_CompanySetupService(IDatabase database,ILogger<E1_CompanySetupService> logger)
        {
            _database = database;   
            _logger = logger;   
        }
        public DataTable COA { get => _database.SqlView("select * from [TBL_COA]"); }

        public DataTable Get_COA() => _database.SqlView("select * from tbl_coa");
        private List<Mdl_COA_Hirarchy> _tree = new List<Mdl_COA_Hirarchy>();


        private void Build_Tree_ChartOfAccounts(string parentId, Mdl_COA_Hirarchy parentNode)
        {
            Mdl_COA_Hirarchy ChildNode;
            DataRow[] seek = COA.Select($"[PARENT_CODE]='{parentId}'");
            foreach (DataRow dr in seek)
            {
                Mdl_COA_Hirarchy data = new Mdl_COA_Hirarchy()
                {
                    Account_Id = (int)dr["Account_Id"],
                    Parent_Code = (string)dr["Parent_Code"],
                    Code = (string)dr["Code"],
                    Title = (string)dr["Title"],
                    LevelNo = (int)dr["level_no"],
                    IsActive = (bool)dr["isActive"],
                    AcctountType = (string)dr["Type"] //detailed / parent / master
                };

                if (parentNode == null)
                {
                    _tree.Add(data);
                    ChildNode = data;
                }
                else
                {
                    if (parentNode.children == null)
                    {
                        parentNode.children = new List<Mdl_COA_Hirarchy>();
                    }
                    parentNode.children.Add(data);
                    ChildNode = data;
                }
                Build_Tree_ChartOfAccounts(dr["Code"].ToString(), ChildNode);
            }
        }

        public List<Mdl_COA_Hirarchy> Get_Tree_COA()
        {
            Build_Tree_ChartOfAccounts("0", null);
            return _tree;
        }

        string NewCode = "";
        public StoreCode Save_COA(COADetails AccountDetails)
        {
            StoreCode res = new StoreCode();
            try
            {
                if (AccountDetails.AcctountType == "P")
                {
                    string parent = AccountDetails.ParentCode;
                    string code = AccountDetails.Code;
                    int level = AccountDetails.SelectedLevel;
                    string prev_opt = parent.Split('-')[0].Trim();
                    string curr_opt = code.Split('-')[0].Trim();
                    DataTable dt = _database.SqlView($"SELECT MAX([CODE]) _max FROM TBL_COA WHERE [PARENT_CODE] = '{code}'");

                    if (true)
                    {
                        if (dt.Rows[0]["_max"] == DBNull.Value)
                        {
                            string codes;
                            if (level < 3)
                                codes = "-01";
                            else
                                codes = "-01"; //code = "-001";
                            string Code = "New Code will be " + code + codes;
                            NewCode = code + codes;
                            res.Information = new { ParentCode = parent, NewCode,NewLevel = level+1 };


                             
                            //NewCode = curr_opt + "-" + "01";
                            //res.Information = new { ParentCode = parent, NewCode };
                        }
                        else
                        {
                            //this will only for numeric 
                            var ex = dt.Rows[0]["_max"].ToString();
                            var x = ex.Split('-');
                            var check = x.Last();
                            var y = Convert.ToInt32(x.Last()) + 1;
                            var n = Strings.PadL(y.ToString(), 2, '0');
                            var newCode = code + "-" + n;
                            NewCode = newCode;
                            res.Information = new { ParentCode = parent, NewCode, NewLevel = level + 1 };
                        }

                    }
                    else
                    {
                        string codes;
                        if (level < 3)
                            codes = "-01";
                        else
                            codes = "-01"; //code = "-001";
                        string Code = "New Code will be " + code + codes;
                        NewCode = code + codes;
                        res.Information = new { ParentCode = parent, NewCode,NewLevel = level + 1 };
                    }
                }
                else
                {
                    res.MessageBox = "Account opening Failed,New Account can't be opened under a Transaction Account";
                }
            }
            catch (Exception e)
            {
                res.Success = false;
                res.MessageBox = e.Message;
                return res;
            }
            res.Success = true;
            return res;
        }
    }
}
