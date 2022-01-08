
import React from 'react';
import { Grid } from '@mui/material';


import { ImputTextUnControler } from '../../../components/Inputs/InputCustom';
import TabelaFilter from '../../../components/Tabela/TabelaFilter';


import { useBD } from '../../../hooks/useBD';
import ModalEditaFields from './ModalEditaFields';
import ModalDeletaFields from './ModalDeletaFields';



const header = [
  {
    Header: 'Nome do Campo',
    accessor: 'column_name',
    align: "left",
  },
  {
    Header: 'Tipo',
    accessor: 'data_type',
    align: "left",
  },
  {
    Header: 'Pode ser Nulo',
    accessor: 'is_nullable',
    align: "center",
    Cell: ({ row }) => (
      row.original.is_nullable === 'YES' ? <span>Sim</span> : <span>Não</span>
    ),

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



export function CriaCamposTabelas() {
  const {tbl_campos, tbl_table} = useBD();
  const [table_name, stable_name] = React.useState(tbl_table?.table_name)

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
          lebel="Tabela:"
          flexDirection="column"
          disabled={true}
          value={table_name || tbl_table?.table_name}
          onChange={(e) => stable_name(e.target.value)}
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
          title = "Campos da tabela"
          headers = {header}
          rows = {tbl_campos}
          headerHides = {headerHides}
          linePage={50}
          label="Busca campos"
          size="small"
        />
      </Grid>

    </Grid>
    
  );
}

