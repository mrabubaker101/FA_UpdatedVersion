import React from 'react' 
import {Drawer, Typography, Toolbar, IconButton} from '@mui/material';
import { useTheme } from '@mui/material/styles';
import CloseSharpIcon from '@mui/icons-material/CloseSharp';
const AB_Slider =(props)=> { 
    const theme = useTheme();
    const {
        children, open, setSliderOpen, anchor
    } = props    
  return ( <Drawer  
        variant='persistent' 
        PaperProps={{ 
            sx:{
                boxShadow: 24,
                width: {
                  xs: `calc(100vw - ${theme.spacing(3)})`,
                  sm: `calc(100vw - ${theme.spacing(3)})`,
                  md: 700,
                  backgroundColor: 'lightcyan' 
                }
              }
        }}
        
        anchor={anchor} //position
        open={open} //bool
        onClose={()=>setSliderOpen(true)} //handler
        >
            <div> <br /><br /><br />
            <Toolbar  
               sx={{
                 boxShadow:2,
                 margin:1,
                 height:'5px', 
                 //justifyContent:'right'
                 placeContent:'space-between' 
               }}
              >
                <Typography variant="h6" color="gray">Asset Fixation</Typography>
                <IconButton  onClick={()=>setSliderOpen(false)}><CloseSharpIcon fontSize='medium' color='primary' /></IconButton>
              </Toolbar >  
            
              {/* //Place Childerns */} 
              {children} 
               </div>
        </Drawer> )}
export default AB_Slider;
 