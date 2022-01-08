
import React from 'react';
import { Button, Grid } from '@mui/material';

import DeleteIcon from '@mui/icons-material/Delete';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import ArrowCircleUpIcon from '@mui/icons-material/ArrowCircleUp';
import ArrowCircleDownIcon from '@mui/icons-material/ArrowCircleDown';
import ApiIcon from '@mui/icons-material/Api';

import { ImputTextUnControler } from '../../../components/Inputs/InputCustom';
import TabelaFilter from '../../../components/Tabela/TabelaFilter';


import { useBD } from '../../../hooks/useBD';

const headerHides = [
  'created_at',
  'updated_at',
]



export function ViewDadosTabela() {
  const {tbl_dados, tbl_table} = useBD();
  
  return ( 
    <Grid item xs={12}
      sx={{ 
        pt: 1,
        borderTop: '1px solid #ccc',
      }}
    >
      <Grid item xs={12}
        sx={{ 
          display: 'flex',
        }}
      >
        <Grid item xs={4}>
          <ImputTextUnControler 
            nameField="table_name" 
            lebel="Busca dados na Tabela"
            flexDirection="column"
            sx={{ 
              width: "100%",  
            }}            
          />
        </Grid>

        <Grid item xs={8}
          sx={{ 
            justifyContent: 'space-around',
          }}
        >
          <Button size="small" variant="outlined" 
            sx={{
              marginTop: 2.7,
              marginLeft: 2,
            }}
          >
            <AddCircleOutlineIcon />
          </Button>

          <Button size="small" variant="outlined" 
            sx={{
              marginTop: 2.7,
              marginLeft: 2,
            }}
          >
            <DeleteIcon />
          </Button>

          <Button size="small" variant="outlined" 
            sx={{
              marginTop: 2.7,
              marginLeft: 2,
            }}
          >
            <ArrowCircleUpIcon/>
          </Button>

          <Button size="small" variant="outlined" 
            sx={{
              marginTop: 2.7,
              marginLeft: 2,
            }}
          >
            <ArrowCircleDownIcon/>
          </Button>

          <Button size="small" variant="outlined" 
            sx={{
              marginTop: 2.7,
              marginLeft: 2,
            }}
          >
            <ApiIcon/>
          </Button>

        </Grid>
        
      </Grid>

      

      <Grid item xs={12}
        sx={{ 
          mt: 2,
          overflow: 'auto',
        }}
      >
        {tbl_dados?.length !== 0 &&
          <TabelaFilter
            title = {`Dados da ${tbl_table?.table_name}`}
            headers = {tbl_dados?.header}
            rows = {  tbl_dados?.dados?.length !== 0 ?  tbl_dados.dados : [1,1,1,1,1]}
            headerHides = {headerHides}
            linePage={10}
            label={`Buscar dados da ${tbl_table?.table_name}`}
            size="small"
          />
        }
      </Grid>

    </Grid>
    
  );
}

