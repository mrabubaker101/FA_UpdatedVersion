import { Container, TextField } from '@mui/material'
 const ITextBox = ({
    helperText,
    disabled,
    placeholder,
    error,
    name,
    label,
    value,
    onChange,
    id,
    variant,
    color,size
})=> { 
    console.log(value);
  return (
      <Container> 
            <TextField
            size='medium' 
            variant={variant}
            color={color}
            id={id}
            error={error}
            disabled={disabled}
            fullWidth
            label={label}
            name={name}
            value={value} 
            onChange={onChange}
            placeholder={placeholder}
            helperText={helperText}
            /> 
      </Container>
  )
}
export default ITextBox;