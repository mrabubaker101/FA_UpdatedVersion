import React, { useEffect, useRef, useState } from 'react'
import Table from '@mui/material/Table';
import { styled } from '@mui/material/styles';
import TableBody from '@mui/material/TableBody';
import TableCell,{tableCellClasses} from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import {IconButton} from '@mui/material';
import StickyNote2OutlinedIcon from '@mui/icons-material/StickyNote2Outlined';
import DoneOutlineIcon from '@mui/icons-material/DoneOutline';   

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
   },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

const  AB_Grid_Reuseable= (props)=> {
    let {columns,data}=props
    const [SelectedRow, setSelectedRow] = useState({}) 

    useEffect(() => {
      //call API here
      let API_payload = {
        Code : '',
        Title :'',
        Type : 'LOADING...!',
        Data:SelectedRow
    }
    console.log("OK",API_payload); 
    }, [SelectedRow])

    const RowClick=(ind,RowObj)=>{
        let row = RowObj.filter((RowObj, idx) => idx === ind);
        let payload = {
            Code : '',
            Title :'',
            Type : 'P'
        }
        console.log("payload",payload); 
    }
const Calling =(Row)=>{  
  setSelectedRow(Row)
  console.log("Selected",SelectedRow);
}
 

const useLocation = (position) => {
  debugger
  let url = 'https://localhost:44369/global/api/global/loc?longitude=' + position.coords.longitude + '&latitude=' + position.coords.latitude;
  console.log("url",url);
  window.location.replace(url);
};
  return (
    <TableContainer sx={{ maxHeight: 1000 }} component={Paper} elevation={0}>
     <Table stickyHeader sx={{ minWidth: 650,overflow: 'hidden' }} size="small"  >
      <TableHead >
        <TableRow >         
         {columns?.map((column) => (
              <StyledTableCell
                key={column.field}
                //More props
                //align={column.align}
                //style={{ minWidth: column.minWidth }}
              >
                {column.HeaderName}
              </StyledTableCell>
            ))}
        </TableRow>
      </TableHead>
      <TableBody >
        {data?.map((row,ind,RowObj) => (
            <StyledTableRow   
            //best built in functions
            // onClick={() =>setSelectedRow(row)}    
            onClick={() =>setSelectedRow(row)}    
            hover
            //selected
            key={row.name}
            sx={{ '&:last-child td, &:last-child th': { border: 0 },cursor:'pointer' }}
            >
            <StyledTableCell component="th" scope="row" 
            //size='small'
            //variant='head'
            >
              <a href='#'>
              {row.name}
          <IconButton size='small'><StickyNote2OutlinedIcon sx={{color:ind%2==0 ?'black':ind==3 ? 'red' : 'blue',height:'18px'}} fontSize='small'/></IconButton>
          </a> 
            </StyledTableCell >
            <TableCell align="right">{row.calories}</TableCell>
            <TableCell align="right">{row.fat}</TableCell>
            <TableCell align="right">{row.carbs}</TableCell>
            <TableCell align="right">{row.protein}</TableCell>
            <TableCell align="right">
              <IconButton size='small' onClick={()=>RowClick(ind,RowObj)}><DoneOutlineIcon color='primary' fontSize='inherit' /></IconButton>
            </TableCell>
          </StyledTableRow>
        ))}
      </TableBody>
    </Table>
  </TableContainer>
  )
}

export default AB_Grid_Reuseable