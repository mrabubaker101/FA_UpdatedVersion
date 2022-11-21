import { Dialog, DialogTitle, Grow, List, ListItem, ListItemText } from '@mui/material'
import React from 'react'

const AB_SelectionDialoge = ({title,data,open,onClose,defaultState=''}) => {
  return (
      <>
      <Dialog
        fullWidth
        maxWidth='xs'
        open={open}
        onClose={()=>onClose}
        aria-labelledby="simple-dialog-title"
        >
    <DialogTitle id="simple-dialog-title">{title}</DialogTitle>
    <List dense>
      {data.map((item,ind) => (
          <ListItem
          button
          onClick={() => onClose(item)}
          key={ind}
          >
          <ListItemText primary={item} />
        </ListItem>
      ))}
    </List>
  </Dialog>
      </>
  )
}

export default AB_SelectionDialoge