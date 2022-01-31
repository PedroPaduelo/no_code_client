
import React, { useState } from 'react';
import { Grid, MenuItem } from '@mui/material';

import { ImputSelectUnControler, ImputTextUnControler } from '../../../components/Inputs/InputCustom';


// Instancia apenas colunas que serão utilizadas
// Sempre Sera Statico

export function WhereForme({colunas, sdados, dados}) {



  const [coloun, scoloun] = useState('');
  const [sinal, ssinal] = useState('');
  const [valor, svalor] = useState('');
  const [type, stype] = useState('Statico');

  const [list_data, slist_data] = useState([]);
  


  const handleChange = (e) => {



    if (e.target.name === 'colunas') {
      const dado = {
        atributo: e.target.value,
        value: e.target.value,
        type: 'Statico',
      }
      sdados([...dados, dado]);
    }

    if (e.target.name === 'sinal') {
      const dado = {
        atributo: e.target.value,
        value: e.target.value,
        type: 'Statico',
      }
      sdados([...dados, dado]);
    }

    if (e.target.name === 'type') {
      const dado = {
        atributo: e.target.value,
        value: e.target.value,
        type: 'Statico',
      }
      sdados([...dados, dado]);
    }




    const dado = {
      atributo: e.target.value,
      value: e.target.value,
      type: 'Statico',
    }

    "atributo": "created_at_data",
    "value":"created_at_data",
    "type": "Statico"

    sdados([...list_data, dados]);
  };





  return ( 
    <Grid container spacing={1}>

      <Grid item xs={3}
        sx={{
          borderTop: '1px solid #ccc',
          mt: 3,
        }}
      >
        <ImputSelectUnControler 
          lebel="Coluna selecionada"
          name="coluna"
          value={dados.coloun}
          onChange={handleChange}
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

      <Grid item xs={3}
        sx={{
          borderTop: '1px solid #ccc',
          mt: 3,
          pt: 3,
          pb: 3,
        }}
      >
        <ImputSelectUnControler 
          lebel="Sinal"
          name="sinal"
          value={sinal}
          onChange={(e) => {ssinal(e.target.value)}}
          flexDirection="column"
          sx={{ 
            width: "100%",
            textAlign: "center",       
          }}
        >
          <MenuItem value="=="> {"=="} </MenuItem>
          <MenuItem value="!=="> {"!=="} </MenuItem>
          <MenuItem value=">"> {">"} </MenuItem>
          <MenuItem value="<"> {"<"} </MenuItem>
          <MenuItem value=">="> {">="} </MenuItem>
          <MenuItem value="<="> {"<="} </MenuItem>

        </ImputSelectUnControler>

      </Grid>

      <Grid item xs={3}
        sx={{
          borderTop: '1px solid #ccc',
          mt: 3,
          pt: 3,
          pb: 3,
        }}
      >
        <ImputTextUnControler
          lebel="Valor comparado"
          name="atributo"
          size="small"
          flexDirection="column"

          value={valor}
          onChange={(e) => {svalor(e.target.value)}}
        />
      </Grid>

      <Grid item xs={3}
        sx={{
          borderTop: '1px solid #ccc',
          mt: 3,
          pt: 3,
          pb: 3,
        }}
      >
        <ImputSelectUnControler 
          lebel="Tipo"
          name="type"
          value={type}
          onChange={(e) => {stype(e.target.value)}}
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
        </ImputSelectUnControler>
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

