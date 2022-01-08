import React from 'react';
import { Grid } from '@mui/material';

export function PaperCorre({children, status}) {

  const teste = status === 'success' ? 
  '0px 0px 5px 5px rgba(0, 255, 0, 0.3)' : 
  '0px 0px 5px 5px rgba(0, 0, 0, 0.3)';


  return (
    <Grid item xs={12}
      sx={{ 
        borderRadius: '8px',
        boxShadow: `${teste}`,
        backgroundColor: '#fff',
        padding: '10px',
        mb: '20px',
        mt: '20px',
        ml: '30px',
        mr: '20px',
      }}>
        {children}
    </Grid>
  );
}