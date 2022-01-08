import { useState, useCallback } from 'react';
import { createContext }  from 'use-context-selector';
import api from '../../services/api';

const ContextWorkFlow = createContext();


function ProviderWorkFlow({ children }) {

  // Context Var WKF
  const [ wkf, swkf ] = useState({});
  const [ wkfs, swkfs ] = useState([]);
  // Context Var WKF





  // Context Set WKF
  const set_wkf = useCallback(async(data) => {
    swkf(data)
  },[])
  // Context Set WKF





  // Context Function Crud
  const ListWkf = useCallback(async() => {
    const {data} =  await api.get(`/ListFull/tbl_wkf`);
    swkfs(data.result)
  },[])
  const CreatWkf = useCallback(async(dados) => {
    const {data} = await api.post(`/Creat/tbl_wkf`, dados);
    swkf(data.result)
  },[])
  const UpdateWkf = useCallback(async(dados) => {
    await api.put(`/Update/tbl_wkf`, dados);
    await ListWkf()
  },[ListWkf])
  const DeletWkf = useCallback(async(id) => {
    console.log(id)
    await api.delete(`DeletByCol/tbl_wkf/${id}`);
    await ListWkf()
  },[ListWkf])
  // Context Function Crud





  
  return (
    <ContextWorkFlow.Provider value={{ 
      set_wkf,
      wkf,
      wkfs,

      CreatWkf,
      UpdateWkf,
      ListWkf,
      DeletWkf
      
    }}>
      {children}
    </ContextWorkFlow.Provider>
  );
}



export { ContextWorkFlow, ProviderWorkFlow };