import React ,{useState}from 'react';
import {CircularProgress, LinearProgress,FormControlLabel,Typography,Box,Paper,TextField,Button, Container,Avatar,CssBaseline,Grid,Checkbox} from '@mui/material';
import { withSnackbar } from "notistack";
import {  Link } from "react-router-dom";
import  {URL,PostService,GetService} from "../../services/GeneralService_Class";

const Signup = (props) => { 

        const [FirstName, setFirstName] = useState('');
        const [LastName, setLastName] = useState('');
        const [Email, setEmail] = useState('');
        const [Password, setPassword] = useState('');
        const [Terms, setTerms] = useState(true);
        const [isValidAccount, setisValidAccount] = useState(false);
        const [IsDisabled, setIsDisabled] = useState(false);
        const [UserInfo, setUserInfo] = useState([]);
        const [LogMsg, setLogMsg] = useState('');
        const [LogErr, setLogErr] = useState('');
 
        const  handleSubmit = async (e) => { 
            setIsDisabled(true)
            e.preventDefault();
            let RegisterModel = {
              FirstName,
              LastName,
              Email,
              Password,
              Terms
            }
            console.log("RegisterModel",RegisterModel);
        
            await PostService.post("/signup",RegisterModel)
            .then((response) => {
              debugger;
              if (response.status === 200 && response.data.isSuccess === true) {
                localStorage.setItem("UserToken", response.data.token);
                this.state.UserInfo = response.data.user;
                localStorage.setItem("UserInfo", this.state.UserInfo);
                console.table(response.data);

                setTimeout(() => {
                    setIsDisabled(false)
                    setLogErr(response.data.message) 
                    //IsWait: false,  
                  console.log(LogMsg);
                  props.enqueueSnackbar(response.data.message, { variant: "Success",anchorOrigin:{ vertical: "top", horizontal: "right"} });
                  //props.history.push("/IDrawer", this.state.userInfo);
                }, 2000);
              } else {
                setTimeout(() => {
                    setIsDisabled(false)
                    setLogMsg(response.data.message)  
                  console.log(LogMsg);
                  props.enqueueSnackbar(this.state.LogMsg, { variant: "warn",anchorOrigin:{ vertical: "top", horizontal: "right"} });
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



    return (
        <Container component="main" maxWidth="lg">
        <CssBaseline />
        <div  > 
          <Typography component="h1" variant="h5">
            Sign up
          </Typography><hr />
          {IsDisabled ?  <LinearProgress ></LinearProgress> : null} 
          <br />
          <form  noValidate>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                disabled={IsDisabled}
                  onChange={(e)=>setFirstName(e.target.value)}
                  value={FirstName}
                  name="FirstName"
                  variant="outlined"
                  required
                  fullWidth
                  label="First Name"
                  autoFocus
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                disabled={IsDisabled}
                  variant="outlined"
                  required
                  fullWidth
                  label="Last Name"
                  name="LastName"
                  autoComplete="lname"
                  value={LastName}
                  onChange={(e)=>setLastName(e.target.value)}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                disabled={IsDisabled}
                  variant="outlined"
                  required
                  fullWidth
                  label="Email Address"
                  name="Email"
                   value={Email}
                  onChange={(e)=>setEmail(e.target.value)}
  
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                disabled={IsDisabled}
                  variant="outlined"
                  required
                  fullWidth
                  name="Password"
                  label="Password"
                  type="password"
                   autoComplete="current-password"
                   value={Password}
                   onChange={(e)=>setPassword(e.target.value)}
  
                />
              </Grid>
              <Grid item xs={12}>
                <FormControlLabel 
                disabled={IsDisabled}
                onChange={(e)=>setTerms(!Terms)}   
                value={Terms}
                  control={
                  <Checkbox   
                  color="primary" 
                  name = "Terms" 
                  checked={Terms}
                   />}
                  label="I want to receive inspiration, marketing promotions and updates via email."
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              onClick={handleSubmit}
              disabled={IsDisabled}
            >
              Sign Up &nbsp;&nbsp;
              {IsDisabled ?  <CircularProgress ></CircularProgress> : null} 
            </Button>
            <Grid container justify="flex-end">
              <Grid item>
              <Button component={Link} to='/login' disabled={IsDisabled}>
            {"Already have an account? Sign in"}
            </Button>   
              </Grid>
            </Grid>
          </form>
        </div> 
      </Container>
    );
}

export default withSnackbar(Signup);
