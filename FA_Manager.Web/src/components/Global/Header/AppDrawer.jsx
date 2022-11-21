import { Box, Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Paper, Toolbar } from '@mui/material';
import MailIcon from '@mui/icons-material/Mail';
import InboxIcon from '@mui/icons-material/Inbox'; 
import {  Link } from "react-router-dom"; 

const AppDrawer = (props) => {
    const {mobileOpen,setMobileOpen,drawerWidth} = props
     const menues=[
      {Name:'Add Vendor',url:'/NewVendor'},
      {Name:'Drafts',url:'/drafts'},
      {Name:'Starred',url:'/starred'},
      {Name:'Inbox',url:'/inbox'},
      {Name:'Send email',url:'/sendemail'},
    ]
    const drawer = (
        <div> 
        <Toolbar />
        <Box sx={{ overflow: 'auto' }} ele>
          <List dense>
            {menues.map((menu, index) => (
              <ListItem key={menu.Name} disablePadding>
                <ListItemButton component={Link} to={menu.url} >
                  <ListItemIcon >
                    {index % 2 === 0 ? <InboxIcon fontSize='small' /> : <MailIcon fontSize='small'/>}
                  </ListItemIcon>
                  <ListItemText primary={menu.Name} />
                </ListItemButton>
              </ListItem>
            ))}
          </List> 
          </Box>
        </div>
      );
    return (
        <Box sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 }}}> 
            <Drawer   
                variant='temporary'
                open={mobileOpen}
                onClose={()=>setMobileOpen(!mobileOpen)}
                sx={{ 
                  '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                }} 
            >
                {drawer}
            </Drawer> 
        </Box>   
    );
}
export default AppDrawer;