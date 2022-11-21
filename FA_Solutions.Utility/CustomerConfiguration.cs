using System; 
namespace FA_Solutions.Utility
{
    public class CustomerConfiguration
    {
        public int ID { get; set; }
        public string CustomerCode { get; set; }
        public string CustomerName { get; set; }
        public string LastImportFolder { get; set; }
        public DateTime? LastImportedOn { get; set; }
        public string LastImportedFromIP { get; set; }
        public string LastImportedFromUser { get; set; }
        public string DatabaseConnection { get; set; }
    }
}
