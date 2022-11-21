import { Button, CircularProgress,LinearProgress, Container, CssBaseline, TextField,Typography } from '@mui/material'
import Grid from '@mui/material/Grid'; 
import React, { Component } from 'react'
import {  Link } from "react-router-dom";

//import   from "../../services/GeneralService_Class";
import  {URL,PostService,GetService} from "../../services/GeneralService_Class";
 
export default class Login_frm extends Component {
    constructor(props){
        super(props)
        this.state={ 
            username:"",
            Password:"",
            clientcode : 1893,
            IsDisabled:false ,
            UserInfo:[],
            Userlist:[]
        }
    }
    ChangeHandler = (e) => {
        this.setState({ [e.target.name]: e.target.value });
      };
      handleSubmit2 =()=>{  
        try {
        GetService("getlist?type='GenericType'",URL.REACT_APP_BASEURL_CONFIGURATION)
        .then((response) => {
          console.log(response.data);
          this.setState({Userlist:response.data})
          if (response.status === 200 && response.data.isSuccess === true) { 
            console.table(response.data);
          } 
        }) 
        .catch((error) => console.log(error)); 
        } catch (error) {
          console.log(error);  
        } 
      }
  
      handleSubmit = async (e) => { 
        this.setState({IsDisabled:true});
        e.preventDefault();
        let {username,Password,clientcode} = this.state; 
        let LoginModel = {
          username,
          Password, 
          clientcode  
        }
        //let LoginModel=JSON.stringify(Login)
        console.log("RegisterModel",LoginModel);  
        try {
          await PostService("login",LoginModel,URL.REACT_APP_BASEURL_GLOBAL)
        .then((response) => { 
          if (response.status === 200 && response.data.isSuccess === true) { 
            console.table(response.data);
            this.setState({ 
              IsDisabled: false, 
            });
            //console.log(this.state.LogMsg); 
          } 
          else
          this.setState({ IsDisabled: false }); 
           
        }) 
        .catch((error) => { 
          console.log(error);  
          this.setState({ IsDisabled: false }); 
        }); 
        } catch (error) {
          console.log(error);  
        }
         
      }; 

    render() {
        let {username,Password,clientcode,IsDisabled} = this.state;
    return (
      <>
      {/* <CssBaseline /><br />
      <Container >
      <Grid container spacing={1}>

      <Grid item xs={12}>

      <Grid item xs={6}></Grid>
      <h3>Login</h3>
        <Grid item xs={12}>
                <TextField  variant="outlined" label="Username"
                color="primary" 
                fullWidth 
                value={username}
                name="username"
                autoFocus 
                onChange={this.ChangeHandler}
                //disabled={IsDisabled}
                />
            </Grid>

            <Grid item xs={12}>
                <TextField variant="outlined" label="Password"
                color="primary" 
                fullWidth 
                value={Password}
                name="Password" 
                type="password"
                onChange={this.ChangeHandler}
                //disabled={IsDisabled}
                />
            </Grid>
            <hr />
            <Button
                fullWidth
                variant="contained"
                color="primary"
                size="large"
                onClick={this.handleSubmit}
                //disabled={this.state.IsDisabled}
               >
                Sign In &nbsp;&nbsp;
                {this.state.IsDisabled ?  <CircularProgress color="secondary" variant="filled"></CircularProgress> : null}
            </Button>
            <hr />
            <Button
                fullWidth
                variant="contained"
                color="secondary"
                size="large"
                onClick={this.handleSubmit2}
               >
                Get List &nbsp;&nbsp;
            </Button>   
       </Grid>
    </Grid>
{this.state.Userlist.map((i,data)=>{
  <h3>{data}</h3>
})}     
       
      </Container> */}


      <Container component="main" maxWidth="lg">
            <CssBaseline />
            <Typography component="h1" variant="h5">
              Sign in
            </Typography>
            <hr />
            {this.state.IsDisabled ?  <LinearProgress ></LinearProgress> : null} 
            <br />
             <Grid container spacing={2}>
                <Grid item xs={12}>
                <TextField
                variant="outlined" 
                required
                fullWidth 
                label="Email Address"
                name="Email"
                 autoFocus
                value={username}
                onChange={this.ChangeHandler}
                disabled={this.state.IsDisabled}

              />    
                </Grid>
                <Grid item xs={12}>
                <TextField
                variant="outlined"
                 required
                fullWidth
                name="Password"
                label="Password"
                type="password"
                 value={Password}
                onChange={this.ChangeHandler}
                disabled={this.state.IsDisabled}

              />   
                </Grid>
            </Grid>  
            <br />
              <Button
                fullWidth
                variant="contained"
                color="primary"
                onClick={this.handleSubmit}
                disabled={this.state.IsDisabled}
               >
                Sign In &nbsp;&nbsp;
            {this.state.IsDisabled ?  <CircularProgress ></CircularProgress> : null}
              </Button>
              <Grid container>
                <Grid item xs>
                {/* <Button component={Link} to='/ForgotPassword' disabled={this.state.IsDisabled}>
                {"Forgot password?"}
                </Button>   
                </Grid>
                <Grid item>
                <Button component={Link} to='/Signup' disabled={this.state.IsDisabled}>
                {"Don't have an account? Sign Up"}
                </Button>    */}
                </Grid>
              </Grid> 
             </Container>


      </>
    )
    }
}
