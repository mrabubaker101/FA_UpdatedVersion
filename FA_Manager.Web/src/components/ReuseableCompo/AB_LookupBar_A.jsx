import * as React from 'react';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import SearchIcon from '@mui/icons-material/Search';
import { Tooltip } from '@mui/material';
const MyLookupBar = ({
  OnLookupClick,
  fullWidth,
  disabled,
  label,
  value,
  size ='small',
  tooltip,
})=> {        
      return (
        <Box >
          <Tooltip title={tooltip} placement="top-end" arrow>              
            <FormControl  disabled={disabled} fullWidth={fullWidth} sx={{ m: 0 }} size={size} >
              <InputLabel sx={{fontVariantCaps:'all-petite-caps'}}>{label}</InputLabel>
              <OutlinedInput autoFocus readOnly margin='dense' 
                value={value}
                endAdornment={ 
                  <InputAdornment position="end" >
                      <IconButton edge="end" disabled={disabled} onClick={OnLookupClick} >
                        <SearchIcon  color='secondary' fontSize='large' /> 
                    </IconButton>
                  </InputAdornment>
                }
                label={label}
              />
            </FormControl> 
            </Tooltip>
        </Box>
      );
    } 
export default  MyLookupBar;

