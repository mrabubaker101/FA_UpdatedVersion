import React, { useState } from 'react';
import {Typography,Box,Paper,CssBaseline,Grid} from '@mui/material';
import { makeStyles } from '@mui/styles';
import { Outlet } from 'react-router';
import { useParams } from "react-router-dom";
import Image from '../../assets/images/BackG2.jpg' 

function Copyright() {
    return (
      <Typography variant="body2" color="textSecondary" align="center">
        {'Copyright © '}
        <a color="inherit" href="https://material-ui.com/">
          Your Website
        </a>{' '}
        {new Date().getFullYear()}
        {'.'}
      </Typography>
    );
  }

  const useStyles = makeStyles((theme) => ({
    root: {
      height: '100vh',
    },
    image: {
      backgroundImage: "url(" + Image + ")",
      backgroundRepeat: 'no-repeat',
    //   backgroundColor:
    //     theme.palette.type === 'light' ? theme.palette.grey[50] : theme.palette.grey[900],
      backgroundSize: 'cover',
      backgroundPosition: 'center',
    },
    paper: {
     // margin: theme.spacing(8, 4),
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    }, 
  }));


export default function HomePage_Login( ) {
    const classes = useStyles();  
    const para = useParams();
    const [route,setRoute] = useState(para.auth=="auth"?true:false);
    //const hist = useHistory();
     console.log("ToutesParams",para);   
     console.log("route",route);  
    return (
        <React.Fragment>
            <Grid container component="main" className={classes.root}>
                <CssBaseline />
                <Grid item xs={false} sm={4} md={8} className={classes.image} />
                <Grid item xs={12} sm={8} md={4} component={Paper} elevation={6} square> 
                    <div className={classes.paper}> 
                    {/* <Login /> */}
                        <Outlet />
                        <Box mt={5}>
                            <Copyright />
                        </Box>
                    </div>
                </Grid> 
            </Grid>
        </React.Fragment>
    );}