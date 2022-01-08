import { Grid, IconButton } from '@mui/material';
import React, { memo } from 'react';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import FuncoesCria from './FuncoesCria';


function FuncoesHeader({sopenFn}) {

  return (  
    <Grid item xs={12}
      sx={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        mt: 1,
      }}
    >

      <Grid item xs={8}>
        <p>Criar Funções</p>
      </Grid>


      <Grid item xs={4}
        sx={{
          display: 'flex',
          justifyContent: 'flex-end',
          alignItems: 'center',
        }}>
        
        <FuncoesCria/>
        <IconButton 
          sx={{
            marginLeft: '1rem', 
          }}
          onClick={() => {sopenFn(false)}}
        >
          <ExitToAppIcon/>
        </IconButton>

      </Grid>

    </Grid>
  );
}



export const FuncoesContainerHeader = memo(FuncoesHeader);

