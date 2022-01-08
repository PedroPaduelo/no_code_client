
import React from 'react';
import Grid from '@mui/material/Grid';
import { Slide, Typography } from '@mui/material';

export function CardCuston({children, title, subtitle, sx, time_ms}) {
  
  return (
    <Slide direction="left" in={true} mountOnEnter unmountOnExit
      timeout={{
        enter: time_ms * 100,
        exit: time_ms * 100,
      }}
    >
      <Grid  
        item
        sx={{ 
          borderRadius: "5px",
          transition: "background-color 0.3s ease-in",
          p: "5px",
          width: "180px",
        }}
      >

      {/* <Grid container rowSpacing={0}   columnSpacing={{  md: 0 }} > */}

        <Grid item xs={12}
          sx={{
            display: 'flex',
            height: "140px",
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            p: '5px',
            border: '1px solid #e0e0e0',
            borderRadius: '5px',
            backgroundColor: '#fafafa',
            boxShadow: '0px 0px 5px rgba(0, 0, 0, 0.1)',
            transition: "background-color 0.2s ease-in",  
            "&:hover": {
              backgroundColor: "rgba(0,0,0,0.1)",
              cursor: "pointer"
            }
          }}
        >

          {/* Titulo */}
          <Typography variant="subtitle1"
            sx={{
              fontWeight: 'bold',
              textAlign: 'center',
              color: '#3f51b5',
              pl: '20px',
              pr: '20px',
              pt: '3px',
              pb: '5px',
            }}
          >
            {title   || ''}
          </Typography>

          {/* Subtitulo Titulo */}
          <Typography variant="caption" 
            sx={{
              textAlign: 'center',
              padding: '3px',
            }}
          >
            {subtitle || ''}
          </Typography>

          {/* Content */}
          <Grid item xs={12} sx={sx} >
            {children}
          </Grid>

        </Grid> 


      </Grid>


    </Slide>
  
  );
}

