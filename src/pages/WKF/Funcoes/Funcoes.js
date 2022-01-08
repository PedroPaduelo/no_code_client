import { Grid } from '@mui/material';
import React from 'react';
import Zoom from '@mui/material/Zoom';
import { FuncoesContainerHeader } from '../../../components/Funcoes/FuncoesContainerHeader';
import { FuncoesCards } from '../../../components/Funcoes/FuncoesCards';

export function Funcoes({openFn, sopenFn}) {

  return (  
    <Zoom in={openFn}>
      <Grid item xs={12}>

        <FuncoesContainerHeader sopenFn={sopenFn}/>

        <FuncoesCards/>

      </Grid>
    </Zoom>
  );
}

