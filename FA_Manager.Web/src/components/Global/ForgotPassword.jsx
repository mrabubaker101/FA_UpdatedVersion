import React, { useState } from 'react'
import {  Link } from "react-router-dom"; 
import {Checkbox,FormControlLabel,Container,CircularProgress, LinearProgress ,Typography,Box,Paper,TextField,Button, Avatar,CssBaseline,Grid} from '@mui/material';
import  {URL,PostService,GetService} from "../../services/GeneralService_Class";

 import { withSnackbar } from "notistack";
import { SearchOffSharp } from '@mui/icons-material';
const ForgotPassword=(props)=>  {
 
    const [Email, setEmail] = useState(''); 
    const [isValidAccount, setisValidAccount] = useState(false);
    const [IsDisabled, setIsDisabled] = useState(false);
    const [UserInfo, setUserInfo] = useState([]);
    const [LogMsg, setLogMsg] = useState(''); 
 
      //SnackFalse = (key) =>( <Button onClick={() => { this.props.closeSnackbar(key);}}> OK </Button>);
    
     const handleSubmit = async (e) => { 
        setIsDisabled(true)
        e.preventDefault();  
        await PostService("/forgot-password",Email)
        .then((response) => {
          debugger;
          if (response.status === 200 && response.data.isSuccess === true) {
          } else {
          }
        })
        .catch((error) => {  
            props.enqueueSnackbar(error.toString(), { variant: "error",anchorOrigin:{ vertical: "top", horizontal: "right"}});
            setIsDisabled(false)
        }); 
      }; 
        return (
            <Container component="main" maxWidth="lg">
              <CssBaseline />
              <div  > 
                <Typography component="h1" variant="h5">
                  Forgot Password
                </Typography><hr />
                {IsDisabled ?  <LinearProgress ></LinearProgress> : null} 
                <br />
                <Grid item xs={12}>
                    <TextField
                    autoFocus
                    disabled={IsDisabled}
                    variant="outlined"
                    required
                    fullWidth
                    label="Enter Registered Email"
                    name="Email"
                    value={Email}
                    onChange={(e)=> setEmail(e.target.value)}        
                    />
                </Grid>
                  <br />
                  <Button 
                    fullWidth
                    variant="contained"
                    color="primary"
                    onClick={handleSubmit}
                    disabled={IsDisabled}
                  >
                    Search &nbsp;&nbsp;<SearchOffSharp ></SearchOffSharp>
                    {IsDisabled ?  <CircularProgress ></CircularProgress> : null} 
                  </Button>                   
                    <Button component={Link} to='/login' disabled={IsDisabled}>
                  {"Back to Sign in"}
                  </Button>                     
                
              </div> 
            </Container>
          );
    } 
export default withSnackbar(ForgotPassword);
