import { Button, Container } from '@mui/material'
import React, { Component } from 'react'
import MyDialoge from './MyDialoge'
import { CssBaseline } from '@mui/material';


export default class MyTester extends Component {
    constructor(props){
        super(props);
        this.state={
            IsShow:false,  
        }
    }

    handleClickOpen=()=>{ this.setState({IsShow:true});}
    handleClose=()=>{ this.setState({IsShow:false});}
  render() {
    return (
      <div>
           <CssBaseline /><br />
      <Container>
                <Button variant="outlined" onClick={this.handleClickOpen}>
                Open form  
                 </Button> 
        {this.state.IsShow ===true ? <MyDialoge  open= {this.state.IsShow} closer = {this.handleClose} />:null}
      </Container> 
      </div>
    )
  }
}
