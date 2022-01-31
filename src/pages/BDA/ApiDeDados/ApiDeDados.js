
import React, { useContext } from 'react';
import { Backdrop, CircularProgress, Grid, TextField } from '@mui/material';
import { useExecutApi } from '../../../hooks/useExecutApi';
import { TabelasContext } from '../../../Context/DB/TabelasContext';
import { ViewDadosTabela } from './ViewDadosTabela';

export function ApiDeDados() {
  const [code, scode] = React.useState('');
  const [nome, snome] = React.useState('');
  const [dadosResutl, sdadosResutl] = React.useState({
    rows: [],
    header: []
  });

  const { 
    set_loading,
    loading
   } = useContext(TabelasContext);

  const {Sql_Raw, Creat} = useExecutApi();




  return ( 
    <Grid item xs={12}>
      
      <Grid container spacing={2}>

        <Grid item xs={12}>
          <TextField
            sx={{width: '100%'}}
            label="Nome"
            value={nome}
            onChange={(e) => {snome(e.target.value)}}
          />
        </Grid>

        <Grid item xs={12}>
          <TextField
            sx={{width: '100%'}}
            label="Code SQL"
            multiline
            maxRows={10}
            minRows={4}
            value={code}
            onChange={(e) => {scode(e.target.value)}}
          />
        </Grid>

        <Grid item xs={12}
          sx={{
            mt: 4,
            display: 'flex',
            justifyContent: 'space-around',
            alignItems: 'center',

          }}
        >

          <button onClick={async () => {
            set_loading(true);
            const teste = await Sql_Raw({dados: code})

            const headers =  teste.fields.map(key => {
              return{
                Header: key.name,
                accessor: key.name,
                align: "left",
              }
            })
            sdadosResutl({
              rows: teste.rows,
              header: headers
            })


            set_loading(false);
          }}>
            Executar
          </button>

          <button onClick={async () => {
            set_loading(true);
            await Creat("sql_query_custom", {
              name_query: nome,
              query_sql: code
            })
            set_loading(false);
          }}>
            Gravar
          </button>

        </Grid>

      </Grid>




      <Grid item xs={12}
        sx={{
          pl: 1,
          pr: 1,
          pt: 4,
        }}
      >
        <ViewDadosTabela dados={dadosResutl}/> 
      </Grid>



      
      



      <Backdrop
        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={loading}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
    </Grid>
    
  );
}

