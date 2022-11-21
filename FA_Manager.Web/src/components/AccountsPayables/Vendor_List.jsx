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
const  Vendor_List=(props)=> {
    let {columns,data}=props 
    console.log('data',data);
    return (
      <TableContainer   component={Paper} elevation={0}>
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
                key={row.FirstName}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.FirstName+'  '+row.LastName}
                </TableCell>
                <TableCell align="left">{row.vendnum}</TableCell>
                <TableCell align="left">{row.vendAddress}</TableCell>
                <TableCell align="left">{row.Email}</TableCell>
                <TableCell align="left">{row.vendNotes}</TableCell>
                <TableCell align="right">
                  <IconButton size='small'><DoneOutlineIcon color='primary' fontSize='inherit' /></IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    )
}
export default Vendor_List ;