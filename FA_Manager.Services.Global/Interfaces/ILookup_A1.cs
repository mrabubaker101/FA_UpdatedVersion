using FA_Manager.Services.Global.Models;
using FA_Manager.Services.Global.Service;
using System.Collections.Generic;
using System.Data;

namespace FA_Manager.Services.Global.Interfaces
{
    public interface ILookup_A1
    {
        string MT1();
        IEnumerable<Accounts> Get_AccountList();
        object Get_Chart_Of_Accounts();
        DataTable Get_Enries();
        DataTable Get_Vouchers(); 
        DataTable Get_Control(); 
    }
}
