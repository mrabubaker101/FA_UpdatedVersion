import { Breadcrumbs, Link, Typography } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import WhatshotIcon from '@mui/icons-material/Whatshot';
import GrainIcon from '@mui/icons-material/Grain';    
const AppBreadCrumbs = () => {
     
    function handleClick(event) {
        event.preventDefault();
        console.info('You clicked a breadcrumb.'+event.target);
    }
    
    return (
        <Breadcrumbs aria-label="breadcrumb">
            <Link color="inherit" href="/avc" onClick={handleClick} >
                <HomeIcon sx={{height:20,width:20}}/>Material-UI
            </Link>
            
            <Link color="inherit" href="/another/" onClick={handleClick} >
                <WhatshotIcon/> Core
            </Link>

            <Typography color="textPrimary"  >
                <GrainIcon  />
                Breadcrumb
            </Typography>
        </Breadcrumbs>
    );
} 
export default AppBreadCrumbs;