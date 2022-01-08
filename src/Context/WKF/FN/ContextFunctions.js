import { useState, useCallback } from 'react';
import { createContext }  from 'use-context-selector';
import api from '../../../services/api';

const ContextFunctions = createContext();


function ProviderFunctions({ children }) {

  // Context Var WKF
  const [upDataList, supDataList] = useState(false);

  const [flag_name_fn] = useState(true);
  const [flag_variaveis_fn, sflag_variaveis_fn] = useState(false);
  const [flag_acoes_fn, sflag_acoes_fn] = useState(false);
  const [flag_condicoes_fn, sflag_condicoes_fn] = useState(false);

  const [ fn, sfn ] = useState({});
  const [ fns, sfns ] = useState([]);
  const [ fn_variables, sfn_variables ] = useState([{}]);
  const [ fn_process, sfn_process ] = useState({});
  const [ fn_conditions, sfn_conditions ] = useState([{}]);
  // Context Var WKF

  // Context Set WKF
  const set_fns = useCallback(async(data) => {
    sfns(data);
    return true
  },[])

  const set_fn = useCallback(async(data) => {
    sfn(data)
    sflag_variaveis_fn(true);
  },[])
  const set_fn_var = useCallback(async(data) => {
    sfn_variables(data)
    sflag_condicoes_fn(true);
  },[])
  const set_fn_conditions = useCallback(async(data) => {
    sfn_conditions(data)
    sflag_acoes_fn(true);
  },[])
  const set_fn_process = useCallback(async(data) => {
    sfn_process(data);
    return true
  },[])
  
  const set_upDataList = useCallback(async(data) => {
    supDataList(data);
    return true
  },[])

  const reset_sets = useCallback(() => {
    sfn({});
    sfn_variables([{}])
    sfn_process({})
    sfn_conditions([{}])

    sflag_variaveis_fn(false);
    sflag_acoes_fn(false);
    sflag_condicoes_fn(false);
    supDataList(false);

    return true
  },[])
  
  // Context Set WKF





  // Context Function Crud
  const ListFN = useCallback(async(id) => {
    const {data} =  await api.get(`/ListFullWorkFlow/${id}`);
    sfns(data)
  },[])


  const CreatFN = useCallback(async(dados) => {
    const {data} = await api.post(`/Creat/tbl_work_functions`, dados);
    await ListFN(dados.id_wkf)
    set_fn(data.result)
    if (data.status === 'success') {
      return true
    }
    return false
  },[ListFN, set_fn])



  const UpdateFN = useCallback(async(dados) => {
    const {data} = await api.put(`/Update/tbl_wkf_functions`, dados);
    await ListFN(dados.id_wkf)
    set_fn(data.result)
    if (data.status === 'success') {
      return true
    }
    return false
  },[ListFN, set_fn])
  const DeletFN = useCallback(async(id, id_wkf) => {
    await api.delete(`DeletByCol/tbl_wkf_functions/${id}`);
    await ListFN(id_wkf)
  },[ListFN])
  // Context Function Crud


 
  

  
  return (
    <ContextFunctions.Provider value={{ 
      set_upDataList,
      set_fns,
      set_fn,
      set_fn_var,
      set_fn_process,
      set_fn_conditions,

      reset_sets,


      ListFN,
      CreatFN,
      UpdateFN,
      DeletFN,

      fn,
      fns,
      fn_variables,
      fn_process,
      fn_conditions,
      upDataList,


      flag_name_fn,
      flag_variaveis_fn,
      flag_acoes_fn,
      flag_condicoes_fn,
      
      

    }}>
      {children}
    </ContextFunctions.Provider>
  );
}



export { ContextFunctions, ProviderFunctions };