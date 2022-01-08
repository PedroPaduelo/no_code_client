import React, { useState } from 'react';

import { useFunctions } from '../../../hooks/WKF/FN/useFunctions';
import { Grid, MenuItem } from '@mui/material';
import { ImputSelectUnControler, ImputTextUnControler } from '../../Inputs/InputCustom';


export default function FuncoesCria() {

  const {
    fn,
    set_fn
  } = useFunctions();

  const [fn_name, sfn_name] = useState(fn.fn_name||'')
  const [fn_type, sfn_type] = useState(fn.fn_type||'')


  return (

    <Grid item xs={12}
      sx={{ 
        display: 'flex',
        border: '1px solid #e0e0e0',
        borderRadius: '5px',
        padding: '10px',
        mt: '25px'
      }}
    >
      
      <Grid item xs={8}
        sx={{ 
          pr: "10px", 
        }} 
      >
        <ImputTextUnControler  
          lebel="Nome:"
          name="fn_name"
          flexDirection="column"
          onChange={set_fn}
          sx={{ 
            width: "100%",
            mr: "5px", 
          }}            
        />
      </Grid>

      <Grid item xs={4}>
        <ImputSelectUnControler 
          lebel="Tipo:"
          name="fn_type"
          onChange={set_fn}
          flexDirection="column"
          helperText="Seleciona o tipo de campo"
          sx={{ 
            width: "100%"
          }}
        >
          <MenuItem value="Api">
            Executar Api
          </MenuItem>

          <MenuItem value="Dados_Insert">
            Inserir Dados
          </MenuItem>

          <MenuItem value="Dados_List">
            Listar Dados
          </MenuItem>

          <MenuItem value="Dado_Get">
            Listar um Registro apenas
          </MenuItem>

          <MenuItem value="Dados_UpData">
            Atualizar Dados
          </MenuItem>

          <MenuItem value="Dados_Delete">
            Deletar Dados
          </MenuItem>

        </ImputSelectUnControler>
      </Grid>

    </Grid>

  );


}