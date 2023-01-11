import { Button, Container, Popover, Zoom } from '@mui/material'
import React,{useState} from 'react'
import PropTypes from 'prop-types'


const AB_PopOver =({title,content})=> { 
    const [anchorEl, setAnchorEl] = useState(null);
    const handleClick = (event) => setAnchorEl(event.currentTarget)
    const handleClose = () => setAnchorEl(null);
    const open = Boolean(anchorEl);
     return (<>
        <Button onClick={handleClick}>Open Popover</Button>
        <Popover 
            TransitionComponent={Zoom}
            transitionDuration={100} 
            title={title} 
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
            <Container>{content}</Container>
        </Popover>
    </>
  )
}
AB_PopOver.propTypes={
    content :  PropTypes.element.isRequired,
    title:PropTypes.string
}
export default AB_PopOver
