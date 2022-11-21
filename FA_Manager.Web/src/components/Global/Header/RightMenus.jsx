import React, { Fragment } from 'react';
import { Avatar, Box, Divider, IconButton, ListItemIcon, ListItemText, Menu, MenuItem, MenuList, Tooltip } from '@mui/material';
import LogoutIcon from '@mui/icons-material/Logout';
import UserImage from '../../../assets/images/users/user.jpg'  
import { useNavigate } from 'react-router-dom';
import ManageAccountsSharpIcon from '@mui/icons-material/ManageAccountsSharp';
import AppSettingsAltSharpIcon from '@mui/icons-material/AppSettingsAltSharp';
import SettingsSuggestSharpIcon from '@mui/icons-material/SettingsSuggestSharp';
import HistorySharpIcon from '@mui/icons-material/HistorySharp';
const RightMenus = (props) => {
    const navigate = useNavigate()
    const {anchorElUser,setAnchorElUser} = props
    const menues=[
        {
            OnClick:()=>setAnchorElUser(null),
            Text:'Manage Account',
            Icon:<ManageAccountsSharpIcon />,
            Divider:false,
        },
        {
            OnClick:()=>setAnchorElUser(null),
            Text:'Application Settings',
            Icon:<AppSettingsAltSharpIcon />,
            Divider:false,
        },
        {
            OnClick:()=>setAnchorElUser(null),
            Text:'Histories',
            Icon:<HistorySharpIcon />,
            Divider:false,
        },
        {
            OnClick:()=>alert('you clicked Profile Setting'),
            Text:'Profile Settings',
            Icon:<SettingsSuggestSharpIcon />,
            Divider:false,
        },
        {
            OnClick:()=>navigate('/logout'),
            Text:'Logout',
            Icon:<LogoutIcon /> ,
            Divider:true,
        }       
    ] 
    return (
        <Box sx={{ flexGrow: 0 }}>
            <IconButton  onClick={(e)=>setAnchorElUser(e.currentTarget)}  sx={{ p: 0 }}   >
                <Avatar alt="user's avatar" src={UserImage} sx={{ width: 60, height: 60 }}/>
            </IconButton>

            <Menu
                sx={{ mt: '45px' ,height:'auto'}} 
                anchorEl={anchorElUser}
                anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
                open={Boolean(anchorElUser)}
                onClose={()=>setAnchorElUser(null)}
            > 
                    {/* Static or Dynamic Menues */}
                <MenuList dense > 
                    {menues.map((menu,ind) => (
                        <div key={ind}>
                            {menu.Divider && <Divider />}  
                            <MenuItem onClick={()=>menu.OnClick()}>
                                {menu.Icon && <ListItemIcon>{menu.Icon} </ListItemIcon> }
                                <ListItemText >{menu.Text}</ListItemText>
                            </MenuItem>
                        </div>
                    ))}
                </MenuList>  
            </Menu> 
        </Box>
    )
} 
export default RightMenus;