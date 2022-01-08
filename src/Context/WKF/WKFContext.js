import { useState, useCallback } from 'react';
import { createContext }  from 'use-context-selector';
import api from '../../services/api';

const WKFContext = createContext();




function WKFProvider({ children }) {

  const [flag_name_fn] = useState(true);
  const [flag_variaveis_fn, sflag_variaveis_fn] = useState(false);
  const [flag_acoes_fn, sflag_acoes_fn] = useState(false);
  const [flag_condicoes_fn, sflag_condicoes_fn] = useState(false);

  const [ wkf, swkf ] = useState({});
  const [ fn, sfn ] = useState({});
  const [ fn_variables, sfn_variables ] = useState([{}]);
  const [ fn_process, sfn_process ] = useState({});
  const [ fn_conditions, sfn_conditions ] = useState([{}]);
  const [ fn_field, sfn_field ] = useState([]);

  const [ tbl_wkfs, stbl_wkfs ] = useState([]);


  const [ tbl_fields, stbl_fields ] = useState([]);
  const [ tbl_wkf_actions, stbl_wkf_actions ] = useState([]);
  const [ tbl_wkf_variables_ins, stbl_wkf_variables_ins ] = useState([]);

  

  // Set Context WKF 
  const set_wkf = useCallback(async(data) => {
    swkf(data)
  },[])




  const set_wkf_function = useCallback(async(data) => {
  
    if(
      data.fn_name === "" ||
      data.fn_type === ""
    ){
      alert("Preencha todos os campos!");
      return false;
    }else{
      sfn({...data});
      sflag_variaveis_fn(true);
      return true
    }
  },[])
  const set_wkf_function_variables = useCallback(async(data) => {
    let fn_variables = []
    let field_var = fn_field

    if(data.length === 0){
      return false;
    }else{

      data.variaveis.map(item => {
        if(item.var_name === "" || item.var_type === ""){
        }else{
          fn_variables.push(item)
        }

        const stack = item.var_name
        const stackroot = "data_from_var_functions"
        const stackfull = stackroot + "." + fn.fn_name + "." + stack
        

        if(field_var.find(item => item.stackfull === stackfull)){
          
        }else{
          field_var.push({
            stack: stack,
            stackroot: stackroot,
            stackfull: stackfull,
            type: item.var_type
          })
        }

        return true
      });
      
     
      if(field_var.length > 0){
        sfn_field(field_var)
      }

      sfn_variables(fn_variables);
      sflag_acoes_fn(true);
      return true
    }
  },[fn.fn_name, fn_field])
  const set_wkf_function_process = useCallback(async(data) => {
    sfn_process(data);
    sflag_condicoes_fn(true);
    return true
  },[])
  const set_wkf_function_conditions = useCallback(async(data) => {
    let fn_conditions = []

    if(data.length === 0){
      return false;
    }else{
      data.condicoes.map(item => {
        if(item.conditions_value_1 === "" || item.conditions_comparator === "" || item.conditions_value_2 === ""){
        }else{
          fn_conditions.push(item)
        }
        return true
      });
      
      sfn_conditions(fn_conditions);
      sflag_acoes_fn(true);
      return true
    }
  },[])
  // Set Context WKF 

  















  const ListIdWkfFields = useCallback(async() => {
    const {data} =  await api.get(`/ListIdWkfFields/${wkf}`);
    stbl_fields(data.result)
  },[wkf])
  const ListIdActions = useCallback(async(id) => {
 
    stbl_wkf_actions([])
    const {data} =  await api.get(`/ListIdActions/${id}`);
    stbl_wkf_actions(data.result)
  },[])
  




  // FUNCTIONS 
  const CreatFunctions = useCallback(async() => {
    const dados = {
      id_wkf: wkf.id,
      ...fn,
      fn_variables: fn_variables, 
      fn_process: fn_process,
      fn_conditions: fn_conditions
    }
    await api.post(`/CreatFunctions`, dados);
    await ListIdActions(wkf.id);
    
  },[ListIdActions, fn, fn_conditions, fn_process, fn_variables, wkf.id])
  const UpdateFunctions = useCallback(async(id) => {
    const dados = {
      id_wkf: wkf.id,
      id: id,
      ...fn,
      fn_variables: fn_variables, 
      fn_process: fn_process,
      fn_conditions: fn_conditions
    }
    await api.put(`/UpdateFunctions`, dados);
    await ListIdActions(wkf.id);
  },[ListIdActions, fn, fn_conditions, fn_process, fn_variables, wkf.id])

  



  // WKF Functions 
  const ListWkf = useCallback(async() => {
    const {data} =  await api.get(`/ListFull/tbl_wkf`);
    
    stbl_wkfs(data.result)
  },[])
  const CreatWkf = useCallback(async(dados) => {
    const {data} = await api.post(`/Creat/tbl_wkf`, dados);
    swkf(data.result)
  },[])
  const UpdateWkf = useCallback(async(dados) => {
    await api.put(`/Update/tbl_wkf`, dados);
    await ListWkf()
  },[ListWkf])
  



  const ListWkfVariablesIn = useCallback(async(id) => {
    const {data} =  await api.get(`ListByCol/tbl_wkf_variables_in/id_wkf/${id}`);
    stbl_wkf_variables_ins(data.result)
  },[])
  const CreatWkfVariablesIn = useCallback(async(dados) => {
    await api.post(`/Creat/tbl_wkf_variables_in`, dados);
    await ListWkfVariablesIn(wkf.id)
  },[ListWkfVariablesIn, wkf.id])
  const UpdateWkfVariablesIn = useCallback(async(dados) => {
    await api.put(`/Update/tbl_wkf_variables_in`, dados);
    await ListWkfVariablesIn(wkf.id)
  },[ListWkfVariablesIn, wkf.id])
  const DeletWkfVariablesIn = useCallback(async(id) => {
    await api.delete(`DeletByCol/tbl_wkf_variables_in/${id}`);
    await ListWkfVariablesIn(wkf.id)
  },[ListWkfVariablesIn, wkf.id])











  return (
    <WKFContext.Provider value={{ 
      set_wkf,
      set_wkf_function,
      set_wkf_function_variables,
      set_wkf_function_process,
      set_wkf_function_conditions,

      wkf,
      fn,
      fn_variables,
      fn_process,
      fn_conditions,
      fn_field,

      ListIdWkfFields,
      ListIdActions,
      CreatFunctions,
      UpdateFunctions,

      CreatWkf,
      UpdateWkf,
      ListWkf,

      CreatWkfVariablesIn,
      UpdateWkfVariablesIn,
      ListWkfVariablesIn,
      DeletWkfVariablesIn,

      tbl_wkf_variables_ins,



      tbl_wkfs,
      tbl_fields,
      tbl_wkf_actions,

      flag_name_fn,
      flag_variaveis_fn,
      flag_acoes_fn,
      flag_condicoes_fn,
      
    }}>
      {children}
    </WKFContext.Provider>
  );
}



export { WKFContext, WKFProvider };