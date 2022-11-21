import {useState} from 'react';
import {AppBar,Box,Toolbar,Typography,Menu,Container,Button,MenuItem,Paper,IconButton, Stack, List, ListItem, ListItemButton, ListItemIcon, ListItemText, AvatarGroup, Avatar, Grid, ImageList, ImageListItem, Divider, ListItemAvatar, BottomNavigation, BottomNavigationAction} from '@mui/material';
import IssueCheck from '../IssuePayments/IssueCheck';  
import WidgetsIcon from '@mui/icons-material/Widgets'; 
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import RightMenus from '../Global/Header/RightMenus';
import AppDrawer from '../Global/Header/AppDrawer';
import AppBreadCrumbs from '../Global/Breadcrumbs/AppBreadCrumbs';
import MenuOpenSharpIcon from '@mui/icons-material/MenuOpenSharp';
import { Outlet} from 'react-router';
import BasePage from '../Layouts/BasePage';
import { AccountBox, Article, Group, Home, ModeNight, Person, Settings, Storefront } from '@mui/icons-material';

  
const drawerWidth = 220;
const pages = ['Products',   'Blog'];

const MainAppBar = (props) => {   
  const {token,setToken} =props
    const [anchorElNav, setAnchorElNav] = useState(null);
    const [anchorElUser, setAnchorElUser] = useState(null);
    const [mobileOpen, setMobileOpen] = useState(false);

    //AB
    const [IsOnForum, setIsOnForum] = useState(false);

  // const darkTheme = createTheme({
  //   palette: {
  //     mode: mode,
  //   },
  // });
  
    const handleOpenNavMenu = (event) => {
      setAnchorElNav(event.currentTarget);
    }; 
    const handleCloseNavMenu = () => {
      setAnchorElNav(null);
    }; 
    
    //For drawer

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
      };
      
    return (  
      
    <Box sx={{ display: 'flex' }}  >     
      <AppBar  
        position="fixed"
        sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
      > 
        <Container  > 
            <Toolbar  disableGutters>  
            
            
            <IconButton
              color="inherit"  
              onClick={()=>setMobileOpen(!mobileOpen)}
              sx={{ mr: 2  }}
            >
                <MenuOpenSharpIcon />
          </IconButton>   



          <Typography
              variant="h6"
              noWrap
              component="a"
              href="/"
              sx={{
                mr: 2,
                display: { xs: 'none', md: 'flex' },
                fontFamily: 'monospace',
                fontWeight: 700,
                //fontStyle:'oblique',
                letterSpacing: '.3rem',
                color: 'inherit',
                textDecoration: 'none',
              }}
            >
              Financial Accounting
          </Typography>

 
          {/* Hidden Menu for left side , This Menu will show when screen is sx  */}
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
              >
                  <WidgetsIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'left',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'left',
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: 'block', md: 'none' },
                }}
              >
                {pages.map((page) => (
                  <MenuItem key={page} onClick={handleCloseNavMenu}>
                    <Typography textAlign="center">{page}</Typography>
                  </MenuItem>
                ))}
              </Menu>
          </Box>

          {/* Hidden Text for App , This will show when screen is sx  */} 
          <Typography
              variant="h5"
              noWrap
              component="a"
              href=""
              sx={{
                mr: 2,
                display: { xs: 'flex', md: 'none' },
                flexGrow: 1,
                fontFamily: 'monospace',
                fontWeight: 700,
                letterSpacing: '.3rem',
                color: 'inherit',
                textDecoration: 'none',
              }}
            >
              FA Manager
            </Typography>

 
              {/* Always Visible until screen size will becom xs */}
            <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
              {pages.map((page) => (
                <Button
                  key={page}
                  onClick={handleCloseNavMenu}
                  sx={{ my: 2, color: 'white', display: 'block' }}
                >
                  {page}
                </Button>
              ))}
            </Box>


              {/* Right Menus always show */}
            <RightMenus 
                //send compulsory states
                anchorElUser={anchorElUser}
                setAnchorElUser={setAnchorElUser}

                //send all props that are comming from top parent series 
                {...props}
            />

            
            </Toolbar> 
        </Container>
      </AppBar> 
  

        <Container  sx={{marginTop:2}} >
           
      {/* Drawer */}
      <AppDrawer 
        mobileOpen={mobileOpen} 
        setMobileOpen={setMobileOpen}
        drawerWidth={drawerWidth}
      />
 
            {/* BreadCumbs */} 
            <br /> <AppBreadCrumbs/><br />

 {!IsOnForum ?            
            <Container component={Paper} elevation={5}   
                style={{
                boxShadow:'3px 0px 15px -5px navy', 
                borderRadius:'0px 10px 0px 10px'
              }}
            >
              {/* General Routing  */}
              <BasePage token={token} setToken={setToken}/>
            </Container>

:
 //Social forum with another layout
//  <ThemeProvider theme={darkTheme}>
<Box sx={{ flexGrow: 1 }}>
<Grid container spacing={3} >
  <Grid item xs >
    {/* LEFT SIDE */}
    <Box flex={1} p={2} sx={{ display: { xs: "none", sm: "block" } }}>
      <Box position="fixed"  >
        <List>
          <ListItem disablePadding>
            <ListItemButton component="a" href="#home">
              <ListItemIcon>
                <Home />
              </ListItemIcon>
              <ListItemText primary="Homepage" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component="a" href="#simple-list">
              <ListItemIcon>
                <Article />
              </ListItemIcon>
              <ListItemText primary="Pages" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component="a" href="#simple-list">
              <ListItemIcon>
                <Group />
              </ListItemIcon>
              <ListItemText primary="Groups" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component="a" href="#simple-list">
              <ListItemIcon>
                <Storefront />
              </ListItemIcon>
              <ListItemText primary="Marketplace" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component="a" href="#simple-list">
              <ListItemIcon>
                <Person />
              </ListItemIcon>
              <ListItemText primary="Friends" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component="a" href="#simple-list">
              <ListItemIcon>
                <Settings />
              </ListItemIcon>
              <ListItemText primary="Settings" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component="a" href="#simple-list">
              <ListItemIcon>
                <AccountBox />
              </ListItemIcon>
              <ListItemText primary="Profile" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component="a" href="#simple-list">
              <ListItemIcon>
                <ModeNight />
              </ListItemIcon>
              {/* <Switch onClick={e=>setMode(mode === "light" ? "dark" : "light")}/> */}
              {/* <Switch onClick={e=>setMode(mode === "light" ? "dark" : "light")}/> */}
            </ListItemButton>
          </ListItem>
        </List>
      </Box>  
    </Box>
   </Grid>

  <Grid item xs={6}> 
     <BasePage token={token} setToken={setToken}/> 
  </Grid>
  
  <Grid item xs>
  <Box flex={2} p={2} sx={{ display: { xs: "none", sm: "block" } }}>
      <Box position="fixed" width={300}>
      <Typography variant="h6" fontWeight={100}>
          Online Friends
        </Typography>
        <AvatarGroup max={7}>
          <Avatar
            alt="Remy Sharp"
            src="https://material-ui.com/static/images/avatar/1.jpg"
          />
          <Avatar
            alt="Travis Howard"
            src="https://material-ui.com/static/images/avatar/2.jpg"
          />
          <Avatar
            alt="Cindy Baker"
            src="https://material-ui.com/static/images/avatar/3.jpg"
          />
          <Avatar alt="Agnes Walker" src="" />
          <Avatar
            alt="Trevor Henderson"
            src="https://material-ui.com/static/images/avatar/6.jpg"
          />
          <Avatar
            alt="Trevor Henderson"
            src="https://material-ui.com/static/images/avatar/7.jpg"
          />
          <Avatar
            alt="Trevor Henderson"
            src="https://material-ui.com/static/images/avatar/8.jpg"
          />
          <Avatar
            alt="Trevor Henderson"
            src="https://material-ui.com/static/images/avatar/7.jpg"
          />
          <Avatar
            alt="Trevor Henderson"
            src="https://material-ui.com/static/images/avatar/8.jpg"
          />
        </AvatarGroup>
        <Typography variant="h6" fontWeight={100} mt={2} mb={2}>
          Latest Photos
        </Typography>
        <ImageList cols={3} rowHeight={100} gap={5}>
          <ImageListItem>
            <img
              src="https://material-ui.com/static/images/image-list/breakfast.jpg"
              alt=""
            />
          </ImageListItem>
          <ImageListItem>
            <img
              src="https://material-ui.com/static/images/image-list/burgers.jpg"
              alt=""
            />
          </ImageListItem>
          <ImageListItem>
            <img
              src="https://material-ui.com/static/images/image-list/camera.jpg"
              alt=""
            />
          </ImageListItem>
        </ImageList>
        <Typography variant="h6" fontWeight={100} mt={2}>
          Latest Conversations
        </Typography>
        <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Remy Sharp" src="https://material-ui.com/static/images/avatar/3.jpg" />
        </ListItemAvatar>
        <ListItemText
          primary="Brunch this weekend?"
          secondary={
            <>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                Ali Connors
              </Typography>
              {" — I'll be in your neighborhood doing errands this…"}
            </>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
        </ListItemAvatar>
        <ListItemText
          primary="Summer BBQ"
          secondary={
            <>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                to Scott, Alex, Jennifer
              </Typography>
              {" — Wish I could come, but I'm out of town this…"}
            </>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
        </ListItemAvatar>
        <ListItemText
          primary="Oui Oui"
          secondary={
            <>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                Sandra Adams
              </Typography>
              {' — Do you have Paris recommendations? Have you ever…'}
            </>
          }
        />
      </ListItem>
    </List>

      </Box>
    </Box>
  </Grid>

</Grid>
</Box>
// </ThemeProvider>


}

{/* FOOTER */}
    <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={9}>
        <BottomNavigation showLabels >
          {/* <BottomNavigationAction label="Recents"  /> */}
          <h5>{Date()}</h5>
         </BottomNavigation>
        </Paper> 
    </Container>  
 

    </Box> 
    );
}
export default MainAppBar;