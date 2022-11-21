import React from 'react'
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import StepContent from '@mui/material/StepContent';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import {LinearProgress, Checkbox, CircularProgress, Container, Divider, FormControl, FormControlLabel, Grid, InputLabel, MenuItem, Select, TextField, Toolbar, StepButton } from '@mui/material';
 import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';  
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker'; 
import { isDisabled } from '@testing-library/user-event/dist/utils';
import MyLookupBar from '../ReuseableCompo/AB_LookupBar_A';
import MyLookupPaper from '../ReuseableCompo/AB_LookupBar_B';
const CompanySetup = () => { 

    const [activeStep, setActiveStep] = React.useState(0); 
    //C stands for Company
    const [C_Name, setC_Name] = React.useState('');
    const [C_ShotName, setC_ShotName] = React.useState('');
    const [C_Type, setC_Type] = React.useState('');
    const [C_Country, setC_Country] = React.useState('');
    const [C_City, setC_City] = React.useState('');
    const [C_Add1, setC_Add1] = React.useState('');
    const [C_Add2, setC_Add2] = React.useState('');
    const [C_Postal, setC_Postal] = React.useState('');
    const [C_Telephone, setC_Telephone] = React.useState('');
    const [C_Fax, setC_Fax] = React.useState('');
    const [C_CtrStartDate, setC_CtrStartDate] = React.useState(new Date('2014-08-18T21:11:54'));
    const [C_CtrEndDate, setC_CtrEndDate] = React.useState(new Date('2014-08-18T21:11:54'));
    const [C_MultiOffice, setC_MultiOffice] = React.useState(0);
    const [C_MailingAddress, setC_MailingAddress] = React.useState('');
    const [ShouldSendMail, setShouldSendMail] = React.useState(false);
    const [IsDisabled, setIsDisabled] = React.useState(false);
  
    const steps = [
        {
          label: <Typography variant='h5'> Profile settings</Typography>,
          description: <br />,
          Content:
          <>
                <Container>
                <form  noValidate>
                <Grid container spacing={2}>
                  <Grid item xs={12} sm={6}>
                    <TextField
                    disabled={IsDisabled}
                      onChange={(e)=>setC_Name(e.target.value)}
                      value={C_Name}
                      variant="outlined"
                      required
                      fullWidth
                      label="Company Name"
                      autoFocus
                      size='small'
                    />
                  </Grid>
                  <Grid item xs={12} sm={3}>
                    <TextField
                      disabled={IsDisabled}
                      variant="outlined"
                      required
                      fullWidth
                      label="Short Name"
                      value={C_ShotName}
                      onChange={(e)=>setC_ShotName(e.target.value)}
                      size='small'
                    />
                  </Grid>
                  <Grid item xs={12} sm={3}>
                    <TextField
                      disabled={IsDisabled}
                      variant="outlined"
                      required
                      fullWidth
                      label="Company Type"
                      value={C_Type}
                      onChange={(e)=>setC_Type(e.target.value)}
                      size='small'
                    />
                  </Grid>
 
                  <Grid item xs={6}>
                    <TextField
                    disabled={IsDisabled}
                      variant="outlined"
                      required
                      fullWidth
                      label="Address 1"
                      value={C_Add1}
                      onChange={(e)=>setC_Add1(e.target.value)}
                      size='small'
                    />
                  </Grid>

                  <Grid item xs={6}>
                    <TextField
                    disabled={IsDisabled}
                      variant="outlined"
                      required
                      fullWidth
                      label="Address 2"
                     value={C_Add2}
                      onChange={(e)=>setC_Add2(e.target.value)}
                      size='small'
                    />
                  </Grid>
 
                  <Grid item xs={3}>
                    <TextField
                    disabled={IsDisabled}
                      variant="outlined"
                      required
                      fullWidth
                      label="Country"
                      value={C_Country}
                      onChange={(e)=>setC_Country(e.target.value)}
                      size='small'
                    />
                  </Grid>

                  <Grid item xs={3}>
                    <TextField
                    disabled={IsDisabled}
                      variant="outlined"
                      required
                      fullWidth
                      label="City"
                     value={C_City}
                      onChange={(e)=>setC_City(e.target.value)}
                      size='small'
                    />
                  </Grid>
 
                  <Grid item xs={2}>
                    <TextField
                    disabled={IsDisabled}
                      variant="outlined"
                      required
                      fullWidth
                      label="Telephone"
                     value={C_Telephone}
                      onChange={(e)=>setC_Telephone(e.target.value)}
                      size='small'
                    />
                  </Grid>
                  <Grid item xs={2}>
                    <TextField
                    disabled={IsDisabled}
                      variant="outlined"
                      required
                      fullWidth
                      label="Fax"
                     value={C_Fax}
                      onChange={(e)=>setC_Fax(e.target.value)}
                      size='small'
                    />
                  </Grid>

                  <Grid item xs={2}>
                    <TextField
                    disabled={IsDisabled}
                      variant="outlined"
                      required
                      fullWidth
                      label="Postal"
                     value={C_Postal}
                      onChange={(e)=>setC_Postal(e.target.value)}
                      size='small'
                    />
                  </Grid>
                </Grid> 
              </form>
                </Container>
          </>
        },
        {
          label: <Typography  variant='h5'> Account settings  </Typography>,
          description: '',
          Content:
          <><br/> 
            <Typography variant='h7' color={"green"}><b><u>* Multiple Offices:</u></b></Typography>
           <br/><br/> 
          <Grid item xs={12} sm={12}>
              <FormControl  sx={{width:'250px'}}>
              <InputLabel >Multiple Office</InputLabel>
              <Select  
                label="Multiple Office"  
                value={C_MultiOffice}
                size='small'
                disabled={IsDisabled}
                onChange={(e)=>setC_MultiOffice(e.target.value)}
              > 
                  <MenuItem value='1' key={1}>Yes</MenuItem>
                  <MenuItem value='0' key={2}>No</MenuItem>
              </Select> 
              </FormControl>
              </Grid>


              <Grid item xs={12}>
                <FormControlLabel 
                disabled={IsDisabled}
                onChange={(e)=>setShouldSendMail(!ShouldSendMail)}   
                value={ShouldSendMail}
                  control={
                  <Checkbox   
                  color="primary"  
                  checked={ShouldSendMail}
                   />}
                  label="Send E-Statement , Billing Info , and any information to your Email."
                />
              </Grid>
{ShouldSendMail &&
<Grid item xs={12} sm={6}>
<br/>
                    <TextField
                    disabled={IsDisabled}
                      onChange={(e)=>setC_MailingAddress(e.target.value)}
                      value={C_MailingAddress}
                      variant="outlined"
                      required 
                      label="Mailing Address"
                      autoFocus
                      size='small'
                      sx={{width:'400px'}}
                    />
                  </Grid>
}<br />
<Divider />
          <br/> 
            <Typography variant='h7' color={"green"}><b><u>* System Control Dates:</u></b></Typography>
           <br/><br/> 
          <Grid container spacing={2}>
                  <Grid item xs={12} sm={12}>
                  <LocalizationProvider dateAdapter={AdapterDateFns}>
                        <DesktopDatePicker
                        disabled={IsDisabled}
                          label="Start Date"
                          inputFormat="MM/dd/yyyy"
                          value={C_CtrStartDate}
                          onChange={(newValue)=>setC_CtrStartDate(newValue)}
                          renderInput={(params) => <TextField {...params} size='small'/>}
                        />
                    </LocalizationProvider>
                  </Grid>
        
                  <Grid item xs={12} sm={12}>
                  <LocalizationProvider dateAdapter={AdapterDateFns}>
                    <DesktopDatePicker
                    disabled={IsDisabled}
                        label="End Date"
                        inputFormat="MM/dd/yyyy"
                        value={C_CtrEndDate}
                        onChange={(newValue)=>setC_CtrEndDate(newValue)}
                        renderInput={(params) => <TextField {...params} size='small'/>}
                        />
                    </LocalizationProvider>
                  </Grid>
        </Grid>
          </>
        },
        {
          label: <Typography  variant='h5'> Posting Selection  </Typography>,
          description: null,
          Content:<>
            <Grid sx={{ flexGrow: 1 }} container spacing={0}>

                <Grid item xs={12}>
                    <Grid container justifyContent="center" spacing={0}> 
                      <Grid  item sx={{marginBlock:'auto'}} >
                        <Typography  variant="subtitle2"> Accounts Receiveable </Typography> 
                      </Grid> 
                      <Grid item ><MyLookupBar disabled={IsDisabled}/></Grid>
                        <Grid  item sx={{marginBlock:'auto'}}>
                          <Typography variant="subtitle2">Use F.1 to Manipulate </Typography> 
                        </Grid>
                    </Grid>
                </Grid>
       
                <Grid item xs={12} sx={{marginTop:'-10px'}}>
                  <Grid container justifyContent="center" spacing={0}> 
                      <Grid item sx={{marginBlock:'auto'}}>
                        <Typography variant="subtitle2" sx={{textAlign:'center'}}> Accounts Receiveable</Typography> 
                      </Grid> 
                      <Grid item ><MyLookupBar disabled={IsDisabled}/></Grid>
                      <Grid  item sx={{marginBlock:'auto'}}>
                      <Typography variant="subtitle2">Use F.1 to Manipulate </Typography> 
                      </Grid>
                  </Grid>
                </Grid>

                <Grid item xs={12} sx={{marginTop:'-10px'}}>
                  <Grid container justifyContent="center" spacing={0}> 
                      <Grid item sx={{marginBlock:'auto'}}>
                        <Typography variant="subtitle2" sx={{textAlign:'center'}}> Accounts Receiveable</Typography> 
                      </Grid> 
                      <Grid item> <MyLookupBar disabled={IsDisabled}/></Grid>
                      <Grid  item sx={{marginBlock:'auto'}}>
                      <Typography variant="subtitle2">Use F.1 to Manipulate </Typography> 
                      </Grid>
                  </Grid>
                </Grid>

                <Grid item xs={12} sx={{marginTop:'-10px'}}>
                  <Grid container justifyContent="center" spacing={0}> 
                      <Grid item sx={{marginBlock:'auto'}}>
                        <Typography variant="subtitle2" sx={{textAlign:'center'}}> Accounts Receiveable</Typography> 
                      </Grid>  
                      <Grid  item > <MyLookupBar disabled={IsDisabled}/>  </Grid> 
                      <Grid  item sx={{marginBlock:'auto'}}>
                      <Typography variant="subtitle2">Use F.1 to Manipulate </Typography> 
                      </Grid>
                  </Grid>
                </Grid>

                <Grid item xs={12} sx={{marginTop:'-10px'}}>
                  <Grid container justifyContent="center"  spacing={0}> 
                    <Grid  item sx={{marginBlock:'auto'}} >
                      <Typography  variant="subtitle2"> Accounts Receiveable </Typography> 
                    </Grid> 
                    <Grid item><MyLookupBar disabled={IsDisabled}/></Grid>
                    <Grid item sx={{marginBlock:'auto'}}>
                      <Typography variant="subtitle2">Use F.1 to Manipulate </Typography> 
                    </Grid>
                  </Grid>
                </Grid>

            </Grid>
          </>
        },
      ]; 
    const handleNext = () => {
      setActiveStep((prevActiveStep) => prevActiveStep + 1);
    }; 
    const handleBack = () => {
      setActiveStep((prevActiveStep) => prevActiveStep - 1);
    }; 
    const handleReset = () => {
      setActiveStep(0);
    }; 
const SubmitAccount =()=>{ 
    let obj = {
        C_Name,C_ShotName,C_Type,C_Country,C_City,C_Add1,C_Add2,C_Postal,C_Telephone,C_Fax,C_CtrStartDate,
        C_CtrEndDate,C_MultiOffice,C_MailingAddress,ShouldSendMail,IsDisabled
    }
    console.log('Company obj' ,obj);
    setIsDisabled(true)
    setTimeout(() => {
        setIsDisabled(false)
    }, 6000);
}

    const handleStep =(step)=>{
      setActiveStep(step);
    }
  return (
    <Box >
    <br />
        {IsDisabled ?  <LinearProgress /> : null}
      <Stepper nonLinear orientation='vertical'  activeStep={activeStep} >
        {steps.map((step, index) => (
          <Step key={step.label}> 
            
            
            <StepButton  onClick={()=>handleStep(index)}> 
            <StepLabel
              optional={
                index === 2 ? (
                  <Typography variant="caption">Last step</Typography>
                ) : null
              }
            >


              {step.label}
            </StepLabel>
            </StepButton>

            <StepContent>
              <Typography>{step.description} </Typography> 
                {step.Content}
              <Box sx={{ mb: 2 }}>
                <div>
                    {
                         index === steps.length - 1 ?    
                         <Button 
                          variant="outlined"
                          onClick={()=>SubmitAccount()} 
                          sx={{ mt: 1, mr: 1 }}
                          disabled={IsDisabled}
                         >
                            Submit Account &nbsp;&nbsp;{IsDisabled && <CircularProgress />}
                        </Button>
                         :       
                         <Button variant="contained" onClick={handleNext} sx={{ mt: 1, mr: 1 }}>
                         {index === steps.length - 1 ? 'Finish' : 'Continue'}
                        </Button>
                    }
  


                  <Button
                    disabled={index === 0}
                    onClick={handleBack}
                    sx={{ mt: 1, mr: 1 }}
                  >
                    Back
                  </Button>
                </div>
              </Box>
            </StepContent>


          </Step>
        ))}
      </Stepper>
      {activeStep === steps.length && (
        <Paper square elevation={0} sx={{ p: 3 }}>
          <Typography>All steps completed - you&apos;re finished</Typography>
          <Button onClick={handleReset} sx={{ mt: 1, mr: 1 }}>
            Reset
          </Button>
        </Paper>
      )}
    </Box>
  )
}
export default CompanySetup;
