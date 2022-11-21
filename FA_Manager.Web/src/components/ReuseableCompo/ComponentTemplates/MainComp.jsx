import { Button, Slide } from '@mui/material'
import React, {  useState } from 'react'
import WarningDialoge from '../AB_Controls/WarningDialoge'
 
const MainComp = () => {

    const [openDialog, setopenDialog] = useState(true)
    const [DialogTitle, setDialogTitle] = useState('')
    const [DialogType, setDialogType] = useState('Information')
    const HandelDialog=(title)=>{
        setopenDialog(true)
        setDialogTitle(title)
        //I just take same name 
        setDialogType(title)
    }
  return (
    <div>
        <h4>Listing all Useable components</h4><hr />
        <h5>Dialogs</h5>
        <ul> 
            <li><Button onClick={()=>HandelDialog('warning')}>Warning</Button> </li>
            <li><Button onClick={()=>HandelDialog('success')}>Success</Button></li>
            <li><Button onClick={()=>HandelDialog('error')}>Error</Button></li>
            <li><Button onClick={()=>HandelDialog('information')}>Information</Button></li>
        </ul>
        <br /><br/>


        <WarningDialoge
            Heading={DialogTitle}
            open={openDialog} 
            Closer={setopenDialog} 
            Content={`Are you sure you want to delete this record `}
            Type={DialogType}
        />
    </div>
  )
}

export default MainComp