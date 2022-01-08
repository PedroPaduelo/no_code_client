
import React, { memo } from 'react';

import { Controller } from "react-hook-form";

import { InputBase, Select, Typography } from '@mui/material';
import { alpha, Box, styled } from '@mui/system';



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


 function ImputText_m({control, lebel, nameField, flexDirection, widthLabel, widthinput, ...props }) {
  return (
    <Box
      sx={{ 
        display: 'flex',
        flexDirection: flexDirection,
      }}
    >
      <Typography variant="subtitle2"
        sx= { flexDirection !== "column" ?
          {
            width: widthLabel || "7rem",
            mt: '0.38rem',
          }
        :
          {
            width: '100%',
          }
        }
      >
        {lebel}
      </Typography>

      <Controller 
        control={control}
        name={nameField}
        render={({ field }) => 
        <Input 
          sdasd="dsfas"
          {...props}
          {...field} 
        />} 
      />


    </Box>
  );
}
 function ImputSelect_m({control, lebel, nameField, flexDirection, children, ...props }) {
  return (
    <Box
      sx={{ 
        display: 'flex',
        flexDirection: flexDirection,
      }}
    >
      <Typography variant="subtitle2" component="div"
        sx={{ 
          mr: "5px",
        }}
      >
        {lebel}
      </Typography>

      <Controller 
        control={control}
        name={nameField}
        render={({ field }) => 


        <InputSelect
          {...props}
          {...field} 
          input={<Input />}
        >
          {children}
        </InputSelect>


        } 
      />


    </Box>
  );
}
 function ImputMultiLine_m({control, lebel, nameField, flexDirection, ...props }) {
  return (
    <Box
      sx={{ 
        display: 'flex',
        flexDirection: flexDirection,
      }}
    >
      <Typography variant="subtitle2" component="div"
        sx={{ 
          mr: "5px",
          mt: "1px"
        }}
      >
        {lebel}
      </Typography>

      <Controller 
        control={control}
        name={nameField}
        render={({ field }) => 
        <Input 
          {...props}
          {...field} 
        />} 
      />
    </Box>
  );
}


 function ImputTextUnControler_m({lebel, nameField, flexDirection, widthLabel, ...props }) {

  return (
    <Box
      sx={{ 
        display: 'flex',
        flexDirection: flexDirection,
      }}
    >
      <Typography variant="subtitle2"

        sx= { flexDirection !== "column" ?
            {
              width: widthLabel || "7rem",
              mt: '0.38rem',
            }
          :
            {
              width: '100%',
            }
        }
        
      >
        {lebel}
      </Typography>

      <Input 
        {...props}
      />


    </Box>
  );
}
 function ImputSelectUnControler_m({lebel, nameField, flexDirection, widthLabel, widthinput, children, ...props }) {
  return (
    <Box
      sx={{ 
        display: 'flex',
        flexDirection: flexDirection,
      }}
    >
      <Typography variant="subtitle2"

        sx= { flexDirection !== "column" ?
            {
              width: widthLabel ,
              mt: '0.38rem',
            }
          :
            {
              width: '100%',
            }
        }
      >
        {lebel}
      </Typography>

      <InputSelect
        {...props}
        input={<Input sx={{ width: widthinput || "100%"}} />}
      >
        {children}
      </InputSelect>
    </Box>
  );
}
 function ImputMultiLineUnControler_m({lebel, nameField, flexDirection, ...props }) {
  return (
    <Box
      sx={{ 
        display: 'flex',
        flexDirection: flexDirection,
      }}
    >
      <Typography variant="subtitle2" component="div"
        sx={{ 
          mr: "5px",
          mt: "1px"
        }}
      >
        {lebel}
      </Typography>

      <Input 
        {...props}
      />
    </Box>
  );
}


export const ImputText = memo(ImputText_m);
export const ImputSelect = memo(ImputSelect_m);
export const ImputMultiLine = memo(ImputMultiLine_m);
export const ImputTextUnControler = memo(ImputTextUnControler_m);
export const ImputSelectUnControler = memo(ImputSelectUnControler_m);
export const ImputMultiLineUnControler = memo(ImputMultiLineUnControler_m);