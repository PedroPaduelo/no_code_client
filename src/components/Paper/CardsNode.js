import * as React from 'react';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
  root: {
    borderRadius: "4px",
    padding: "1rem",
  },
});




export default function Cads({children, background}) {
  const classes = useStyles();


  return (
    <Grid item xs={12} md={12} lg={12}>
      <Paper
        elevation={10}
          sx={{
            display: 'flex',
            flexDirection: 'column',
            background: background
          }}
      >
        <Box 
          className={classes.root}
        >
          {children}
        </Box>
        
      </Paper>
    </Grid>
  );
}

