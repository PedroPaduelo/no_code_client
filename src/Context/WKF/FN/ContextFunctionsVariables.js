import { useState, useCallback } from 'react';
import { createContext }  from 'use-context-selector';
import api from '../../../services/api';

const ContextFunctionsVariables = createContext();


function ProviderFunctionsVariables({ children }) {

  const [ tbl_wkf_functions_variables, stbl_wkf_functions_variables ] = useState([]);


  const set_wkf_functions_variables = useCallback(async(data) => {
    stbl_wkf_functions_variables(data)
  },[])

  const ListFnVariablesIn = useCallback(async(id) => {
    const {data} =  await api.get(`ListByCol/tbl_wkf_functions_variables/id_fn/${id}`);
    stbl_wkf_functions_variables(data.result)
  },[])

  const CreatFnVariablesIn = useCallback(async(dados) => {
    await api.post(`/Creat/tbl_wkf_functions_variables`, dados);
    await ListFnVariablesIn(dados.id_fn)
  },[ListFnVariablesIn])

  const UpdateFnVariablesIn = useCallback(async(dados) => {
    await api.put(`/Update/tbl_wkf_functions_variables`, dados);
    await ListFnVariablesIn(dados.id_fn)
  },[ListFnVariablesIn])

  const DeletFnVariablesIn = useCallback(async(id, id_fn) => {
    await api.delete(`DeletByCol/tbl_wkf_functions_variables/${id}`);
    await ListFnVariablesIn(id_fn)
  },[ListFnVariablesIn])
  






  return (
    <ContextFunctionsVariables.Provider value={{ 

      CreatFnVariablesIn,
      UpdateFnVariablesIn,
      ListFnVariablesIn,
      DeletFnVariablesIn,

      set_wkf_functions_variables,

      tbl_wkf_functions_variables      
    }}>
      {children}
    </ContextFunctionsVariables.Provider>
  );
}



export { ContextFunctionsVariables, ProviderFunctionsVariables };