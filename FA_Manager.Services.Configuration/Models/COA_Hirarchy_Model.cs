using System.Collections.Generic;
using System.Data;

namespace FA_Manager.Services.Configuration.Models
{
    public class StoreCode
    {
        public string MessageBox { get; set; }
        public bool Success { get; set; }
        public object Information { get; set; }
    }

    public class COADetails
    {
        public string AcctountType { get; set; }
        public int SelectedLevel { get; set; }
        public int AccountID { get; set; }
        public string Code { get; set; }
        public string ParentCode { get; set; }
        public string Title { get; set; }

    }

    public class Mdl_COA_Hirarchy
    {
        public string Title { get; set; }
        public string Parent_Code { get; set; }
        public string Code { get; set; }
        public int Account_Id { get; set; }
        public string AcctountType { get; set; }
        public int LevelNo { get; set; }
        public bool IsActive { get; set; }
        public List<Mdl_COA_Hirarchy> children { get; set; }
    }
}
