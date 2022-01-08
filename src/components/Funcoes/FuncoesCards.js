import React from 'react';
import { Grid, Typography } from '@mui/material';
import { useFunctions } from '../../hooks/WKF/FN/useFunctions';
import FuncoesEdita from './FuncoesEdita';

export function FuncoesCards() {
  const { fns } = useFunctions();
  return (  
    <Grid item 

      xs={12}
      sm={12} 
      md={12} 

      container
      direction="row"
      justifyContent="flex-start"
      alignItems="flex-start"
      sx={{ 
        flexWrap: "wrap", 
        borderTop: '1px solid #ccc',
      }}
    >
      
      {fns.map((item, index) => (
        <Grid
          sx={{
            display: 'flex',
            flexDirection: 'column',
            border: '1px solid #e0e0e0',
            borderRadius: '5px',
            backgroundColor: '#fafafa',
            width: '200px',
            m: '5px',
          }}
        >
          <Typography variant="subtitle1"
            sx={{
              fontWeight: 'bold',
              textAlign: 'center',
              color: '#3f51b5',
            }}
          >
            {item.fn_type}
          </Typography>
  
          <Typography variant="subtitle2" 
            sx={{
              fontWeight: 'bold',
              textAlign: 'center',
            }}
          >
            {item.fn_name}
          </Typography>

          <FuncoesEdita/>
  
        </Grid>   
      ))}

    </Grid>
  );
}

