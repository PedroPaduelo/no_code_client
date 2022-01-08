
import React from 'react';
import { Grid } from '@mui/material';


import { ImputTextUnControler } from '../../../components/Inputs/InputCustom';
import TabelaFilter from '../../../components/Tabela/TabelaFilter';


import { useBD } from '../../../hooks/useBD';
import ModalEditaFields from '../Tabelas/ModalEditaFields';
import ModalDeletaFields from '../Tabelas/ModalDeletaFields';


const header = [
  {
    Header: 'Method',
    accessor: 'api_method',
    align: "left",
  },

  {
    Header: 'Titulo',
    accessor: 'api_titulo',
    align: "left"
  },

  {
    Header: 'Path',
    accessor: 'api_path',
    align: "left",
  },

  {
    Header: 'ações',
    accessor: 'pendentes',
    align: "center",
    Cell: ({ row }) => (
      <Grid
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
      <ModalEditaFields
        dados={row.original}
      />

      <ModalDeletaFields
        dados={row.original}
      />

    </Grid>
    ),
  }

]

const headerHides = [
  'created_at',
  'updated_at',
]


export function ViewDadosTabela() {
  const {tbl_api_dados} = useBD();

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
          justifyContent: 'start',
        }}
      >
        <ImputTextUnControler 
          nameField="table_name" 
          lebel="Busca API"
          flexDirection="column"
          sx={{ 
            width: "100%",  
          }}            
        />
      </Grid>

      <Grid item xs={12}
        sx={{ 
          mt: 2,
        }}
      >
        <TabelaFilter
          title = {`API`}
          headers = {header}
          rows = {tbl_api_dados}
          headerHides = {headerHides}
          linePage={10}
          label={`Buscar`}
          size="small"
        />
      </Grid>

    </Grid>
    
  );
}

