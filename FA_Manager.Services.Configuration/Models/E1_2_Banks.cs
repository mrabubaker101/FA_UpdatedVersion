using System;
namespace FA_Manager.Services.Configuration.Models
{
    public class E1_2_Banks
    {
    }
    public class Bank_Request 
    { 
        public  string BankCode { get; set; }
        public  string BankName { get; set; }
        public  bool BankAccount { get; set; }
        public  bool IsMain { get; set; }
        public  DateTime InactiveDate { get; set; }
        public  string Location { get; set; }
        public  DateTime CreatedOn { get; set; }
    } 
}
