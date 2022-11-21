
//This is template of Child component

import React from 'react'
import {IconButton,Container, Button, Table, TableBody, TableCell, TableHead, TableRow, } from '@mui/material'
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
const UnappliedGrid=[{OrderName:"ABU",Amount:45000},{OrderName:"GHKL",Amount:1209},{OrderName:"BAAS",Amount:200}]
const MyChild =()=> {
  return (
    <Container> 
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
                  <IconButton><EditIcon fontSize='small'/></IconButton>  
                  <IconButton><DeleteIcon fontSize='small'/></IconButton>  
                </TableCell> 
                  </TableRow> 
                ))} 
            </TableBody>
        </Table> 
        <Button >Print</Button>
    </Container>
  )}
export default MyChild;
