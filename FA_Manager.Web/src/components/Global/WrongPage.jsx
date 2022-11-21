import React from 'react';
import { Container, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';

const WrongPage = () => {
    return ( 
        <Container component="main" maxWidth="lg">
          <Typography variant="h1"   color="initial">
                404
          </Typography>  
          <Typography variant="h3" color="blue">
            We can't seem to find a page you are looking for  
          </Typography>
          <Button component={Link} to='/abc'  variant="contained" color="info" size='large'>
            Go Back
          </Button>
        </Container>
    );
} 
export default WrongPage;
