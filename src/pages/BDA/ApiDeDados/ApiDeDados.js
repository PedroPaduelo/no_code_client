
import React, { useMemo } from 'react';
import { Grid, TextField } from '@mui/material';
import { useExecutApi } from '../../../hooks/useExecutApi';
import { FormeCriaAPI } from './FormeCriaAPI';
import { TabelaAPIs } from './TabelaAPIs';

export function ApiDeDados() {

  const { List, Creat, Update, Delete } = useExecutApi();

  const [nome, snome] = React.useState('');

  const [dados, sdados] = React.useState([]);

  React.useEffect(() => {
    List('tabela_api_list').then(dados => {
      sdados(dados)
    })
  }, [List])


  const forme = useMemo(() => (
          <FormeCriaAPI
            onClick={ async(dados) => {  
              await  Creat(
                    'tabela_api_list', 
                    {
                      nome: dados.nome,
                      url_api: dados.url_api,
                      tipo_api: dados.tipo_api
                    }
            )
            const data_result = await List('tabela_api_list')
            sdados(data_result)
            }}
          />

  ), [Creat, List]);

  const memoizedErrors = useMemo(() => <TabelaAPIs dados={dados} />, [dados]);


  const textField = useMemo(() => (<TextField
    label="Nome da Api"
    size="small"
    value={nome}
    onChange={(e) => {snome(e.target.value)}}
  />), [nome]);



  const header = useMemo(() => (<Grid item xs={12}
    sx={{
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
    }}
  >
    <p>Api de dados ( CRUD )</p>

    {textField}
    
  </Grid>), [textField]);



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

          {header}

          {forme}


          {memoizedErrors}

      </Grid>

    </Grid>
    
  );
}

