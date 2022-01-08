
import React from 'react';
import { Grid } from '@mui/material';
import ListTabelas from './ListTabelas';
import { ImputTextUnControler } from '../../../components/Inputs/InputCustom';

export function ViewTabelas() {

  return ( 
    <Grid item xs={12}
      sx={{ 
        pt: 1,
        borderTop: '1px solid #ccc',
      }}
    >
      <Grid item xs={12}
        sx={{ 
          justifyContent: 'start',
          
        }}
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

