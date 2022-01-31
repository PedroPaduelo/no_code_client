
import React, { useContext, useState } from 'react';
import { Backdrop, CircularProgress, Fab, Grid, MenuItem, Switch } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';


import { TabelasContext } from '../../../../Context/DB/TabelasContext';
import { ViewDadosTabela } from './ViewDadosTabela';
import { ImputSelectUnControler } from '../../../../components/Inputs/InputCustom';
import { SelectForme } from './SelectForme';
import { useExecutApi } from '../../../../hooks/useExecutApi';
import { WhereForme } from './WhereForme';


const methodo_options = [
  {
    value: 'select',
    label: 'select',
  },
  {
    value: 'column',
    label: 'column',
  },
  {
    value: 'where',
    label: 'where',
  },
  {
    value: 'whereNot',
    label: 'whereNot',
  },
  {
    value: 'whereIn',
    label: 'whereIn',
  },
  {
    value: 'orWhereIn',
    label: 'orWhereIn',
  },
  {
    value: 'whereNotIn',
    label: 'whereNotIn',
  },
  {
    value: 'orWhereNotIn',
    label: 'orWhereNotIn',
  },
  {
    value: 'whereNull',
    label: 'whereNull',
  },
  {
    value: 'whereNotNull',
    label: 'whereNotNull',
  },
  {
    value: 'whereBetween',
    label: 'whereBetween',
  },
  {
    value: 'whereNotBetween',
    label: 'whereNotBetween',
  },
  {
    value: 'whereRaw',
    label: 'whereRaw',
  },
  {
    value: 'whereLike',
    label: 'whereLike',
  },
  {
    value: 'whereILike',
    label: 'whereILike',
  },
  {
    value: 'join',
    label: 'join',
  },
  {
    value: 'innerJoin',
    label: 'innerJoin',
  },
  {
    value: 'leftJoin',
    label: 'leftJoin',
  },
  {
    value: 'leftOuterJoin',
    label: 'leftOuterJoin',
  },
  {
    value: 'rightJoin',
    label: 'rightJoin',
  },
  {
    value: 'rightOuterJoin',
    label: 'rightOuterJoin',
  },
  {
    value: 'fullOuterJoin',
    label: 'fullOuterJoin',
  },
  {
    value: 'crossJoin',
    label: 'crossJoin',
  },
  {
    value: 'joinRaw',
    label: 'joinRaw',
  },
  {
    value: 'having',
    label: 'having',
  },
  {
    value: 'havingIn',
    label: 'havingIn',
  },
  {
    value: 'havingNotIn',
    label: 'havingNotIn',
  },
  {
    value: 'havingNull',
    label: 'havingNull',
  },
  {
    value: 'havingNotNull',
    label: 'havingNotNull',
  },
  {
    value: 'havingBetween',
    label: 'havingBetween',
  },
  {
    value: 'havingNotBetween',
    label: 'havingNotBetween',
  },
  {
    value: 'havingRaw',
    label: 'havingRaw',
  },
  {
    value: 'distinct',
    label: 'distinct',
  },
  {
    value: 'distinctOn',
    label: 'distinctOn',
  },
  {
    value: 'groupBy',
    label: 'groupBy',
  },
  {
    value: 'groupByRaw',
    label: 'groupByRaw',
  },
  {
    value: 'orderBy',
    label: 'orderBy',
  },
  {
    value: 'orderByRaw',
    label: 'orderByRaw',
  },
  {
    value: 'limit',
    label: 'limit',
  },
  {
    value: 'offset',
    label: 'offset',
  },
  {
    value: 'insert',
    label: 'insert',
  },
  {
    value: 'count',
    label: 'count',
  },
  {
    value: 'min',
    label: 'min',
  },
  {
    value: 'max',
    label: 'max',
  },
  {
    value: 'sum',
    label: 'sum',
  },
  {
    value: 'avg',
    label: 'avg',
  },
  {
    value: 'increment',
    label: 'increment',
  },
  {
    value: 'decrement',
    label: 'decrement',
  },
  {
    value: 'first',
    label: 'first',
  },
  {
    value: 'rank',
    label: 'rank',
  },
  {
    value: 'createTableLike',
    label: 'createTableLike',
  }
];





export function ApiKnex() {

  const [dadosResutl, sdadosResutl] = useState({
    rows: [],
    header: []
  });

  const [nome, snome] = useState('');
  const [tabela, stabela] = useState('');
  const [methodo, smethodo] = useState('');

  const [dados, sdados] = useState([]);



  const handleChange = (event) => {

    sdados({
      ...dados,
      [event.target.name]: event.target.value
    });
  };



  const { 
    tables_render,
    campos_render,

    ListByIdCamposOfTables,
    set_loading,
    loading
   } = useContext(TabelasContext);

   const {Api_Knext} = useExecutApi();


  return ( 
    <Grid item xs={12}>
      
      <Grid container spacing={1}>

        <Grid item xs={12}>
          <ImputSelectUnControler 
            lebel="Tabela"
            value={tabela}
            onChange={(e) => {
              ListByIdCamposOfTables(e.target.value)
              stabela(e.target.value)
            }}
            flexDirection="column"
            sx={{ 
              width: "30%"
            }}
          >
            {tables_render.map((item) => (
              <MenuItem key={item.table_name} value={item.table_name}>
                {item.table_name}
              </MenuItem>
            ))}
          </ImputSelectUnControler>
        </Grid>

        <Grid item xs={2}>
          <ImputSelectUnControler 
            lebel="Methodo"
            value={methodo}
            onChange={(e) => {smethodo(e.target.value)}}
            flexDirection="column"
            sx={{ 
              width: "100%"
            }}
          >
            {methodo_options.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </ImputSelectUnControler>
        </Grid>

        <Grid item xs={12}>


          { methodo === 'select' &&
            <SelectForme 
              colunas={campos_render}
              sdados={sdados}
            />
          }

          { methodo === 'where' &&
            <WhereForme 
              colunas={campos_render}
              sdados={sdados}
              dados= {dados}
            />
          }





          
        </Grid>

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
          onClick={async () => {
            set_loading(true);

            const result = await Api_Knext(
              { 
                table: tabela,
                methodos: [{
                  methodo,
                  dados,
                }]
              }
            )



            var key = Object.keys(result[0]);
            const headers =  key.map(key => {
              return{
                Header: key,
                accessor: key,
                align: "left",
              }
            })
            sdadosResutl({
              rows: result,
              header: headers
            })



            set_loading(false);
          }}

          size="small" 
          color="secondary" 
          aria-label="add"
        >
          <AddIcon />
        </Fab>
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

