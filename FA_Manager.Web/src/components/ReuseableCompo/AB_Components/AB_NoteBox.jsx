import { CloseSharp } from '@mui/icons-material';
import { Box, Button, FormControl, IconButton, InputLabel, MenuItem, Select, TextareaAutosize, TextField } from '@mui/material'
import React ,{useState}from 'react'
const AB_NoteBox = (props) => {
    let {content,handleClose}=props

    const FontSizes = Array.from({length: 72}, (_, i) => i + 1);
    const [fontSize, setfontSize] = useState(17)
    const [Notecontent, setNotecontent] = useState('')
  return (
    <Box 
    sx={{
       m:2,
       maxHeight:'280px',
       width:'400px',
       overflowY:'hidden'
   }}
   >
    <div style={{display:'flex'}}>
    <b>The content of the Popover.The content of the Popover.</b>
    <IconButton size='small' onClick={handleClose}> 
        <CloseSharp />
    </IconButton>
    </div>
    
    <TextField
          multiline
          placeholder='Type notes...' 
          rows= {fontSize>30?3 : 8} 
          value={Notecontent}
          fullWidth
          variant="filled"
          inputProps={{style: {fontSize: fontSize+'px',lineHeight:fontSize+'px'}}} // font size of input text
          //InputLabelProps={{style: {fontSize: 40}}} // font size of input label
          onChange={(e)=>setNotecontent(e.target.value)}
    />
    <hr />
    <div>
    <FormControl size='small' sx={{minWidth:'100px'}}>
    <InputLabel >Font Size</InputLabel>
    <Select size='small' label="Font Size" style={{height:'32px',marginRight:'5px'}}
    value={fontSize}
    onChange={(e)=>setfontSize(e.target.value)}
      >
        { FontSizes.map(val=><MenuItem dense key={val} value={val}>{val}</MenuItem>) }
  </Select>
  </FormControl>
    <Button variant='contained' size='small' color='secondary' >DateTime Stamp</Button>
    <Button variant='contained' size='small' color='secondary' sx={{float:'right'}}>Save</Button>
    </div>     
   </Box>
  )
}

export default AB_NoteBox