
import React from 'react';
import { Grid } from '@mui/material';
import BDA from './BDA';
import { BDProvider } from '../../Context/BDContext';
import { TabelasProvider } from '../../Context/DB/TabelasContext';



export function BancoDeDados() {

  return ( 
    <Grid item xs={12}
      sx={{ 
        justifyContent: 'center',
        alignItems: 'center',
        display: 'flex',
      }}
    >
      <Grid item xs={12}
        sx={{ 
          maxWidth: "1250px",
        }}
      >

        <BDProvider>
          <TabelasProvider>
            <BDA />
          </TabelasProvider>
        </BDProvider>
      </Grid>
    </Grid>
  );
}

