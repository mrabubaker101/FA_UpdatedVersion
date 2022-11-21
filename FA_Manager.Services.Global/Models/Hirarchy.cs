using System.Collections.Generic; 
namespace FA_Manager.Services.Global.Models
{
    public class Hirarchy
    {
        public string Title { get; set; }
        public string Parent_Code { get; set; }
        public string Code { get; set; }
        public int Account_Id { get; set; }
        public string AcctountType { get; set; }
        public bool LevelNo { get; set; }
        public bool IsActive { get; set; }
        public List<Hirarchy> children { get; set; }

    }
}
