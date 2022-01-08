import React, { useEffect } from 'react';
import { Grid, MenuItem } from '@mui/material';

import { ImputSelect, ImputText } from '../Inputs/InputCustom';
import { useBD } from '../../hooks/useBD';


export function CriaNameAndSelectTable({ disabled, control, watch }) {

  const { ListTables, ListByIdCamposOfTables, tbl_tables } = useBD();

  const tabela = watch('table')


  useEffect(() => {
    async function getUser() {
      try {
       await ListTables()
      } catch (error) {
      }
    }
    getUser(); 
  }, [ListTables]);

  useEffect(() => {
    async function getUser() {
      try {
       await ListByIdCamposOfTables(tabela)
      } catch (error) {
      }
    }
    getUser(); 
  }, [ListByIdCamposOfTables, tabela]);



  return (
    <Grid>

      <Grid item xs={12}
        sx={{ 
          display: 'flex',
          mb: '10px',
        }}
      >
        
        <Grid item xs={9}
          sx={{ 
            mr: '10px',
          }}
        >
          <ImputText 
            lebel="Name query data:"
            sx={{ 
              mb: '3px',
            }}

            control={control}
            nameField={`data_insert_titulo`} 

            flexDirection="column"
            
            widthLabel="8rem"
            disabled={disabled}
          />
        </Grid>

        <Grid item xs={3}>
          <ImputSelect 
            lebel="Table:"
            sx={{ 
              mb: '3px',
            }}
            
            control={control}
            nameField={`table`}
            flexDirection="column"
            disabled={disabled}
          >

            {tbl_tables.map(table => (
              <MenuItem value={table.table_name}>{table.table_name}</MenuItem>
            ))}

          </ImputSelect>
        </Grid>

      </Grid>
      


    </Grid>
  );
}

