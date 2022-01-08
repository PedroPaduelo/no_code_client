import React from 'react';

import { Switch } from "react-router-dom";
import CustomRoute from './CustomRoute'

import Login from "../Layout/Jwt/Login";

import DashboardContentLateral from '../Layout/DashboardContentLateral';


function Routes(){

  return(
    <Switch>
      <CustomRoute exact path="/" redirectTO={"/"} component={Login} />
      <CustomRoute isPrivate path="/Olympo" redirectTO={"/"} component={()=> <DashboardContentLateral/>} /> 
    </Switch>
  );
  
}

export default Routes;











































