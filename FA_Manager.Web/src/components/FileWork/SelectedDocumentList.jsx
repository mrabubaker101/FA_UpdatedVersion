import React from 'react'
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import FolderOpenRoundedIcon from '@mui/icons-material/FolderOpenRounded'; 
import Avatar from '@mui/material/Avatar'; 
import { Button } from '@mui/material';
import { CheckBox } from '@mui/icons-material';
const SelectedDocumentList = (props) => {
  let {ChoosenFiles,BusyState} = props  
  let css={
    'font-size':'xx-large'
  }
  return (
    <>
        {/* Simpler */}
        {/* {ChoosenFiles.map((file,index) => <h4 style={css} key={index}>{file.name}</h4>)} */} 
    <List disablePadding
      sx={{ width: '100%', maxWidth: '100%', 
      //bgcolor: 'lightgray'
     }}
      aria-label="contacts"
    >
      <ListItem disablePadding >
        <ListItemButton disabled={BusyState}>
          <ListItemIcon >
            <FolderOpenRoundedIcon fontSize='large'/>
          </ListItemIcon>
          <ListItemText primary="Files to be Upload : " secondary={Date()}/>
        </ListItemButton>
      </ListItem>
     <div style={{marginLeft:'40px'}}>
      {ChoosenFiles.map((file,i) => 
      <ListItem key={i} disablePadding  >
        <ListItemButton disabled={BusyState}> 
        <ListItemIcon>
            <Avatar sx={{ bgcolor: 'transparent' }} variant="rounded">
            {file.fileIcon}
            </Avatar>
        </ListItemIcon>
        <div style={{borderBottem:'dashed',fontSize: "x-large"}}>
         {file.name}
         <ListItemText secondary='Ready to upload' />
          </div>
        </ListItemButton>
      </ListItem>
    )}
    </div>
    </List> 
    </>
  )
}
export default SelectedDocumentList