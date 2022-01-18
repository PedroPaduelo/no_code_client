
import React from 'react';
import { Box, Typography } from '@mui/material';


export function HeaderCuston({title, children}) {


  return ( 
    <Box 
      sx={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderBottom: '1px solid #ccc',
      }}
    >
      <Typography variant="h6" component="div" >
        {title}
      </Typography>

      {children}

    </Box>
    
  );
}

