import React  from 'react'
import {Card, CardContent, Container, Dialog, DialogTitle, Fade, FormControl, Grid, Grow, IconButton, Input, InputAdornment, InputBase, InputLabel, LinearProgress, List, ListItem, ListItemAvatar, ListItemText, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField, Tooltip, Typography } from '@mui/material';

const PrintPage = ({open,Closer}) => { 
  return (
    <Dialog 
    open={open} 
    onClose={()=>Closer(false)} 
    fullWidth 
//    fullScreen
    maxWidth='md'
    scroll='body'
    > 

<Card elevation={9}>
            <Container>
              <CardContent>
                <Grid container spacing={0}>
                   
                  <Grid align="center" item sm={12}>
                      <Typography color="secondary"  variant="h4" style={{ fontWeight: "bold" }}>
                        Payment Voucher
                      </Typography>
                      <b>496 Nicolls Lane, New Baltimore, MI 48047, 496 Nicolls Lane,
                       <br />New Baltimore, MI 48047</b>
                  </Grid>
 
                <Grid container spacing={0}> 

                  <Grid item sm={8} align="left">
                  <br /><br />
                  <Typography fontSize={'30px'} variant="h6" color={'GrayText'}>
                      <b> Client Details : </b>
                  </Typography>
                  <Typography variant="h6" color={'navy'}>
                      <b> Robin Gupta, E </b>
                  </Typography>
                  <Typography variant="subtitle2" color={'GrayText'}>
                      <b> Address : </b> New Baltimore, MI 48047<br />New Baltimore, khhka sadnnas dljj MI 48047
                  </Typography>
                  </Grid>

                  <Grid item sm={4}>
                  <br /><br />
                  <Typography color='GrayText' variant="subtitle1" >
                      <center><u><b> Delivery Address Information </b></u></center>
                  </Typography>
 
                  <TableContainer>
                    <Table size="small" >
                        <TableHead>
                            <TableRow>
                            <TableCell align="left">Summary</TableCell>
                            <TableCell align="right">Amount</TableCell> 
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            <TableRow >
                                <TableCell align="left">Brusely Scott. System</TableCell>
                                <TableCell align="right">$123.98</TableCell>
                            </TableRow>
                            <TableRow >
                                <TableCell align="left">Foreign Reserved Corp.</TableCell>
                                <TableCell align="right">$860.57</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell
                                    align="right"
                                    style={{fontSize: "120%",fontWeight: "bold", color: "navy",}}>
                                    Total
                                </TableCell>
                                <TableCell align="right"><b>$228.09</b></TableCell>
                            </TableRow> 
                        </TableBody>
                    </Table>
                </TableContainer>
 
                  </Grid> 
                </Grid>
 
                <br /><br />

                <Grid container spacing={1}> 
                  <Grid item sm={12}>
                     <Typography color={'ActiveBorder'} fontSize='150%' variant="subtitle1">
                      <b> Description : </b>
                    </Typography>
                    <Typography color={'gray'} fontSize='120%' variant="subtitle2">
                      <p>
                        Regarding our purchases for the month of (July) from you, it is observed that you have not issued
                         Invoices against the goods you supplied as yet.
                        <br /><br /> You are requested, therefore, to issue the stated Invoices at your earliest as we have to close our Accounts. 
                      </p>
                    </Typography>
                  </Grid>

                  <Grid item sm={12}>
                  <TableContainer>
                    <Table size="small" padding='none'>
                        <TableHead style={{backgroundColor:'navy'}}>
                            <TableRow>
                                <TableCell style={{color:'white'}} align="center">S No</TableCell>
                                <TableCell style={{color:'white'}} align="left">Account</TableCell>
                                <TableCell style={{color:'white'}} align="left">Date</TableCell> 
                                <TableCell style={{color:'white'}} align="right">Debit</TableCell> 
                                <TableCell style={{color:'white'}} align="right">Credit&nbsp;&nbsp;</TableCell> 
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            <TableRow >
                                <TableCell align="center">1</TableCell>
                                <TableCell align="left">Habib Bank Limited</TableCell>
                                <TableCell align="left">Jan 20, 2022</TableCell>
                                <TableCell align="right">$123.98</TableCell>
                                <TableCell align="right">$0.00</TableCell>
                            </TableRow>
                            
                            <TableRow >
                                <TableCell align="center">2</TableCell>
                                <TableCell align="left">HBL Bank Limited</TableCell>
                                <TableCell align="left">December 21, 2022</TableCell>
                                <TableCell align="right">$340.98</TableCell>
                                <TableCell align="right">$0.00</TableCell>
                            </TableRow>

                            <TableRow >
                                <TableCell align="center">3</TableCell>
                                <TableCell align="left">Meezan Bank Limited</TableCell>
                                <TableCell align="left">August 20, 2022</TableCell>
                                <TableCell align="right">$0.00</TableCell>
                                <TableCell align="right">$450.56</TableCell>
                            </TableRow>

                            <TableRow >
                                <TableCell align="center">4</TableCell>
                                <TableCell align="left">Faisal Bank Card</TableCell>
                                <TableCell align="left">Feb 30, 2022</TableCell>
                                <TableCell align="right">$0.00</TableCell>
                                <TableCell align="right">$34.65</TableCell>
                            </TableRow>

                            <TableRow >
                                <TableCell align="center">4</TableCell>
                                <TableCell align="left">Faisal Bank Card</TableCell>
                                <TableCell align="left">Feb 30, 2022</TableCell>
                                <TableCell align="right">$0.00</TableCell>
                                <TableCell align="right">$34.65</TableCell>
                            </TableRow> 
                            
                            <TableRow>
                                <TableCell ></TableCell>
                                <TableCell ></TableCell>
                                <TableCell ></TableCell>
                                <TableCell
                                    align="right"
                                    style={{fontSize: "120%",fontWeight: "bold", color: "navy",}}>
                                    Total
                                </TableCell>
                                <TableCell align="right"><b>$228.09</b></TableCell>
                            </TableRow> 
                        </TableBody>
                    </Table>
                </TableContainer>
                  </Grid>


                </Grid> 
            </Grid>
        <hr /> 
<br />                 
                  <Typography variant="h5" align="center" color ='gray'>
                  X-Business Solution, California (2023) 
                  </Typography>
                  
              </CardContent>    
            </Container>
    </Card>
 
    </Dialog>
 
  )
}

export default PrintPage