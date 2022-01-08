import React from 'react';


import { Grid } from '@mui/material';
import { CriaNameAndSelectTable } from '../../../../Dados/CriaNameAndSelectTable';
import { CriaContexData } from '../../../../Dados/CriaContexData';











export function DadosInsert({control, watch}) {



  return (
    <Grid 
      sx={{ 
        border: "1px solid #e0e0e0",
        borderRadius: "5px",
        backgroundColor: "#fafafa",
        mt: '20px',
        p: '10px',
      }}
    >

      <CriaNameAndSelectTable
        control={control}
        watch={watch}
      />
    
      <CriaContexData
        control={control}
      />

    </Grid>
  );
}

