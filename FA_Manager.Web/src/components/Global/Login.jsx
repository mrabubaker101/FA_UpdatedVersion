import React, { useState } from 'react'
import {CircularProgress,FormControlLabel, LinearProgress,Container,Typography,Box,Paper,TextField,Button, Avatar,CssBaseline,Grid} from '@mui/material';
import { withSnackbar } from "notistack";
import { Link, Outlet, useNavigate } from "react-router-dom";
import  {URL,PostService,GetService, PostAnonymousService} from "../../services/GeneralService_Class";
import { LoginOutlined } from '@mui/icons-material';

const Login = (props) => {

    const {setToken} = props
    const navigate =  useNavigate() 
  
    const [IsDisabled, setIsDisabled] = useState(false);
    const [Email, setEmail] = useState('');
    const [Password, setPassword] = useState('');
    const [LogErr, setLogErr] = useState('');
    const [LogMsg, setLogMsg] = useState('');
    const [UserInfo, setUserInfo] = useState([]); 
   
      const handleSubmit = async (e) => { 
          e.preventDefault();
          setIsDisabled(true) 
          
          let LoginModel = {
            "username":Email,
            "Password":Password
          }
          console.log("LoginModel",LoginModel); 
          await PostAnonymousService("login",LoginModel,URL.REACT_APP_BASEURL_GLOBAL)
          .then((response) => {
            //debugger;
            if (response.status === 200) {
              console.table(response.data);
              localStorage.setItem("PAccountsToken", response.data.token);
              localStorage.setItem("UserInfo", response.data.user);
              setTimeout(() => {
                setIsDisabled(false)
                setLogErr(response.data.message) 
                props.enqueueSnackbar(response.data.message, { variant: "Success",anchorOrigin:{ vertical: "top", horizontal: "right"} });
                // aa ?<Navigate to="/" replace />:<h1>NOOOO</h1>
                //this.props.history.push("/IDrawer", this.state.Email);
                window.location.replace('/');
                //this.vovo();
              }, 3000);
            } else {
              setTimeout(() => {
                setIsDisabled(false)
                setLogMsg(response.data.message)  
                console.log(this.state.LogMsg);
                props.enqueueSnackbar(LogMsg, { variant: "warn",anchorOrigin:{ vertical: "top", horizontal: "right"} });
              }, 1000);
            }
          })
          .catch((error) => {  
            props.enqueueSnackbar(error.toString(), { variant: "error",anchorOrigin:{ vertical: "top", horizontal: "right"} });
            //this.props.history.push("/IDrawer", this.state.userInfo);
            setTimeout(() => {
              setIsDisabled(false)
            }, 1000);
          }); 
        };
   
      const  handleSubmit_Temp = (e) => { 
        e.preventDefault()
        setIsDisabled(true) 
          if (Password=="zzz"){
            localStorage.setItem("PAccountsToken", "ABCDEFGHIJKLMNOPQRSTUVWXYZ"); 
            setLogErr('Successfully logged in')
            setTimeout(() => {
              props.enqueueSnackbar('Got your point', { variant: "Success",anchorOrigin:{ vertical: "top", horizontal: "right"} });
              setIsDisabled(false) 
              setToken(true); 
              navigate('/CompanySetup',{replace:true}) 
              //this.props.history.push("/IDrawer", this.state.Email);
              //window.location.replace('/abc'); 
            }, 3000);
          }
        } 
      
        
    return (
        <Container component="main" maxWidth="lg">
                                  <Outlet />

            <CssBaseline />
            <Typography component="h1" variant="h5">
              Sign in
            </Typography>
            <hr />
            {IsDisabled ?  <LinearProgress ></LinearProgress> : null} 
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
                value={Email}
                onChange={(e)=>setEmail(e.target.value)}
                disabled={IsDisabled}

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
                onChange={(e)=>setPassword(e.target.value)}
                disabled={IsDisabled}

              />   
                </Grid>
            </Grid>  
            <br />
              <Button
                fullWidth
                variant="contained"
                color="primary"
                onClick={handleSubmit_Temp}
                disabled={IsDisabled}
               >
                Sign In &nbsp;&nbsp;
                <LoginOutlined />
            {IsDisabled ?  <CircularProgress ></CircularProgress> : null}
              </Button>
              <Grid container>
                <Grid item xs>
                <Button component={Link} to='/forgot' disabled={IsDisabled}>
                {"Forgot password?"}
                </Button>   
                </Grid>
                <Grid item>
                <Button component={Link} to='/signup' disabled={IsDisabled}>
                {"Don't have an account? Sign Up"}
                </Button>    
                </Grid>
              </Grid> 
             </Container>
    );
} 
export default withSnackbar(Login);
