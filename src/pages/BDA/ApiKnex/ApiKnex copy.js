
import React, { useContext, useState } from 'react';
import { useForm } from "react-hook-form";
import AddIcon from '@mui/icons-material/Add';
import { Fab, Grid, MenuItem } from '@mui/material';

import Loading from '../../../components/Loading';
import { ImputSelectUnControler } from '../../../components/Inputs/InputCustom';
import { TabelasContext } from '../../../Context/DB/TabelasContext';
import { SwitchInputPrimitivo } from './Inputs/SwitchInputPrimitivo';







export function ApiKnex() {

  const { 
    tables_render,
    campos_render,

    ListByIdCamposOfTables,
   } = useContext(TabelasContext);

  const [tabela, stabela] = useState("");

  const { control, getValues } = useForm()

  const select = [

    {
      id: 2,
      label: "Nome2",
      nameFilde: "name",
      type: "text",
      placeholder: "e.g. Facebook",
      sxInput: {
      },
      colunms: {
        xs: 12,
        sm: 6,
        md: 12,
        lg: 3,
        xl: 2
      },
    },

    {
      id: 1,
      label: "Colunas",
      nameFilde: "coluns_bd",
      type: "array",
      placeholder: "e.g. Facebook",
      sxInput: {
      },
      colunms: {
        xs: 12,
        sm: 6,
        md: 12,
        lg: 12,
        xl: 2
      },
      itens: [
        {
          id: 1,
          label: "Colunas",
          nameFilde: "colunas2",
          type: "select",
          placeholder: "e.g. Facebook",
          sxInput: {
          },
          colunms: {
            xs: 12,
            sm: 6,
            md: 12,
            lg: 3,
            xl: 2
          },
          options: campos_render.map((item) => ( {  id: item.id, label: item.column_name, value: item.column_name } ))  //campos_render.map((item) => ( {  id: item.id, label: item.column_name, value: item.column_name } ))
        },

        {
          id: 1,
          label: "Sinal",
          nameFilde: "sinal",
          type: "select",
          placeholder: "e.g. Facebook",
          sxInput: {
          },
          colunms: {
            xs: 12,
            sm: 6,
            md: 12,
            lg: 3,
            xl: 2
          },
          options: [
            {
              label: "=",
              value: "="
            },
            {
              label: ">",
              value: ">"
            },
            {
              label: "<",
              value: "<"
            },
            {
              label: ">=",
              value: ">="
            }
          ]
        },

        {
          id: 2,
          label: "Nome2",
          nameFilde: "name2",
          type: "text",
          placeholder: "e.g. Facebook",
          sxInput: {
          },
          colunms: {
            xs: 12,
            sm: 6,
            md: 12,
            lg: 3,
            xl: 2
          },
        },
      ]
    }
  ]










 
  return ( 
    <Grid container spacing={1}>

      <Grid item xs={3}
        sx={{
          pl: '10px',
        }}
      >
        <ImputSelectUnControler 
          value={tabela}
          onChange={async(e) => {
            await ListByIdCamposOfTables(e.target.value)
            stabela(e.target.value)
          }}
          lebel="Tabelas:"
          flexDirection="column"
          sx={{ 
            width: "100%"
          }}
        >
          {tables_render.map((item) => (
            <MenuItem key={item.table_name} value={item.table_name}>
              {item.table_name}
            </MenuItem>
          ))} 
          
        </ImputSelectUnControler>
      </Grid> 




      {
        select.map(item => {
          return (
            <SwitchInputPrimitivo 
              item={item}
              nameFilde={item.nameFilde}
              control={control}
            />
          )
        })
      }

      




      <Fab 
        onClick={() => {
          console.log(getValues())
        }}
        size="small" color="secondary" aria-label="add">
        <AddIcon />
      </Fab>

      <Loading
        loading={false}
      />
    </Grid>
    
  );
}

