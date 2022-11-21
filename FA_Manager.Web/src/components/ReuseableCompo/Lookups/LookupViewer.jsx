import React from 'react'
import { Button,  Dialog, DialogActions, DialogContent, DialogTitle } from '@mui/material'
const LookupViewer = ({ 
    data,Heading,Content,open,Closer,childern,ApplyHandler
}) => {
  return (
    <Dialog 
    open={open} 
    onClose={()=>Closer(false)} 
    maxWidth='md' //md,lg,xl always work with fullwidth 
    fullWidth 
    //fullScreen
    >
        <DialogTitle>{Heading}</DialogTitle>
        {Content?.Length > 0 ?<DialogContent>{Content}</DialogContent>:null} 
        {/* Render Modal's HTML that passed from outside */}

        {childern}
        
        <DialogActions>
            <Button variant='outlined' color='success' onClick={()=>ApplyHandler()}>Apply</Button>
            <Button variant='outlined' color='warning' onClick={()=>Closer(false)}>Cancel</Button>
        </DialogActions>   
    </Dialog> 
  )
}

export default LookupViewer