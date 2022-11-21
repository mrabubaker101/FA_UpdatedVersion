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
    color
})=> { 
    console.log(value);
  return (
      <Container> 
            <TextField 
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