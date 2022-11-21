import React  from 'react';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import SearchIcon from '@mui/icons-material/Search';
const M_LookupBar = ({
    OnLookupClick,
    fullWidth,
    disabled,
    label,
    size ='small',
    IconColor='secondary',
    IconSize = 'large' ,
    variant ='outlined'
  }) => {
    const [values, setValues] = React.useState({
        amount: '',
        showPassword: false,
      }); 
      const handleChange = (prop) => (event) => {
        setValues({ ...values, [prop]: event.target.value });
      }; 
      return (
        <Box >              
            <FormControl
                disabled={disabled}
                fullWidth={fullWidth} 
                sx={{ m: 1 }} 
                variant={variant}  
                size={size} >
              <InputLabel >{label}</InputLabel>
              <OutlinedInput 
                margin='dense' 
                value={values.password}
                onChange={handleChange('password')}
                endAdornment={ 
                  <InputAdornment position="end" >
                      <IconButton 
                        edge="end" 
                        disabled={disabled} 
                        onClick={()=>OnLookupClick(true)} 
                        >
                        <SearchIcon color={IconColor} fontSize={IconSize} /> 
                    </IconButton>
                  </InputAdornment>
                }
                label={label}
              />
            </FormControl> 
        </Box>
      );
    }  
export default M_LookupBar

 

