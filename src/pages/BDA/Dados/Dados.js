
import React from 'react';
import { Grid } from '@mui/material';
import { ViewTabelas } from './ViewTabelas';
import { ViewDadosTabela } from './ViewDadosTabela';



export function Dados() {


  return ( 
    <Grid item xs={12}
      sx={{ 
        display: 'flex',
      }}
    >

      <Grid item xs={4}
        sx={{
          pl: 1,
          pr: 1,
        }}
      >
        <Grid item xs={12}
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <p>Tabelas</p>
          
        </Grid>

        <ViewTabelas/>
      </Grid>

      <Grid item xs={8}
        sx={{
          pl: 1,
          pr: 1,
        }}
      >

        <Grid item xs={12}
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            
          }}
        >
          <p>Dados da tabela</p>
        </Grid>

        <ViewDadosTabela />
 
      </Grid>

    </Grid>
    
  );
}

