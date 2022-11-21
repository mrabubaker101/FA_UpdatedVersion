import React, { Component } from 'react'
import { Button, CircularProgress, Container, CssBaseline, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, LinearProgress, Link, TextField } from '@mui/material'
//import MyTable from './MyTable';
import { GetService ,URL} from '../../services/GeneralService_Class';
import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import MyAgGrid from './MyAgGrid';
import { AgGridColumn, AgGridReact } from 'ag-grid-react';

let Lists=[]
export default class MyDialoge extends Component {
    constructor(props){
        super(props);
        this.state={ 
            DataList:[] ,
            SetLoader:false,
            cache:""
        }
    } 
//  componentDidMount() { 
//     this.setState({SetLoader:true})
//         try {
//         GetService("lwgltran?top=50000",URL.REACT_APP_BASEURL_CONFIGURATION)
//         .then((response) => response.data)
//         .then((result)=>{ 
//             debugger
//             //let{list} = this.state.DataList;
//             if (Lists !== result.test){
//                 this.setState({cache:result.msg,SetLoader:false,DataList:result.test}) 
//                 Lists = result.test
//             }
//             else{
//                 //this.setState({DataList:result.test})
//                 //Lists = result.test
//                 this.setState({SetLoader:false})  
//             }
//         })
//         .catch((error) => 
//         {
//             console.log(error)
//             this.setState({SetLoader:false,cache:""})
//         }); 
//         } catch (error) {
//             this.setState({SetLoader:false,cache:""})
//           console.log(error);  
//         }
// }
    handleClickOpen=()=>{ this.setState({IsShow:true});}
    handleClose=()=>{ this.setState({IsShow:false});}
  render() {
      let{open,closer} = this.props;
      let{DataList} = this.state;
    return ( 
        <Dialog open={open} onClose={closer} fullWidth>
            <DialogTitle>Subscribe</DialogTitle>
            {this.state.SetLoader === true? 
            <LinearProgress variant="indeterminate" color="secondary"/>
            :<>
             <DialogContent> 
             {/* <MyTable filler = {Lists}/> */}
            <MyAgGrid />
            {/* Data Binder */}
 
             <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell>PAYEE  </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          { 
                [1,2].map((row,i) => (
                <TableRow key={i}   >
                  <TableCell align="left"><Link variant="overline"> {"Abubaker"}</Link> </TableCell> 
                </TableRow>
              )) 
          }
        </TableBody>
      </Table>
    </TableContainer>



         </DialogContent>
         <DialogActions>
         <Button onClick={this.props.closer}>Cancel</Button>
         </DialogActions>
         </>
         }
           
        </Dialog>  
    )
  }
}
