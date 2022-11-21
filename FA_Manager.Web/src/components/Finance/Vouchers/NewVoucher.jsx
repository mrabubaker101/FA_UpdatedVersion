import { Alert, Avatar, Button, Card, CardActions, CardContent, CircularProgress, Container, Dialog, DialogTitle, Fade, FormControl, Grid, Grow, IconButton, Input, InputAdornment, InputBase, InputLabel, LinearProgress, List, ListItem, ListItemAvatar, ListItemText, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField, Tooltip, Typography } from '@mui/material';
import { DesktopDatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import React ,{useEffect, useState} from 'react'
import { GetService, URL } from '../../../services/GeneralService_Class';
import AB_SelectionDialoge from '../../ReuseableCompo/AB_Components/AB_SelectionDialoge';
import MyLookupBar from '../../ReuseableCompo/AB_LookupBar_A';
import DetailedAccounts_COA from '../../ReuseableCompo/Lookups/DetailedAccounts_COA';
import LookupViewer from '../../ReuseableCompo/Lookups/LookupViewer';
import SubdirectoryArrowRightIcon from '@mui/icons-material/SubdirectoryArrowRight';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import AddBoxIcon from '@mui/icons-material/AddBox';
import SubtitlesIcon from '@mui/icons-material/Subtitles';
import SubtitlesOffIcon from '@mui/icons-material/SubtitlesOff';
import ExposureIcon from '@mui/icons-material/Exposure';
import CloseIcon from '@mui/icons-material/Close';
import EditAttributesIcon from '@mui/icons-material/EditAttributes';
const VoucherTypes = ["Payment Voucher", "Received Voucher", "Journal Voucher"];
  
const NewVoucher = () => {
  const [ArrayFiller, setArrayFiller] = useState([])
  const [VoucherType, setVoucherType] = useState(VoucherTypes[0])
  //Dialogs
  const [VoucherTypeDialoge, setVoucherTypeDialoge] = useState(false)
  const [COALookup, setCOALookup] = useState(false)
  
  //Operational 
  const [isWait, setisWait] = useState(false)
  const [ShowEntryBar, setShowEntryBar] = useState(false)
  
  
  //get Data from Child 
  const [SelectedLookupAccount, setSelectedLookupAccount] = useState({})
  console.log('SelectedLookupAccount',SelectedLookupAccount);
  const [SelectedLookupAccountfocus, setSelectedLookupAccountfocus] = useState(false)
  const [SelectedAccountId, setSelectedAccountId] = useState(0)
  
  useEffect(() => {
    setSelectedAccountId(SelectedLookupAccount.account_Id)
    console.log('SelectedLookupAccount.account_Id => =>',SelectedLookupAccount.account_Id);
  }, [SelectedLookupAccount])
 
  const HandelTypeDialoge = (SelectedType) => { 
    setVoucherType(SelectedType)
    setVoucherTypeDialoge(false) 
  } 

  const HandelCOALookup =()=>{
    setCOALookup(false)
  }
  const HandeEntryBar = ()=>{
    setShowEntryBar(!ShowEntryBar)    
    setSelectedLookupAccount({})
  }
  return (
    <div>
        {"API error".length > 0 ? (
          <>
          <br />
          <Alert variant="filled"
            severity={'ReplyStatus' === true ? "success" : "error"}
          >
            {'ReplyMsg'}
          </Alert>
          </>
        ) :
        null}
        <br />

      <Grow in={true} timeout={1000}>
         
      <Card elevation={24}>
            {false ? <LinearProgress /> : null}
            <Container>
              <CardContent>
                <Grid container spacing={0}>

                  <Grid align="center" item sm={12}>
                  <Tooltip title="Select Voucher Type" placement="top" arrow>
                    <Button
                      disabled={isWait}
                      color="secondary"
                      onClick={()=>setVoucherTypeDialoge(true)}
                    >
                      <Typography variant="h5" style={{ fontWeight: "bold" }}>
                        {VoucherType}
                      </Typography>
                    </Button>
                    </Tooltip>
                  </Grid>

                  
                <Grid container spacing={0}>

                  <Grid item sm={9} align="left">
                  <Typography variant="subtitle1">
                      <b> Voucher No : </b>
                    </Typography>
                    <Tooltip title="Voucher No will generate by system" placement="top-end" arrow>
                        <TextField  disabled variant='outlined' size='small'
                         helperText={"This will auto generate "} />
                    </Tooltip>
                  </Grid>

                  <Grid item sm={3}  >
                  <Typography variant="subtitle1">
                      <b> Cheque No : </b>
                    </Typography>
                    <Tooltip title="Enter Cheque/Check No" placement="top-end" arrow>
                        <TextField fullWidth variant='outlined' size='small'
                         helperText={"Add cheque No if needed "} /> 
                    </Tooltip>
                  </Grid>

                </Grid>
 
                <br /><br />

                <Grid container spacing={1}>
                  
                  <Grid item sm={9}>
                    {/* <Typography sx={{display:'flex',alignItem:'center'}} variant="subtitle1"> */}
                    <Typography variant="subtitle1">
                      <b> Narration : </b>
                    </Typography>
                    <Tooltip title="Description of voucher" placement="top" arrow>
                        <TextField  fullWidth variant='outlined' size='small' /> 
                    </Tooltip>
                  </Grid>

                  <Grid item sm={3} >
                  <Typography variant="subtitle1">
                  <b> Voucher Date : </b>
                    </Typography>
                  <LocalizationProvider dateAdapter={AdapterDateFns}>
                    <DesktopDatePicker
                        //disabled={IsDisabled}
                        //label="End Date"
                        inputFormat="MM/dd/yyyy"
                        //value={C_CtrEndDate}
                        //onChange={(newValue)=>setC_CtrEndDate(newValue)}
                        renderInput={(params) => <TextField {...params} size='small'/>}
                        />
                    </LocalizationProvider> 
                  </Grid>

                </Grid>


                </Grid>

                <hr />

              <IconButton sx={{float:'right'}} size='large' onClick={HandeEntryBar}>
              {!ShowEntryBar ? <ExposureIcon fontSize='large'/>
              :<CloseIcon fontSize='large'/>}
              </IconButton>
 
{ShowEntryBar && 
<div>

<Typography component="h6" variant="h6">
    {'Adding Entry'}
</Typography> 

<Grow in={true} timeout={400}>
<Card
  elevation={24}
  style={{ pointerEvents: false ? "none" : "" }}
>
  <CardContent>
    <Grid container spacing={1}>
      
      <Grid item md={8}>
          <MyLookupBar 
              value={SelectedLookupAccount.code}  
              fullWidth ={true} 
              OnLookupClick={()=>setCOALookup(true)}  
              tooltip='Select Head of account'
            />
            <span>
            <Tooltip
              placement="bottom-end" arrow
              title={
                SelectedLookupAccount.title ?
                <span style={{fontSize:'16px',width:'auto', color: "lightgreen" }}>{SelectedLookupAccount.title }</span>
                :'Selected account will appear here'} >
              {
                SelectedLookupAccount.title?
                  <b style={{color:'blue',verticalAlign:'sub'}}>
                    <SubdirectoryArrowRightIcon sx={{mt:'2px'}} />             
                    &nbsp;&nbsp;{SelectedLookupAccount.title}</b>
          : 
                  <b style={{color:'gray',verticalAlign:'sub'}}>
                    <SubdirectoryArrowRightIcon sx={{mt:'2px'}} />             
                    &nbsp;&nbsp;No Account selected</b>
              } 
          </Tooltip>
          </span>
      </Grid>
      
      <Grid item md={2}  >
        <Tooltip title='Debit Amount' placement="top-end" arrow>
        <b>
          <TextField 
          sx={{fontVariantCaps:'all-petite-caps'}}
          fullWidth
          label='Debit'
          variant='outlined' size='small'
          /> 
        </b>
          </Tooltip>
      </Grid>
      
      <Grid item md={2}>
        <Tooltip title='Credit Amount' placement="top-end" arrow>
        <b>
        <TextField 
          sx={{fontVariantCaps:'all-petite-caps'}}
          fullWidth
          label='Credit'
          variant='outlined' size='small'
          /> 
          </b> 
          </Tooltip>
        <Tooltip title='save/apply changes' placement="bottom" arrow>
        <Button
           disabled={isWait}
           onClick={()=>setShowEntryBar(false)}
           sx={{float:'right',marginTop:'5px'}}
           variant='contained'
           color='success'
           
        >
          <EditAttributesIcon fontSize='medium'/> &nbsp;Apply
        </Button>
        </Tooltip>
      
      
      
      
      
    
      </Grid>
         
      {true ? (
          <Alert variant="standard" sx={{width:'100%'}} 
          severity={'ReplyStatus' === true ? "success" : "error"}
        >
          {'ReplyMsg asdasda sd'}
        </Alert>
      ) : null}
    </Grid>
  </CardContent>
</Card>
</Grow> 
</div>
}
<br /><br /> 
                {ArrayFiller.length > 0 ? (
                  <Container>
                    <Grow in={true} timeout={900}>
                      <Paper
                        elevation={5}
                        style={{
                          borderRadius: "10px",
                        }}
                      >
                        <TableContainer>
                          <Table size="small" id="iTable">
                            <TableHead>
                              <TableRow>
                                <TableCell>Description</TableCell>
                                <TableCell align="right">Debit</TableCell>
                                <TableCell align="right">Credit</TableCell>
                                <TableCell align="right">Edit</TableCell>
                                <TableCell align="right">Delete</TableCell>
                              </TableRow>
                            </TableHead>
                            <TableBody>
                              {ArrayFiller.map((itm, ind) => (
                                <Grow in={true} timeout={900}>
                                  <TableRow key={ind}>
                                    <TableCell>{itm.AccountName}</TableCell>
                                    <TableCell align="right">
                                      {itm.TakeDr}
                                    </TableCell>
                                    <TableCell align="right">
                                      {itm.TakeCr}
                                    </TableCell>
                                    <TableCell
                                      align="right"
                                      style={{ width: "1px" }}
                                    >
                                      <Button
                                        //disabled={isWait}
                                        size="small"
                                        color="primary"
                                        variant="contained"
                                        //onClick={(e) => this.HandelEdit_Trans(ind)}
                                        //onClick={(e) => this.HandelEditModal_Open(ind)}
                                      >
                                        Edit
                                      </Button>
                                    </TableCell>
                                    <TableCell
                                      align="right"
                                      style={{ width: "1px" }}
                                    >
                                      <Button
                                        //disabled={isWait}
                                        size="small"
                                        color="secondary"
                                        variant="contained"
                                        //onClick={() =>this.DeleteTransactionItem(ind)}
                                      >
                                        Delete
                                      </Button>
                                    </TableCell>
                                  </TableRow>
                                </Grow>
                              ))}
                              <TableRow id="WholePage">
                                <TableCell
                                  style={{
                                    fontSize: "140%",
                                    fontWeight: "bold",
                                    textDecoration: "underline",
                                    color: "navy",
                                  }}
                                  align="right"
                                >
                                  Total
                                </TableCell>
                                <TableCell
                                  style={{
                                    fontSize: "140%",
                                    fontWeight: "bold",
                                  }}
                                  align="right"
                                >
                                  {ArrayFiller.map(
                                    (item) => item.TakeDr
                                  ).reduce(
                                    (prev, next) =>
                                      parseFloat(prev) + parseFloat(next)
                                  )}
                                </TableCell>
                                <TableCell
                                  style={{
                                    fontSize: "140%",
                                    fontWeight: "bold",
                                  }}
                                  align="right"
                                >
                                  {ArrayFiller.map(
                                    (item) => item.TakeCr
                                  ).reduce(
                                    (prev, next) =>
                                      parseFloat(prev) + parseFloat(next)
                                  )}
                                </TableCell>
                                <TableCell></TableCell>
                                <TableCell></TableCell>
                              </TableRow>
                              {'this.state.isEqualized' ? (
                                <React.Fragment>
                                  <TableRow>
                                    <h5
                                      style={{
                                        float: "right",
                                        color: "red",
                                        paddingTop: "5px",
                                      }}
                                    >
                                      {" "}
                                      * Debit and Credit must be equal in total
                                    </h5>
                                  </TableRow>
                                </React.Fragment>
                              ) : null}
                            </TableBody>
                          </Table>
                        </TableContainer>
                      </Paper>
                    </Grow>
                  </Container>
                ) : (
                  <Typography variant="h5" align="center">
                    No Transactions Made
                  </Typography>
                )}
                {/* {'this.state.NoTransaction_Text_Error.length' > 0 ? ( */}
                {'' > 0 ? (
                  <React.Fragment>
                    <Alert severity="error">
                      <h6>{'this.state.NoTransaction_Text_Error'}</h6>
                    </Alert>
                  </React.Fragment>
                ) : null}
              </CardContent>
              <CardActions>
                <Button
                  color="primary"
                  variant="outlined"
                  size="large"
                  fullWidth={true}
                  //onClick={this.SubmitVoucherHandler}
                  //disabled={isWait}
                >
                  {/* {isWait ? <CircularProgress /> : null} */}
                  {false ? <CircularProgress /> : null}
                  &nbsp;&nbsp;&nbsp;&nbsp;
                  {/* {isWait ? "Please wait, submitting..." : "Submit Vocher"} */}
                  {false ? "Please wait, submitting..." : "Submit Vocher"}
                </Button>
              </CardActions>
            </Container>
          </Card>
      </Grow>

{/* Open Voucher Type Dialoge */}  
  <AB_SelectionDialoge   
    title={'Voucher Types'}
    data={VoucherTypes}
    open = {VoucherTypeDialoge}
    onClose = {HandelTypeDialoge}
  />
{/* Open Voucher Type Dialoge */}


<LookupViewer 
  title='Account List'
  open = {COALookup}
  Closer={HandelCOALookup}
  childern={
    <DetailedAccounts_COA 
    setSelectedLookupAccount={setSelectedLookupAccount}
    Closer={HandelCOALookup}  //for closing the parent states / dialog
    setSelectedLookupAccountfocus={setSelectedLookupAccountfocus}
    />
  }
/>
    </div>
  )
}

export default NewVoucher