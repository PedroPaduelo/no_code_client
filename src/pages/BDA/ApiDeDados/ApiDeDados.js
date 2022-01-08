
import React from 'react';
import { Grid } from '@mui/material';
import { ViewDadosTabela } from './ViewDadosTabela';



export function ApiDeDados() {


  return ( 
    <Grid item xs={12}
      sx={{ 
        display: 'flex',
      }}
    >
      <Grid item xs={12}
        sx={{
          pl: 1,
          pr: 1
        }}
      >

        <Grid item xs={12}
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <p>Api de dados ( CRUD )</p>
        </Grid>

        <ViewDadosTabela />
 
      </Grid>

    </Grid>
    
  );
}

