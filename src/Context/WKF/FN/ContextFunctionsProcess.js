import { useState, useCallback } from 'react';
import { createContext }  from 'use-context-selector';
import api from '../../../services/api';

const ContextFunctionsProcess = createContext();


function ProviderFunctionsProcess({ children }) {

  const [ tbl_wkf_functions_process, stbl_wkf_functions_process ] = useState([]);

  const [ disabled_procces, sdisabled_procces ] = useState(false);


  const set_disabled_procces = useCallback((data) => {
    sdisabled_procces(data)
  },[])


  const set_wkf_functions_process = useCallback(async(data) => {
    stbl_wkf_functions_process(data)
    sdisabled_procces(true)
  },[])

  const ListFnProcess = useCallback(async(id) => {
    const {data} =  await api.get(`ListByCol/tbl_wkf_functions_process/id_fn/${id}`);
    stbl_wkf_functions_process(data.result)
  },[])

  const CreatFnProcess = useCallback(async(dados) => {
    await api.post(`/Creat/tbl_wkf_functions_process`, dados);
    await ListFnProcess(dados.id_fn)
  },[ListFnProcess])

  const UpdateFnProcess = useCallback(async(dados) => {
    console.log(dados)
    await api.put(`/Update/tbl_wkf_functions_process`, dados);
    await ListFnProcess(dados.id_fn)
  },[ListFnProcess])

  const DeletFnProcess = useCallback(async(id, id_fn) => {
    await api.delete(`DeletByCol/tbl_wkf_functions_process/${id}`);
    await ListFnProcess(id_fn)
  },[ListFnProcess])
  





  return (
    <ContextFunctionsProcess.Provider value={{ 

      CreatFnProcess,
      UpdateFnProcess,
      ListFnProcess,
      DeletFnProcess,

      set_wkf_functions_process,
      set_disabled_procces,

      tbl_wkf_functions_process,
      disabled_procces  
    }}>
      {children}
    </ContextFunctionsProcess.Provider>
  );
}



export { ContextFunctionsProcess, ProviderFunctionsProcess };