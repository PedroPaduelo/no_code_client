import React  from "react";
import { Route, Redirect} from "react-router-dom";
import { useUserAuth } from '../hooks/useUserAuth';




function CustomRoute({ isPrivate, redirectTO, ...rest }) {
  
  const { loading, authenticated } = useUserAuth();

  if (isPrivate && loading) {
    return <h1>.</h1>;
  }else{
    if (isPrivate && !authenticated) {
      return <Redirect to={redirectTO} />
    }else{
      return <Route {...rest} />;
    }
  }
}


export default CustomRoute;