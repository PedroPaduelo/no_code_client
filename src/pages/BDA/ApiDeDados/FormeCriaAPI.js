
import React from 'react';
import { Button, Grid, TextField } from '@mui/material';

export function FormeCriaAPI({onClick}) {

  const [nome, snome] = React.useState('');
  const [url_api, surl_api] = React.useState('');
  const [tipo_api, stipo_api] = React.useState('');


  return ( 
    <Grid item xs={12}>
      
      <TextField
        label="Nome da Api"
        size="small"
        value={nome}
        onChange={(e) => {snome(e.target.value)}}
      />
      <TextField
        label="Url da Api"
        size="small"
        value={url_api}
        onChange={(e) => {surl_api(e.target.value)}}
      />
      <TextField
        label="Tipo da Api"
        size="small"
        value={tipo_api}
        onChange={(e) => {stipo_api(e.target.value)}}
      />

      <Button 
        variant="outlined"
        onClick={() => {onClick({nome, url_api, tipo_api})}}
      >
        Gravar
      </Button>

    </Grid>
    
  );
}

