
import React from 'react';
import { Grid } from '@mui/material';
import TabelaFilter from '../../../components/Tabela/TabelaFilter';

export function ViewDadosTabela({dados}) {
 
  return ( 
    <Grid item xs={12}
      sx={{ 
        pt: 2,
        borderTop: '1px solid #ccc',
      }}
    >


      <Grid item xs={12}
        sx={{ 
          mt: 4,
          overflow: 'auto',
        }}
      >
        
          <TabelaFilter
            headers = {dados.header}
            rows = {  dados.rows.length !== 0 ?  dados.rows : [1,1,1,1,1]}
            headerHides = {[]}
            linePage={20}
            size="small"
          />
        
        
      </Grid>
    </Grid>
    
  );
}

