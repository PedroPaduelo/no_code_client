
import React from 'react';
import Grid from '@mui/material/Grid';
import { Slide } from '@mui/material';




export default function HeaderLine({title, children}) {

  return ( 
    <Slide direction="left" in={true} mountOnEnter unmountOnExit
      timeout={{
        enter: 1000,
        exit: 1000,
      }}
    >
      <Grid
        sx={{
          width: "100%",
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          borderBottom: '1px solid #ccc',
          pr: 2,
        }}
      >
        <p>{title}</p>
        {children}
      </Grid>
    </Slide>

  );


}


