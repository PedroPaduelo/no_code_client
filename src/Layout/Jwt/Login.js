import { Avatar, Button, Container, CssBaseline, TextField, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { Box } from '@mui/system';
import React, { useState} from 'react';

import { useHistory } from "react-router-dom";

import LockOutlinedIcon from '@mui/icons-material/LockOutlined';


import { useUserAuth } from "../../hooks/useUserAuth";



const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));







function SignIn() {
  
  const { handleLogin } = useUserAuth();
  


  const classes = useStyles();
  const history = useHistory();

  const [user_email, suser_email] = useState("")
  const [user_password, suser_password] = useState("")



  async function Logar(){
    if(user_email === "" || user_password === "" ){
      
    }else{
      await handleLogin(user_password, user_email)
      history.push('/Olympo/Flow')
    }
  }   
  


  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <form className={classes.form} noValidate>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
            value={user_email}
            onChange={(e)=>{suser_email(e.target.value)}}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            value={user_password}
            onChange={(e)=>{suser_password(e.target.value)}}
          />
          
          <Button
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick={Logar}
          >
            Sign In
          </Button>
        </form>
      </div>
      <Box mt={8}>

      </Box>
    </Container>
  );
}


export default SignIn