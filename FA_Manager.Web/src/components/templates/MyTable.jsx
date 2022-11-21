import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import React, { Component } from 'react'

export default class MyTable extends Component {

    constructor(props){
        super(props)
        this.state = {
            ROWS:[]
        }
    }
  render() {
      //console.log(this.props);
      debugger;  
    return (  
          <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell>PAYEE  </TableCell>
            <TableCell align="right">REFERENCE</TableCell>
            <TableCell align="right">AUDIT&nbsp;(g)</TableCell>
            <TableCell align="right">GL_ACCT&nbsp;(g)</TableCell>
            <TableCell align="right">Protein&nbsp;(g)</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {
           this.props.filler.length > 0 && this.props.filler !=undefined ?  
              ( this.props.filler.map((row) => (
                <TableRow
                  key={row.payee}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {row.payee}
                  </TableCell>
                  <TableCell align="right">{row.audit}</TableCell>
                  <TableCell align="right">{row.gL_ACCT}</TableCell>
                  <TableCell align="right">{row.reference}</TableCell>
                  <TableCell align="right">{row.amount}</TableCell>
                </TableRow>
              )))
          :null
          }
        </TableBody>
      </Table>
    </TableContainer>
       
    )
  }
}
