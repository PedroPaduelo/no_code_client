import { useState, useEffect, useCallback } from 'react';
import { createContext }  from 'use-context-selector';
import api from '../services/api';

const AuthContext = createContext();


function AuthProvider({ children }) {

  const [ authenticated, setAuthenticated ] = useState(false);
  const [ loading, setLoading ] = useState(true);
  const [ user, setUser ] = useState();
  const [ acessos, sacessos ] = useState([]);

  const handleLogin = useCallback( async(user_password, user_email) => {

    // loga usuario
    const { data } = await api.post(`/User_Login`, {
      user_email, user_password
    });

    // valida se usuario existe
    if(!data.status === "failed"){
      return true
    }
    else{
      localStorage.setItem('token', JSON.stringify(data.data.user_token));
      api.defaults.headers.Authorization = `Bearer ${data.data.user_token}`;
  
      setUser(data.data)
      sacessos(data.data.acessos)

      setAuthenticated(true);
      setLoading(false)

      return true
    }
  },[])
  const handleUserRefresh = useCallback( async() => {

    const token = localStorage.getItem('token');
    api.defaults.headers.Authorization = `Bearer ${JSON.parse(token)}`;

    // loga usuario
    const { data } = await api.get(`/User_Refresh`);

    // valida se usuario existe
    if(!data.status === "failed"){
      console.log("data")
      setAuthenticated(false);
      setLoading(false)
      return true
    }

    else{
        
      setUser(data.data)
      sacessos(data.data.acessos)

      setAuthenticated(true);
      setLoading(false)

      return true
    }


    

    
  },[])
  function handleLogout() {
    setAuthenticated(false);
    localStorage.removeItem('token');
    api.defaults.headers.Authorization = undefined;
  }
  const UpdateUser = useCallback( async(dados) => {
    try {
      await api.put(`/User`, dados)
      return true
    } catch (error) {
      console.log(error)
    }
  },[])

  useEffect(() => {
    async function getUser() {
      try {
       await handleUserRefresh()
      } catch (error) {
        setAuthenticated(false);
        setLoading(false)
      }
    }
    getUser(); 
  }, [handleUserRefresh]);


  return (
    <AuthContext.Provider value={{ 
      user,
      acessos,
      authenticated,
      loading,

      handleLogin,
      handleLogout,
      UpdateUser
    }}>
      {children}
    </AuthContext.Provider>
  );
}

export { AuthContext, AuthProvider };