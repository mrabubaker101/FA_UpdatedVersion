import React ,{useState,useEffect,useRef}from 'react'
import { Checkbox, Container, IconButton, Paper, Table, TableBody, TableCell, TableHead, TableRow, TextField, Typography } from '@mui/material';
import TableContainer from '@mui/material/TableContainer'; 
import CheckIcon from '@mui/icons-material/Check';
import CloseIcon from '@mui/icons-material/Close';

const PaymentGrid=(props)=> {
    let {
        GridData,
        setGridData,

        GridPayments,
        setGridPayments,

        MasterChecked,
        setMasterChecked,

        SUM_Payment,
        setSUM_Payment,
        
        IsWait,
        childern
    } = props;
 const [RowPayment, setRowPayment] = useState(0.00)
 const [CheckdPayment, setCheckdPayment] = useState(false)
 const [SelectedList, setSelectedList] = useState([])
 const tbref = useRef(null)
 
 useEffect(() => {
  SumPayment()
}, [GridData])


const SumPayment=()=>{  
  let sum = GridData
  .map(c=>parseFloat(c.Payment))
  .reduce((pre,nxt)=>pre+nxt,0)  
  setSUM_Payment(sum)
}
 

const HandelRowPayment=(ind,arr)=>{
debugger
    //already payment does not exist

    
     let data = [...GridPayments]
     let modalData = 
     {
        InvoiceNo:arr[ind].InvoiceNo,
        DueDate:arr[ind].DueDate,
        Amount:arr[ind].Amount,
        Discount:arr[ind].Discount,
        Paid:arr[ind].Paid,
        Balance:arr[ind].Balance,
        Payment:RowPayment
    }; 
     data.push(modalData)
     setGridPayments(data)
     setRowPayment(0.00)
} 


const han=(e,ind,arr)=>{
    debugger 
    setCheckdPayment(e.target.checked);  
    if(RowPayment>0)
    {
        if(CheckdPayment===false){
        //already payment does not exist
     let data = [...GridPayments]
     let modalData = 
     {
        InvoiceNo:arr[ind].InvoiceNo,
        DueDate:arr[ind].DueDate,
        Amount:arr[ind].Amount,
        Discount:arr[ind].Discount,
        Paid:arr[ind].Paid,
        Balance:arr[ind].Balance,
        Payment:RowPayment,
        IsPay:CheckdPayment
    }; 
     data.push(modalData)
     setGridPayments(data)
     setRowPayment(0.00)
        }

    else
    {
        let data = [...GridPayments]
        var ss= data.splice(ind,1) 
        setGridPayments(data)
        setRowPayment(0.00)
    }  
    CheckOutRow()
}
}




  // Select/ UnSelect Table rows
  const onMasterCheck=(e)=> {
    let tempList = [...GridPayments];
    
    // Check/ UnCheck All Items
    tempList.map((user) => (user.Pay = e.target.checked));

    //Update State
    setMasterChecked(e.target.checked)
    setGridPayments(tempList)
    setSelectedList(GridPayments.filter((e) => e.selected))
  }



 // Update List Item's state and Master Checkbox State
 const onItemCheck=(e, item) => {
  //debugger
  let tempList = [...GridData];
  var ApplyCheck = tempList.map((user) => {
    //check to see passeed row and changing row are same or not
    if (user.InvoiceNo === item.InvoiceNo) 
    {
      if(e.target.checked)
      {
        if(user.Balance > 0)
        {  
          user.Payment = user.Balance;
          user.Pay = e.target.checked; 
        }
        else
        {
           alert('Must be a positive number for payment') 
        }
      }
      else  
      {
          user.Payment=0.00
          user.Pay = e.target.checked; 
      } 
    }
    return user;
  });

  //To Control Master Checkbox State
  const totalItems = GridData.length;
  const totalCheckedItems = tempList.filter((e) => e.Pay).length;

  // Update State
  setMasterChecked(totalItems === totalCheckedItems)
  setGridData(ApplyCheck)
  setSelectedList(GridData.filter((e) => e.Pay)) 
}
 

const CheckOutRow=()=>{
  debugger
  if(RowPayment>0){ 
    let pays = GridPayments.map(c=>c.Payment)
    console.log("pays",pays);
    let cc = pays.reduce(function(pre,next){return pre+next},0)
    console.log("cc",cc);
  }
}


const HandelPay=(e,item,ind)=>{
  //debugger
  let tempList = [...GridData];
  var ApplyCheck = tempList.map((user) => {
    if (user.InvoiceNo === item.InvoiceNo)
     {
       let value = parseFloat(e.target.value) ;
       if(value == NaN || value == 0 )
       {
         user.Pay = false;
         user.Payment=0
         user.Iserror=false;
       }
      else if(value > 0 && value <= user.Balance)
      {   
        user.Payment =value ;
        user.Iserror=false;
      }
      else
      {
        user.Iserror=true;
        //alert('can not greater then balance')
      }
  }
    return user;
  });

  setGridData(ApplyCheck)
   //setRowPayment([e.target.name] = e.target.value)
}

    return (
    <div>
      {/* GREEN =>#c8e6c9
      RED => #ffcdd2
      WARN=> #fff3e0*/}
        <TableContainer  >
          <Table size="small" >  
            <TableHead>
              <TableRow>
                <TableCell><h4>Invoice </h4></TableCell> 
                <TableCell><h4>Due Date</h4></TableCell>
                <TableCell align="right"><h4>Amount ($)</h4></TableCell>
                <TableCell align="right"><h4>Discount ($)</h4></TableCell>
                <TableCell align="right"><h4>Paid ($)</h4></TableCell>
                <TableCell align="right"><h4>Balance ($)</h4></TableCell>
                <TableCell><h4>Payment ($)</h4></TableCell> 
                <TableCell><h4>Pay <CheckIcon /></h4></TableCell>  
              </TableRow>
            </TableHead>
            <TableBody >
                  {GridData?.map((Row,ind) => (  
                    <TableRow key={ind} sx={{backgroundColor:Row?.Highlight? '#c8e6c9': '#fff3e0'}} > 
                      <TableCell component="th" scope="row">{Row.InvoiceNo}</TableCell> 
                      <TableCell>{Row.DueDate}</TableCell> 
                      <TableCell align="right">{Row.Amount}</TableCell> 
                      <TableCell align="right">{Row.Discount}</TableCell> 
                      <TableCell align="right">{Row.Paid}</TableCell> 
                      <TableCell align="right">{Row.Balance}</TableCell> 
                      
                      
                      <TableCell align="right">
                      {!Row.Highlight &&
                          <TextField
                          //defaultValue={"0.00"} 
                          variant="outlined" 
                      // onChange={(e) => setRowPayment(e.target.value)}    
                      onChange={(e)=>HandelPay(e,Row)}    
                      size="small" 
                      style={{width:"100px"}} 
                      type="number"   
                      name={`name_${Row.InvoicNo}`}
                      value={Row.Payment.toString()} 
                      disabled={Row.Highlight==true? true : IsWait} 
                      InputProps={{
                        inputProps: {
                            style: { textAlign: "right" }
                        }
                          }} 
                          />
                        }
                        {Row.Iserror ? <CloseIcon fontSize='small'/> :null}
                      </TableCell> 

                      <TableCell align="right">
                      {!Row.Highlight &&
                        <Checkbox size='small'
                          id={Row.InvoicNo} 
                          checked={Row.Pay} 
                          onChange={(e)=>onItemCheck(e,Row)}
                          disabled={IsWait}
                          />  
                        }
                      </TableCell>  
                    </TableRow>   
                  ))} 
            </TableBody>
          </Table>    
        </TableContainer>  
        <h2>Payment Process  :</h2>
        
        
</div> 
  )}

export default PaymentGrid;
