import { Button,  Dialog, DialogActions, DialogContent, DialogTitle, IconButton, Slide } from '@mui/material'
import React, { forwardRef } from 'react'
import CloseIcon from '@mui/icons-material/Close';
import PropTypes from 'prop-types';
import WarningIcon from '@mui/icons-material/Warning';
import ReportIcon from '@mui/icons-material/Report';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import DoneOutlineRoundedIcon from '@mui/icons-material/DoneOutlineRounded';
//for transitions effect
const TransitionSlide = forwardRef(function Transition(props, ref) { 
    return <Slide direction="up" ref={ref} {...props} />;
  });
  
const WarningDialoge = ({ 
    Heading,Content,open,Closer,Type,childern,ApplyHandler
}) => {
    const typeColor = Type => {
      switch (Type.toUpperCase()) {
        case 'INFORMATION':
          return 'darkblue'
        case 'ERROR':
          return '#B21807';
        case 'WARNING':
          return '#ff8400'
        case 'SUCCESS':
          return 'green'
        default:
          return 'darkblue'
      } 
    } ;
    const IconsStyle ={
      marginRight: '8px',
      marginLeft: '-10px', 
      alignSelf:'center '
    }
    const typeIcon = Type => {
      switch (Type.toUpperCase()) {
        case 'INFORMATION':
          return <ErrorOutlineIcon color='info' fontSize='large' style={IconsStyle} />
        case 'ERROR':
          return <ReportIcon color='error' fontSize='large' style={IconsStyle}/> ;
        case 'WARNING':
          return <WarningIcon color='warning' fontSize='large' style={IconsStyle}/>
        case 'SUCCESS':
          return <DoneOutlineRoundedIcon color='success' fontSize='large' style={IconsStyle} />
        default:
          return <ErrorOutlineIcon color='info' fontSize='large' style={IconsStyle}/>
      } 
    } ;
    const color = typeColor(Type);
    const Icon = typeIcon(Type);
    const corner ={
      borderRight:`solid 4px ${color}`,
      borderLeft:`solid 4px ${color}`,
    }
   
  return (   
    <Dialog
     open={open} 
    onClose={()=>Closer(false)} 
    maxWidth='sm' //md,lg,xl always work with fullwidth 
    fullWidth
     
    //fullScreen
    //for transition effect
    TransitionComponent={TransitionSlide}
    //hideBackdrop
    //keepMounted
    >
        <DialogTitle 
        sx={{...corner, 
            borderTop:`solid 4px ${color}}`, 
            borderBottom:`solid 1px ${color}`,
            }}
            >
            {Heading}
            {Closer ? 
            <IconButton
          aria-label="close"
          onClick={()=>Closer(false)}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            //color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>:null}
        </DialogTitle> 
        {Content?.length > 0 ?
        <DialogContent dividers 
          sx={{
             ...corner,
              borderBottom:`solid 1px ${color}`, 
          }}
          > 
          <div style={{ display:'inline-flex',}}>
          {Icon} 
          {/* <div style={{display:'inline-flex',verticalAlign:'top'}}> */}
            {Content}
          </div> 
        </DialogContent>
        :null
        }
         
        {/* Render Modal's HTML that passed from outside */}
        
        {childern}
        
        <DialogActions
                sx={{ 
                    ...corner, 
                    borderBottom:`solid 4px ${color}`,  
                }}
        >
            <Button variant='outlined' color='success' onClick={()=>ApplyHandler()}>Apply</Button>
            <Button variant='outlined' color='warning' onClick={()=>Closer(false)}>Cancel</Button>
        </DialogActions>   
    </Dialog>   
  )
}

export default WarningDialoge;
WarningDialoge.propTypes={
  open:PropTypes.bool.isRequired,
  Closer:PropTypes.func.isRequired,
  Type:PropTypes.string.isRequired
}
 