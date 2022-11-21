namespace FA_Manager.Services.Global.Models
{
    public class Accounts
    {
        public string Code { get; set; }
        public string Name { get; set; }
        public int Parent { get; set; }
        public string Type { get; set; }
        public bool active { get; set; }
        public int levelno { get; set; }
    }
}
