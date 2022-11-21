import BlockLoader from '../../../assets/images/loaders/Blocks-Loading/96x96.gif'  
import P256256 from '../../../assets/images/loaders/Bubble-Preloader/96x96.gif'  
import C256256 from '../../../assets/images/loaders/Curve-Loading/96x96.gif'  
import M256256 from '../../../assets/images/loaders/Message-Preloader/128x128.gif'  
import L23 from '../../../assets/images/loaders/loading-23.gif'  
import L37 from '../../../assets/images/loaders/loading-37.gif'  

import React from 'react'
import { Backdrop } from '@mui/material'
const M_Loader =(
    {
        variant='', 
        height='96px', 
    }) => 
        variant=='backdrop' ? 
            <Backdrop open={true} sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}>
                <img src={BlockLoader} height ={height}/>
            </Backdrop>
        :
        (variant == 'transparent'?
            <img
                style={{
                    position: 'fixed',
                    left: '45%',
                    top: '45%',
                    display: 'flex', 
                    width: '85px',
                    height: '85px',
                }} 
                src={BlockLoader}
            />
        : <img src={BlockLoader} height = {height}/>)        

M_Loader.propTypes = {
    //variant: PropTypes.oneOf(['backdrop','transparent','']).isRequired,
};
export default M_Loader;