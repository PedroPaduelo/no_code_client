
import React from 'react';
import { Grid } from '@mui/material';
import { CriaCamposTabelas } from './CriaCamposTabelas';
import { CriaTabelas } from './CriaTabelas';

import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';

import ModalCriaTabela from './ModalCriaTabela';
import ModalCriaFields from './ModalCriaFields';

export function Tabelas() {


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

          <ModalCriaTabela
            Icon={AddCircleOutlineIcon}
          />
          
        </Grid>

        <CriaTabelas/>
      </Grid>

      <Grid item xs={8}
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
          <p>Campos da tabela</p>
          <ModalCriaFields
            Icon={AddCircleOutlineIcon}
          />
        </Grid>



        <CriaCamposTabelas/>  
      </Grid>

    </Grid>
    
  );
}

