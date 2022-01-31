
import React, { useState } from 'react';
import { Fab, Grid, MenuItem } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';

import { ImputSelectUnControler } from '../../../components/Inputs/InputCustom';


// Instancia apenas colunas que serão utilizadas
// Sempre Sera Statico

export function SelectForme({colunas,  sdados}) {



  const [atributo, satributo] = useState('');
  const [value, svalue] = useState('');
  const [type, stype] = useState('Coluna');

  const [list_data, slist_data] = useState([]);
  


  const handleChange = (dados) => {
    slist_data([...list_data, dados]);
    sdados([...list_data, dados]);
  };





  return ( 
    <Grid container spacing={0}>

      <Grid item xs={11}
        sx={{
          borderTop: '1px solid #ccc',
          mt: 3,
          pt: 3,
          pb: 3,
        }}
      >
        <ImputSelectUnControler 
          lebel="Coluna selecionada"
          value={value}
          onChange={(e) => {svalue(e.target.value)}}
          flexDirection="column"
          sx={{ 
            width: "100%"
          }}
        >
          {
            colunas.map((item) => (
              <MenuItem key={item.column_name} value={item.column_name}>
                {item.column_name}
              </MenuItem>
            ))
          }
   
        </ImputSelectUnControler>
      </Grid>

      <Grid item xs={1}
        sx={{
          borderTop: '1px solid #ccc',
          mt: 3,
          pt: 4.5,
          pb: 3,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Fab 
          onClick={() => {
            handleChange({
              atributo,
              value,
              type,
            });
          }}

          size="small" 
          color="secondary" 
          aria-label="add"
        >
          <AddIcon />
        </Fab>
      </Grid>





      <Grid item xs={12}>
        {
          list_data.map((item) => (
            <MenuItem key={item.value} value={item.value}>
              {item.value}
            </MenuItem>
          ))
        }
      </Grid>



    </Grid>
    
  );
}

