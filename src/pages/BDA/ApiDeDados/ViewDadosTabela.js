
import React, { useContext, useEffect } from 'react';
import { Button, Grid } from '@mui/material';

import DeleteIcon from '@mui/icons-material/Delete';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import ArrowCircleUpIcon from '@mui/icons-material/ArrowCircleUp';
import ArrowCircleDownIcon from '@mui/icons-material/ArrowCircleDown';
import ApiIcon from '@mui/icons-material/Api';

import TabelaFilter from '../../../components/Tabela/TabelaFilter';
import { TabelasContext } from '../../../Context/DB/TabelasContext';


const headerHides = [
]



export function ViewDadosTabela({dados}) {
  const { 
    table,
    set_loading
  } = useContext(TabelasContext);

  const [tbl_dados, svalues] = React.useState([]);
  const [header, sheader] = React.useState([]);


  useEffect(() => {
    async function getUser() {
      try {
      set_loading(true);

      const headers =  dados.fields.map(key => {
        return{
          Header: key.name,
          accessor: key.name,
          align: "left",
        }
      })

      sheader(headers)
      svalues(dados.rows)

      set_loading(false);

      } catch (error) {
        set_loading(false);
      }
    }
    getUser(); 
  }, [dados, set_loading]);


  
  return ( 
    <Grid item xs={12}
      sx={{ 
        pt: 2,
        
      }}
    >
      <Grid item xs={12}
        sx={{ 
          display: 'flex',
        }}
      >

        <Grid item xs={8}
          sx={{ 
            justifyContent: 'space-around',
          }}
        >
          <Button size="small" variant="outlined" 
            sx={{
              marginTop: 2.7,
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
          mt: 4,
          overflow: 'auto',
        }}
      >
        <TabelaFilter
          title = {`Dados da ${table}`}
          headers = {header}
          rows = {  tbl_dados.length !== 0 ?  tbl_dados : [1,1,1,1,1]}
          headerHides = {headerHides}
          linePage={10}
          label={`Buscar dados da ${table}`}
          size="small"
        />
        
      </Grid>

    </Grid>
    
  );
}

