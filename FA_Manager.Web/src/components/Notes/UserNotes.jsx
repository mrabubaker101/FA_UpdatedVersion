import { Button, Popover, Zoom } from '@mui/material'
import React,{useState} from 'react' 
import ShowNote from './ShowNote';
const UserNotes = () => {
const [anchorEl, setAnchorEl] = useState(null);
const handleClick = (event) => {
  setAnchorEl(event.currentTarget);
};
const handleClose = () => {
  setAnchorEl(null);
};
const open = Boolean(anchorEl);
  return (
    <div>
        <Button onClick={handleClick}>Open Popover</Button>
        <Popover 
            TransitionComponent={Zoom} 
            title='Important! Please do not store sensitive data like(Credit card informtion,etc)in notes.' 
            elevation={20}
            open={open}
            anchorEl={anchorEl}
            onClose={handleClose}
                anchorOrigin={{
                  vertical: 'center',
                  horizontal: 'right',
                }}
                transformOrigin={{
                  vertical: 'center',
                  horizontal: 'left',
                }}
            >
                <ShowNote 
                handleClose={handleClose}
                content={'Here Notes will show'}
                    />
            </Popover>
    </div>
  )
} 
export default UserNotes