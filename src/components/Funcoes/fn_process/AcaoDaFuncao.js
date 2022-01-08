import React from 'react';
import { useForm } from 'react-hook-form';

import { Grid } from '@mui/material';

import { DadosInsert } from './Processos/DadosInsert/DadosInsert';


export default function AcaoDaFuncao() {


  const { control , watch} = useForm({
    defaultValues: {}
  });



  return (
    <Grid item xs={12}
      sx={{ 
        border: '1px solid #e0e0e0',
        borderRadius: '5px',
        padding: '10px',
        mt: '25px'
      }}
    >

    
      <DadosInsert control={control} watch={watch}/>

    </Grid>
  );
}