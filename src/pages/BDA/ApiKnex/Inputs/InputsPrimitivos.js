import React from "react";
import { Grid, InputBase, InputLabel, MenuItem, Select } from '@mui/material';
import { useController } from "react-hook-form";
import { alpha,  styled } from '@mui/system';



const Input = styled(InputBase)(({theme}) => ({
  '& .MuiInputBase-input': {
    borderRadius: 4,
    backgroundColor: theme.palette.mode === 'light' ? '#fcfcfb' : '#2b2b2b',
    border: '1px solid #ced4da',
    fontSize: 14,
    padding: '5px',
    transition: theme.transitions.create([
      'border-color',
      'background-color',
      'box-shadow',
    ]),
    '&:focus': {
      boxShadow: `${alpha(theme.palette.primary.main, 0.25)} 0 0 0 0.1rem`,
      borderColor: theme.palette.primary.main,
    }
  }
}));
const InputSelect = styled(Select)( ({ theme }) => ({
  '& .MuiSelect-select': {
    borderRadius: 4,
    backgroundColor: theme.palette.mode === 'light' ? '#fcfcfb' : '#2b2b2b',
    border: '1px solid #ced4da',
    fontSize: 14,
    padding: '3.5px',
    transition: theme.transitions.create([
      'border-color',
      'background-color',
      'box-shadow',
    ]),
    '&:focus': {
      boxShadow: `${alpha(theme.palette.primary.main, 0.25)} 0 0 0 0.1rem`,
      borderColor: theme.palette.primary.main,
    }
  }
}));




export const TextFieldCuston = ({
  label, 
  control, 
  nameFilde, 
  sxInput, 
  initialValues, 
  rules, 
  ...props
}) => {

  const {
    field: { onChange, onBlur, name, value, ref }
  } = useController({
    name: nameFilde,
    control,
    rules: { required: true },
    defaultValue: initialValues || '',
  });


  return (
    <Grid item {...props}>
      <InputLabel >
        {label || ''}
      </InputLabel>
      <Input 
        onChange={onChange} // send value to hook form 
        onBlur={onBlur} // notify when input is touched/blur
        value={value} // input value
        name={name} // send down the input name
        inputRef={ref} // send input ref, so we can focus on input when error appear
        sx={sxInput} // send down the input sx CSS
        fullWidth
      />
    </Grid>
  )
};

export const SelectFieldCuston = ({
  label, 
  control, 
  nameFilde, 
  sxInput,
  options, 
  ...props}
  ) => {

  const {
    field: { onChange, onBlur, name, value, ref }
  } = useController({
    name: nameFilde,
    control,
    rules: { required: true },
    defaultValue: "",
  });


  return (
    <Grid item {...props}>


      <InputLabel >
        {label || ''}
      </InputLabel>
      <InputSelect
        name={name} // send down the input name
        value={value} // input value
        onChange={onChange} // send value to hook form 
        onBlur={onBlur} // notify when input is touched/blur
        inputRef={ref} // send input ref, so we can focus on input when error appear
        input={<Input />}
        fullWidth
        
      >
        {
          options.map(item => {
            return (
              <MenuItem key={item.value} value={item.value}>{item.label}</MenuItem>
            )
          })
        }
      </InputSelect>


    </Grid>
  )
};








