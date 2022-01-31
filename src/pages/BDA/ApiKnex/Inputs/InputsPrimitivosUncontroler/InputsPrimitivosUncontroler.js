import React from "react";
import { Grid, InputBase, InputLabel, MenuItem, Select } from '@mui/material';
import { alpha, styled } from '@mui/system';



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




export const TextFieldCustonUncontrole = ({
  label, 
  nameFilde, 
  sxInput, 
  
  onChange,
  value,

  ...props
}) => {


  return (
    <Grid item {...props}>
      <InputLabel >
        {label || ''}
      </InputLabel>
      <Input 
        onChange={onChange} // send value to hook form 
        value={value} // input value
        name={nameFilde} // send down the input name
        sx={sxInput} // send down the input sx CSS
        fullWidth
      />
    </Grid>
  )
};

export const SelectFieldCustonUncontrole = ({
  label, 
  nameFilde, 
  sxInput, 
  
  onChange,
  value,

  options, 
  ...props}
  ) => {


  return (
    <Grid item {...props}>


      <InputLabel >
        {label || ''}
      </InputLabel>
      <InputSelect
        onChange={onChange} // send value to hook form 
        value={value} // input value
        name={nameFilde} // send down the input name
        sx={sxInput} // send down the input sx CSS
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








