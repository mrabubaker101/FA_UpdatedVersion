import React from 'react'
import {Slide,Paper,Box, Grow, Fade} from '@mui/material';

const MySlideOut =(props)=> {  
    const{children,show,ViweIn}=props
    let viewer = 'Slide'
    if(ViweIn == 'Fade'){
      viewer='Fade'
    }else if(ViweIn == 'Grow'){
      viewer='Grow'
    }
 
return (
    <Box  
        sx={{
          height: "8%", 
          padding: 2,
          //borderRadius: 1,
          //  bgcolor: (theme) =>
          //    theme.palette.mode === 'light' ? 'grey.100' : 'grey.900',
          overflow: 'hidden',
        }} 
    >   
        {viewer=='Fade' ?  
            <Fade in={show} timeout={400} >
                <Paper elevation={3}  > 
                  {children}  
                </Paper> 
            </Fade> 
        :(viewer=='Grow' ?
            <Grow in={show} timeout={400}>  <Paper elevation={3}> 
                  {children}  
                </Paper> 
            </Grow> 
        :
            <Slide direction="left" in={show} timeout={400}> 
                <Paper elevation={3}> 
                  {children}  
                </Paper> 
            </Slide> 
    )}
    </Box>
  )}
 export default MySlideOut;