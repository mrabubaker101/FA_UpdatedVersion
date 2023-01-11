import { Button, Slide } from '@mui/material'
import React, {  useState } from 'react'
import UserNotes from '../../Notes/UserNotes'
import AB_PopOver from '../AB_Components/AB_PopOver'
import WarningDialoge from '../AB_Controls/WarningDialoge'
import AB_Modal from '../AB_Modal'
import PrintPage from './../Printing/PrintPage';
 
const MainComp = () => {

    const [openDialog, setopenDialog] = useState(true)
    const [DialogTitle, setDialogTitle] = useState('')
    const [DialogType, setDialogType] = useState('Information')
    const [PrintModal, setPrintModal] = useState(false)

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
        
        <WarningDialoge
            Heading={DialogTitle}
            open={openDialog} 
            Closer={setopenDialog} 
            Content={`Are you sure you want to delete this record `}
            Type={DialogType}
        />
        <hr />
        <h5>Global Popup Notes </h5>
        <UserNotes />
        <hr />
        <AB_PopOver content={'HELLO THERE'} title={'sample directions'}/>
        <hr /><br />

        Printing Documents <br />
        <Button onClick={()=>setPrintModal(true)}>Open</Button>
 
        
         <PrintPage 
         open={PrintModal}
         Closer ={setPrintModal}/>
         
        <hr /><br />
        Next Component...
        <hr />
        <br /> 
    </div>
  )
}

export default MainComp