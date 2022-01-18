
import React, { useContext } from 'react';
import { Grid } from '@mui/material';

import { ImputTextUnControler } from '../../../../components/Inputs/InputCustom';
import TabelaFilter from '../Campos/TabelaFilter';
import ModalEditaFields from './ModalEditaFields';
import ModalDeletaFields from './ModalDeletaFields';
import { TabelasContext } from '../../../../Context/DB/TabelasContext';
import ModalCriaFields from './ModalCriaFields';

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
  const { 
    campos_render,
    campos,
    set_campos_render,
   } = useContext(TabelasContext);


  const [campos_name, scampos_name] = React.useState()

  return ( 
    <Grid item xs={12}
    >

      <Grid item xs={12}
        sx={{ 
          display: 'flex',
          justifyContent: 'start',
          mt: 2,
        }}
      >
        <ImputTextUnControler 
          lebel={`Busca Campos -- Total: ${campos.length}`}
          flexDirection="column"
          value={campos_name}
          onChange={(e) => {
            const tables_filters = campos.filter(value => value.column_name.includes(e.target.value))
            set_campos_render(tables_filters)
            scampos_name(e.target.value)
          }}
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
          rows = {campos_render}
          headerHides = {headerHides}
          linePage={50}
          label="Busca campos"
          size="small"
        />
      </Grid>

      <ModalCriaFields/>
    </Grid>
    
  );
}

