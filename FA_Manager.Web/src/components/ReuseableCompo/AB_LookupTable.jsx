
//This is one Lookup , lookup can be 4 or 5 types, 
// so we have to make 5 different lookup

import React from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { IconButton } from '@mui/material';
import DoneOutlineIcon from '@mui/icons-material/DoneOutline';   
 
const AB_LookupTable=(props)=> {
  let {columns,data}=props 
  return (
    <TableContainer sx={{ maxHeight: 440 }} component={Paper} elevation={0}>
      <Table stickyHeader sx={{ minWidth: 650,overflow: 'hidden' }} size="small"  >
        <TableHead>
          <TableRow>         
           {columns?.map((column) => (
                <TableCell
                  key={column.field}
                  //More props
                  //align={column.align}
                  //style={{ minWidth: column.minWidth }}
                >
                  {column.HeaderName}
                </TableCell>
              ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {data?.map((row) => (
            <TableRow 
            hover
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.calories}</TableCell>
              <TableCell align="right">{row.fat}</TableCell>
              <TableCell align="right">{row.carbs}</TableCell>
              <TableCell align="right">{row.protein}</TableCell>
              <TableCell align="right">
                <IconButton size='small'><DoneOutlineIcon color='primary' fontSize='inherit' /></IconButton>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
} 
export default AB_LookupTable;
 