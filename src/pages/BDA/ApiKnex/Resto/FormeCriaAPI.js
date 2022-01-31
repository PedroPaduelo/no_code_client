
import React from 'react';
import { Grid, MenuItem } from '@mui/material';
import { ImputSelectUnControler, ImputTextUnControler } from '../../../components/Inputs/InputCustom';

// Instancia apenas colunas que serão utilizadas
// Sempre Sera Statico

export function SelectForme({values,  onClick}) {

  const [nome, snome] = React.useState('');
  const [tipo_data, stipo_data] = React.useState('Coluna');

  return ( 
    <Grid container spacing={1}>

      <Grid item xs={4}>
        <ImputTextUnControler
          lebel="Atributo"
          name="atributo"
          size="small"
          flexDirection="column"

          value={nome}
          onChange={(e) => {snome(e.target.value)}}
        />
      </Grid>

      <Grid item xs={4}>
        <ImputTextUnControler
          lebel="Value"
          name="value"
          size="small"
          flexDirection="column"

          value={nome}
          onChange={(e) => {snome(e.target.value)}}
        />
      </Grid>

      <Grid item xs={2}>
        <ImputSelectUnControler 
          disabled={true}
          lebel="Tipo"
          value={tipo_data}
          onChange={(e) => {stipo_data(e.target.value)}}
          flexDirection="column"
          sx={{ 
            width: "100%"
          }}
        >
          <MenuItem value={"Statico"}>
            Statico
          </MenuItem>
          <MenuItem value={"Dinamico"}>
            Dinamico
          </MenuItem>
          <MenuItem value={"Coluna"}>
            Coluna
          </MenuItem>
        </ImputSelectUnControler>
      </Grid>

    </Grid>
    
  );
}

