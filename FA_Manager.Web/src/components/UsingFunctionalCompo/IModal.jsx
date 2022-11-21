import { Button, Container, Dialog, DialogActions, DialogContent, DialogTitle } from '@mui/material'
import React  from 'react'

const IModal =(
    {
        Heading,Content,open,Closer,
        AllowedSecond,secOpen,setSecOpen,
        AllowedThird,ThirdOpen,setThirdOpen
    }) => { 
 
    //functions ko yahan just put karna hy q k bahar se ()=> kar k andar bheja gaya h
  return (
    <Dialog 
    open={open} 
    onClose={()=>Closer(false)} 
    fullWidth
    draggable={true}
    //fullScreen
    >
        <DialogTitle>{Heading}</DialogTitle> 
        <DialogContent>{Content}</DialogContent>
        

        {/* 2nd Child */}
        {AllowedSecond==true ?
        
        <Container>
        <Button onClick={()=>setSecOpen(true)}>Open Details</Button> 
            <Dialog 
                open={secOpen} 
                onClose={()=>setSecOpen(false)} 
            >
                <DialogTitle>{"This is 2nd Child. "+Heading}</DialogTitle> 
                <DialogContent>{Content}</DialogContent>
                {["Apple","Mango","Banana"].map((ind,da)=>{ <Button>Browse_ </Button> })}                
                
                
                {AllowedThird==true ? 
                    <Container>
                        <h3>Opening more companies</h3>
                        <Button onClick={()=>setThirdOpen(true)}>Show Details </Button> 
                        <Dialog 
                            open={ThirdOpen} 
                            onClose={()=>setThirdOpen(false)} 
                        >
                            <DialogTitle>{"This is 3rd Child. "+Heading}</DialogTitle> 
                            <DialogContent>{Content}</DialogContent>
                        <h1>WELCOME</h1>
                            <DialogActions>
                            <Button onClick={()=>setThirdOpen(false)}>Close Third Child</Button>
                            </DialogActions>
                        </Dialog >
                    </Container>:null}
                
                
                <DialogActions>
                <Button onClick={()=>setSecOpen(false)}>Close Second Child</Button>
                </DialogActions> 
            </Dialog>  
        </Container>:   null}

        <DialogActions>
            <Button onClick={()=>Closer(false)}>Close Parent</Button>
        </DialogActions> 
            {/* End of 2nd Child */}
 
     
    </Dialog> 
  )
}
export default IModal