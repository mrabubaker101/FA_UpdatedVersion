import React, { useState } from 'react'
import {LinearProgress,Button,Container,CssBaseline,Tab,Tabs, Switch, Box, Typography,} from '@mui/material';
import TabPanel from '../ReuseableCompo/TabPanel';
import UnApplied from './UnApplied';
import PaymentGrid from './PaymentGrid'; 
import AB_LookupBar_A from '../ReuseableCompo/AB_LookupBar_A';
import AB_LookupBar_B from '../ReuseableCompo/AB_LookupBar_B';
import AB_ButtonGroup from '../ReuseableCompo/AB_ButtonGroup';
import AB_SlidePanel from '../ReuseableCompo/AB_SlidePanel';
import AB_SideDrawer from '../ReuseableCompo/AB_SideDrawer';
import AB_Child from '../ReuseableCompo/AB_Child';
import AB_LookupTable from '../ReuseableCompo/AB_LookupTable';
import Stick_Table from '../ReuseableCompo/Stick_Table';
import AB_Modal from '../ReuseableCompo/AB_Modal';
import AB_Grid from '../ReuseableCompo/AB_Grid';

const IssueCheck=()=> {

  //For Unapplied Panel

  const [value, setValue] = useState(0);
  const [IsModalOpen, setIsModalOpen] = useState(false)
  const [UnappliedGrid, setUnappliedGrid] = useState([])
  const [IndexofARow, setIndexofARow] = useState(-1)
  const [OrderNo, setOrderNo] = useState("")  
  const [OrderAmount, setOrderAmount] = useState("")  
  
 
  //For Payment Panel
  const PaymentData = [
    {InvoiceNo:"INV-101",DueDate:"10/Jan/2022",Amount:1200,Discount:0.00,Paid:450,Balance:750,Payment:0.00,Iserror:false,Highlight:false,Pay:false},
    {InvoiceNo:"INV-102",DueDate:"11/June/2022",Amount:1900,Discount:0.00,Paid:900,Balance:0,Payment:0.00,Iserror:false,Highlight:false,Pay:false},
    {InvoiceNo:"INV-103",DueDate:"15/July/2022",Amount:1500,Discount:0.00,Paid:1000,Balance:0.00,Payment:0.00,Iserror:false,Highlight:true,Pay:false},
    {InvoiceNo:"INV-104",DueDate:"18/Dec/2022",Amount:2000,Discount:0.00,Paid:1000,Balance:1000,Payment:0.00,Iserror:false,Highlight:false,Pay:false}
  ]
  localStorage.setItem("PaymentData",JSON.stringify(PaymentData))

  // const [RowPayment, setRowPayment] = useState(0.00)  
  const [Loader, setLoader] = useState(false)  
  const [GridPayments, setGridPayments] = useState([])  
  const [MasterChecked, setMasterChecked] = useState(false)  
  const [GridData, setGridData] = useState(PaymentData)  
  const [SUM_Payment, setSUM_Payment] = useState(0.00)   
  
  let Amt=SUM_Payment+GridPayments.length + UnappliedGrid.lengt

  //For General Purpose
const [IsWait, setIsWait] = useState(false)

//For another Component
const [DrawerOpen, setDrawerOpen] = useState(false)
const [SlideShow, setSlideShow] = useState(false)


//For another lookup Component
const [ShowLookup, setShowLookup] = useState(false)
const LookupHandler=(val)=> setShowLookup(val)


//another
const [LookupBar, setLookupBar] = useState(false)
const LookupBarHandler=(val)=> setLookupBar(val)



  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  
const HandelProcess= ()=>{
setLoader(true)
setIsWait(true)
let data = [...GridData]
let Modal = []
data.map((data,ind)=>{
if(data.Payment > 0 && data.Pay===true){
    
  let model={
    InvoiceNo:data.InvoiceNo,
    DueDate:data.DueDate,
    Amount:data.Amount,
    Discount:data.Discount,
    Paid:data.Paid,
    Balance:data.Balance,
    Payment:data.Payment,
    Pay:data.Pay
    } 
    Modal.push(model)
}
})
console.log(Modal);

} 
function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}
const Grid_Data = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
]; 

const Grid_Columns = [
  { field: 'name', HeaderName: 'Name', minWidth: 170 },
  { field: 'code', HeaderName: 'ISO\u00a0Code', minWidth: 100 },
  {
    HeaderName: 'Population',
    field: 'population',
    minWidth: 170,
    align: 'right',
    format: (value) => value.toLocaleString('en-US'),
  },
  {
    field: 'size',
    HeaderName: 'Size\u00a0(km\u00b2)',
    minWidth: 170,
    align: 'right',
    format: (value) => value.toLocaleString('en-US'),
  },
  {
    field: 'density',
    HeaderName: 'Density',
    minWidth: 170,
    align: 'right',
    format: (value) => value.toFixed(2),
  },
  {
    field: 'vew',
    HeaderName: 'Action',
    minWidth: 170,
    align: 'right',
    format: (value) => value.toFixed(2),
  } 

];

  return (
    <div>
      <br />    
      <Typography variant="h4" color="Highlight" >RE-Assignment</Typography>
      {Loader ? <LinearProgress /> : null}
      
      <Tabs value={value} onChange={handleChange} >
        <Tab label="Item One" />
        <Tab label="Item Two" />
        <Tab label="Item Three" />        
      </Tabs>

      <TabPanel value={value} index={0}  > 
          <br />
          <h3 style={{display:"inline"}}>{"Check :  $ "+(SUM_Payment.toString()=="NaN" ? "0.00"  :SUM_Payment.toFixed(2))}</h3> 
          <h3 style={{display:"inline",marginLeft:"5%"}}>+</h3> 
          <h3 style={{display:"inline",marginLeft:"5%"}}> {"UnApplied :  $"+UnappliedGrid.length} </h3>
          <h3 style={{display:"inline",marginLeft:"5%"}}>+</h3>
          <h3 style={{display:"inline",marginLeft:"5%"}}> {"Misc :  $"+0} </h3>
          <h3 style={{display:"inline",marginLeft:"5%"}}>=</h3> 
          <h3 style={{display:"inline",marginLeft:"10%"}}> {"Amount : $"+(Amt.toString()=="NaN" ? "0.00":Amt.toFixed(2))} </h3>
          <hr />
 
          <PaymentGrid 
              GridData={GridData}
              setGridData={setGridData}

              GridPayments={GridPayments}
              setGridPayments={setGridPayments}
 
              MasterChecked={MasterChecked}
              setMasterChecked={setMasterChecked}
             
              SUM_Payment={SUM_Payment}
              setSUM_Payment={setSUM_Payment}

              IsWait={IsWait}
              childern={{ABU:"baker",Pay:GridPayments}}
          />

<Button variant="contained" color="secondary" onClick={HandelProcess}>Process</Button>
<Button variant="contained" color="warning" onClick={()=>{setIsWait(false);setLoader(false)}}>Stop</Button>

      </TabPanel>
  
<TabPanel value={value} index={1}>  
  <UnApplied  

        //passing states with their setter functions so thata we can 
        //call these functions in chiled to update states of parents
        UnappliedGrid={UnappliedGrid}
        setUnappliedGrid={setUnappliedGrid}
  
        IsModalOpen={IsModalOpen}
        setIsModalOpen={setIsModalOpen}
            
        OrderNo={OrderNo}
        setOrderAmount={setOrderAmount}

        OrderAmount={OrderAmount}
        setOrderNo={setOrderNo}

        IndexofARow={IndexofARow}
        setIndexofARow={setIndexofARow}

        IsWait={IsWait}
  />  
</TabPanel>
 
<TabPanel value={value} index={2} >
  Item Three
</TabPanel>
 
<br /> <br />
<AB_LookupBar_A OnLookupClick={LookupBarHandler}/><br /> <br />
<AB_Modal 
    open={LookupBar} Closer={LookupBarHandler} Heading='Account List'>
        {/* Pass Lookup  */}
        <AB_LookupTable 
            data={Grid_Data}
            columns = {Grid_Columns} 
        />
</AB_Modal>







<AB_LookupBar_B /><br /><br/>
<AB_ButtonGroup/><br /><br />


 
<Button onClick={()=>setDrawerOpen(true)}>Open Slide Out</Button>
<AB_SideDrawer 
    open={DrawerOpen} 
    setDrawerOpen={setDrawerOpen}
    anchor="right"
>
    {/* <IssueCheck /> */}
    <AB_Child />
</AB_SideDrawer>



<br />
<AB_Grid 
    data={Grid_Data}
    columns = {Grid_Columns} 
/>
<br/>


{/* The Modal Lookup */}
<Button onClick={()=>LookupHandler(true)}>Select Account</Button>
<AB_Modal 
    open={ShowLookup} Closer={LookupHandler} Heading='Account List'>
        {/* Pass Lookup  */}
        <AB_LookupTable 
            data={Grid_Data}
            columns = {Grid_Columns} 
        />
</AB_Modal>


<br />


<Switch checked={SlideShow} onChange={()=>setSlideShow(!SlideShow)}/>
<AB_SlidePanel show={SlideShow} ViweIn='Fade'>
    <AB_Child />
</AB_SlidePanel>  
        
    </div>
  )}

export default IssueCheck;

