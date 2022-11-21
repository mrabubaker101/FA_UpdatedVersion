import React ,{useState}from 'react';
import {CircularProgress, LinearProgress,FormControlLabel,Typography,TextField,Button, Container,Avatar,CssBaseline,Grid,Checkbox, Toolbar, Select, MenuItem, InputLabel, FormControl, IconButton} from '@mui/material';
import { withSnackbar } from "notistack"; 
import  {URL,PostService,GetService} from "../../services/GeneralService_Class";
import Vendor_List from './Vendor_List';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import PersonAddDisabledIcon from '@mui/icons-material/PersonAddDisabled';
const NewVendor = (props) => { 
  const reset =()=> {
    setFirstName('')
    setLastName('')
    setEmail('')
    setvendnum('')
    setvendNotes('')
    setvendAddress('')
    setCountry('')
    setCity('')
  } 
  const Countries=[
    {Name:'Pakistan',Code :'PK'},
    {Name:'India',Code :'IND'},
    {Name:'Canada',Code :'CA'},
    {Name:'Afghanistan',Code :'AFG'}
  ]
  const Cities=[
    {Name:'Karachi',Code :'KHI'},
    {Name:'Islamabad',Code :'ISB'},
    {Name:'Lahore',Code :'LHR'},
    {Name:'Khyber Pakhtoon',Code :'KPK'}
  ]

  const Grid_Columns = [
    { field: 'name', HeaderName: 'Name', minWidth: 170 },
    { field: 'vendnum', HeaderName: 'VendorCode', minWidth: 100 },
    {
      HeaderName: 'Address',
      field: 'Address',
      minWidth: 170,
      align: 'right',
      //format: (value) => value.toLocaleString('en-US'),
    },
    {
      field: 'Email',
      HeaderName: 'Email',
      minWidth: 170,
      align: 'right',
      //format: (value) => value.toLocaleString('en-US'),
    },
    {
      field: 'Note',
      HeaderName: 'Notes',
      minWidth: 170,
      align: 'right',
      //format: (value) => value.toFixed(2),
    }
  ];
  
        const [FirstName, setFirstName] = useState('');
        const [LastName, setLastName] = useState('');
        const [Email, setEmail] = useState('');
        const [vendnum, setvendnum] = useState('');
        const [vendNotes, setvendNotes] = useState(''); 
        const [vendAddress, setvendAddress] = useState(''); 
        const [Terms, setTerms] = useState(true);
        const [isValidAccount, setisValidAccount] = useState(false);
        const [IsDisabled, setIsDisabled] = useState(false); 
        const [LogMsg, setLogMsg] = useState('');
        const [LogErr, setLogErr] = useState('');
        const [Country, setCountry] = useState('');
        const [City, setCity] = useState('');
        const [GridData, setGridData] = useState([]);
        const [ShowAdd, setShowAdd] = useState(false);
 
        const  handleSubmit = async (e) => { 
            setIsDisabled(true)
            e.preventDefault();
            let VendorModel = {
              FirstName,
              LastName,
              Email,
              vendnum,
              vendNotes,

            }
            console.log("RegisterModel",VendorModel);
        
            await PostService.post("/signup",VendorModel)
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

          const  handleSubmit_Local =  (e) => { 
            setIsDisabled(true)
            e.preventDefault();
            let VendorModel = {
              FirstName,
              LastName,
              Email,
              vendnum,
              vendNotes,
              vendAddress,
              Terms,
            } 
           //Visualize
                setTimeout(() => {
                    setIsDisabled(false)
  
                    let exist = JSON.parse(localStorage.getItem("VendorData"));
                    console.table("exist",exist);
                    
                    if(exist != undefined || exist != null ){
                       let obj = exist; 
                       exist.push(VendorModel);
                       setGridData(exist)
                       localStorage.setItem("VendorData", JSON.stringify(exist));
                    } else {
                     exist=[VendorModel];
                     setGridData(exist)
                     localStorage.setItem("VendorData", JSON.stringify(exist));
                    } 
                    setShowAdd(false)
                    setLogErr('added success')   
                  props.enqueueSnackbar('added success', { variant: "Success",anchorOrigin:{ vertical: "top", horizontal: "right"} });
                  reset()
                }, 3000);
                
              }  
    return (
        <Container component="main" maxWidth="lg">
        <CssBaseline />
        <Toolbar /> 
        <IconButton sx={{marginTop:'-50px',float:'right'}} size='large' onClick={()=>setShowAdd(!ShowAdd)}>
              {!ShowAdd ? <PersonAddIcon fontSize='large'/>
              :<PersonAddDisabledIcon fontSize='large'/>}
          </IconButton>
        {ShowAdd && 
        <div> 
          <Typography component="h1" variant="h4">
           Create New Vendor/Supplier
          </Typography><hr />
          {IsDisabled ?  <LinearProgress ></LinearProgress> : null} 
          <br />   
         

          
          <form  noValidate>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                 size="small"
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
                <TextField  size="small"
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


              <Grid item xs={12} sm={4}>
                <TextField  size="small"
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

              <Grid item xs={12} sm={2}>
                <TextField  size="small"
                disabled={IsDisabled}
                  variant="outlined"
                  required
                  fullWidth
                  label="Vend Num" 
                   value={vendnum}
                  onChange={(e)=>setvendnum(e.target.value)} 
                />
              </Grid>


              <Grid item xs={12} sm={6}>
                <TextField  size="small"
                disabled={IsDisabled}
                  variant="outlined"
                  required
                  fullWidth
                  label="Notes" 
                   value={vendNotes}
                  onChange={(e)=>setvendNotes(e.target.value)} 
                />
              </Grid>



              <Grid item xs={12} sm={8}>
                <TextField  size="small"
                disabled={IsDisabled}
                  variant="outlined"
                  required
                  fullWidth 
                  label="Address"  
                   value={vendAddress}
                   onChange={(e)=>setvendAddress(e.target.value)}
  
                />
              </Grid>


              <Grid item xs={12} sm={2}>
              <FormControl  fullWidth>
              <InputLabel >Country</InputLabel>
              <Select 
                fullWidth 
                label="Country"  
                value={Country}
                size='small'
                onChange={(e)=>setCountry(e.target.value)}
              >
                {Countries.map((c,ind)=>(
                  <MenuItem value={c.Code} key={ind}>{c.Name}</MenuItem>
                ))}
              </Select> 
              </FormControl>
              </Grid>


              <Grid item xs={12} sm={2}>
              <FormControl  fullWidth>
              <InputLabel  >City</InputLabel>
              <Select  
                label="City"  
                value={City}
                size='small' 
                fullWidth
                onChange={(e)=>setCity(e.target.value)}
              > 
                {Cities.map((c,ind)=>(
                  <MenuItem value={c.Code} key={ind}>{c.Name}</MenuItem>
                ))} 
              </Select>
</FormControl>
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
              onClick={handleSubmit_Local}
              disabled={IsDisabled}
            >
              Save &nbsp;&nbsp;
              {IsDisabled ?  <CircularProgress ></CircularProgress> : null} 
            </Button> 
            <Toolbar />
          </form>
        </div>
        } 
        <Vendor_List columns={Grid_Columns} data={GridData} />
      </Container>
    );
}

export default withSnackbar(NewVendor);
