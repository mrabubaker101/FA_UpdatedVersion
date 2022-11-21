import React, { useState } from 'react'
import Box from '@mui/material/Box';
import { Card, Grow, IconButton, Paper, Table, TableBody, TableCell, TableHead, TableRow, TextField, Typography } from '@mui/material';
import TableContainer from '@mui/material/TableContainer';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { Button } from '@mui/material';
import AB_Dialog  from '../ReuseableCompo/AB_Dialog'

const UnApplied =(props)=> {
  let {
    UnappliedGrid,setUnappliedGrid,
    OrderNo,setOrderNo,
    OrderAmount,setOrderAmount,
    IsModalOpen,setIsModalOpen,
    IndexofARow,setIndexofARow, 
    IsWait
  } = props


  //console.log("UnappliedGrid",UnappliedGrid);
  //console.log("props",props); 

const handelApply=()=>{ 

    try { 
        if(typeof UnappliedGrid[IndexofARow] === 'undefined'){
            //does not exist
            let modalData = {OrderName:OrderNo,Amount:OrderAmount}; 
            let data = [...UnappliedGrid]
            data.push(modalData)
            setUnappliedGrid(data);
            
        }
        else
        {
            //exist
            let data = [...UnappliedGrid]
            data[IndexofARow].OrderName = OrderNo
            data[IndexofARow].Amount = OrderAmount
            setUnappliedGrid(data);
        }
    
    setIsModalOpen(false)
    setOrderNo("")
    setOrderAmount(0.00)
    setIndexofARow(-1)
    console.log("UnappliedGrid",UnappliedGrid);
    }
    catch(er){
        console.log("er",er);
    }
}
 
const HandelDelete=(ind)=>{ 
  var result = UnappliedGrid.filter((data, idx) => idx !== ind);
  setUnappliedGrid(result); 
}

const HandelEdit=(ind)=>{ 
    setIndexofARow(ind)
    setIsModalOpen(true)
    setOrderNo(UnappliedGrid[ind].OrderName)
    setOrderAmount(UnappliedGrid[ind].Amount) 
}

const HandelModal=(val)=>{
  setIsModalOpen(val)
  setOrderNo("")
  setOrderAmount(0.00)
}
 
  return ( <>   
 <Button color='info' variant='contained' disabled={IsWait} onClick={()=>HandelModal(true)}>Add</Button>       
 <br />                 
 <br />                   
 {
  UnappliedGrid.length > 0 ? 
    <Grow in={true} timeout={1000} >
  <Card in={true} timeout={1000} component={Paper} elevation={3}>
    <Table size="small" >  
      <TableHead>
        <TableRow>
          <TableCell><h3>Order Name</h3></TableCell> 
          <TableCell align="right"><h3>Amount ($)</h3></TableCell>
          <TableCell><h3>Action </h3></TableCell>  
        </TableRow>
      </TableHead>
      <TableBody>
            {UnappliedGrid.map((Row,ind) => ( 
              <TableRow key={ind}>
                <TableCell component="th" scope="row">{Row.OrderName}</TableCell> 
                <TableCell align="right">{Row.Amount}</TableCell> 
                <TableCell>
                  <IconButton onClick={()=>HandelEdit(ind)}><EditIcon /></IconButton>  
                  <IconButton onClick={()=>HandelDelete(ind)}><DeleteIcon /></IconButton>  
                </TableCell> 
              </TableRow> 
            ))} 
      </TableBody>
    </Table>
  </Card>
    </Grow>    
  :<Typography variant="h5" align='center' gutterBottom>No Unapplied Entries </Typography>
}

<AB_Dialog 
    open={IsModalOpen}
    Closer={HandelModal}  //means poora function send kr rhy hen , andar call karengy
    Heading="Add New Order"
    Content={""} 
    childern={<>
         <Box component="form" sx={{ '& .MuiTextField-root': { m: 3, width: '28ch' }, }} >
            <TextField focused value={OrderNo} onChange={(e)=> setOrderNo(e.target.value)} label="Order Name" id="outlined-size-small" size="small" />
            <TextField value={OrderAmount} onChange={(e)=> setOrderAmount(e.target.value)} label="Amount" id="outlined-size-normal" size="small" />
        </Box>
    </>
    }
    ApplyHandler={handelApply}
/>  
 
</>
)}
 
export default UnApplied;