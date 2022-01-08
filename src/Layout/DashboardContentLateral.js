
import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { Switch, useLocation } from 'react-router';
import CustomRoute from '../routes/CustomRoute';
import { useUserAuth } from '../hooks/useUserAuth';
import Container from '@mui/material/Container';

import * as IndexPages from '../pages/indexPages'
import * as Icons from './Icons'
import { NavLink } from 'react-router-dom';
const drawerWidth = 220;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(6)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(6)} + 1px)`,
  },
});

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
    ...(open && {
      ...openedMixin(theme),
      '& .MuiDrawer-paper': openedMixin(theme),
      
    }),
    ...(!open && {
      ...closedMixin(theme),
      '& .MuiDrawer-paper': closedMixin(theme),
      
    }),
  }),
);







export default function MiniDrawer() {

  let location = useLocation();

  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const { 
    acessos
  } = useUserAuth();

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />

      <AppBar position="fixed" open={open}>
        <Toolbar variant="dense">

          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{
              mr: 3,
              ml: '-20px',
              ...(open && { display: 'none' }),
            }}
          >
            <MenuIcon />
          </IconButton>


          <Typography variant="h6" noWrap component="div">
            Olympu
          </Typography>

        </Toolbar>
      </AppBar>




      <Drawer variant="permanent" open={open}>

        <Toolbar variant="dense"
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'flex-end' ,
            marginRight: '-15px',
        }}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
          </IconButton>
        </Toolbar>
        
        <Divider/>

        <List>

          {acessos.map((route, i) => (
            <NavLink   
              key={i} 
              to={route.acessos_path}
              
              

              isActive={(match, location) => {
                if (!match) {
                  return false;
                }
                if(match.url === route.acessos_path ){
                  return 1;
                }
                
              }}


            >


              <ListItem 
                button
                selected={location.pathname === route.acessos_path}
                sx={{
                  '& .Mui-selected':{
                    color: '#556CD6',
                  }
                }}
              >
                <ListItemIcon
                
                  sx={{ 
                    minWidth: '40px',
                    ml: '-5px',
                  }} 
                >
                  {Icons[route.acessos_icon]()}
                </ListItemIcon>
                <ListItemText primary={route.acessos_name} />
              </ListItem>


            </NavLink  >  
          ))}

        </List>

      </Drawer>



      <Container maxWidth="xl">
        <Box>
          <Toolbar />

          <Switch>
            {acessos.map((route, i) => {
                return <CustomRoute key={i} exact isPrivate path={route.acessos_path} component={IndexPages[route.acessos_component]} redirectTO={"/"}/> 
            })}
          </Switch>
        </Box>
      </Container>


      
      
    </Box>
  );
}






































