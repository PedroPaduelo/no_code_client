
import React from 'react';
import { Grid } from '@mui/material';
import { ImputTextUnControler } from '../../../components/Inputs/InputCustom';
import ListTabelas from './ListTabelas';

export function CriaTabelas() {

  return ( 
    <Grid item xs={12}
      sx={{ 
        pt: 1,
        borderTop: '1px solid #ccc',
      }}
    >
     
      <Grid item xs={12}
      >

        <ImputTextUnControler 
          lebel="Busca Tabela"
          flexDirection="column"
          sx={{ 
            width: "100%",  
            mb: 2,
          }}            
        />

      </Grid>

      <Grid item xs={12}
        sx={{
          overflowY: 'auto',
          overflowX: 'hidden',
        }}
      >
        <ListTabelas/>
      </Grid>

    </Grid>
    
  );
}

