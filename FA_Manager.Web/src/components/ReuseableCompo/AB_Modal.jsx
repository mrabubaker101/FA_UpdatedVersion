import { Button,  Dialog, DialogActions, DialogContent, DialogTitle } from '@mui/material' 

const AB_Modal=(props)=> {
let{ Heading,Content,open,Closer,children,BusyState=false}=props 
  return (
    <Dialog 
    open={open} 
    onClose={()=>Closer(false)} 
    fullWidth 
//    fullScreen
    maxWidth='md'
    //scroll='body'
    > 
        <u><DialogTitle>{Heading}</DialogTitle></u>
        {Content?.Length > 0 ?<DialogContent>{Content}</DialogContent>:null} 
        {/* Render Modal's HTML that passed from outside */}
         
        {children}
         
        <DialogActions>
             <Button variant='outlined' color='primary' disabled={BusyState} onClick={()=>Closer(false)}>Close</Button>
        </DialogActions>   
    </Dialog> 
  )
} 
export default AB_Modal; 