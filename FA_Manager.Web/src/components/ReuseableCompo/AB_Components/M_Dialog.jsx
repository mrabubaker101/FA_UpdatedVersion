import { Button,  Dialog, DialogActions, DialogContent, DialogTitle } from '@mui/material'
import React  from 'react'
const M_Dialog =({ 
    Heading,Content,open,Closer,childern,ApplyHandler
}) => {
    //functions ko yahan just put karna hy q k bahar se ()=> kar k andar bheja gaya h
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
export default M_Dialog