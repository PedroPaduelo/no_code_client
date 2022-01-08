import { useState, useCallback } from 'react';
import { createContext }  from 'use-context-selector';
import api from '../../services/api';

const ContextWorkFlowVariables = createContext();


function ProviderWorkFlowVariables({ children }) {

  const [ tbl_wkf_variables_ins, stbl_wkf_variables_ins ] = useState([]);



  const ListWkfVariablesIn = useCallback(async(id) => {
    const {data} =  await api.get(`ListByCol/tbl_wkf_variables_in/id_wkf/${id}`);
    stbl_wkf_variables_ins(data.result)
  },[])

  const CreatWkfVariablesIn = useCallback(async(dados) => {
    await api.post(`/Creat/tbl_wkf_variables_in`, dados);
    await ListWkfVariablesIn(dados.id_wkf)
  },[ListWkfVariablesIn])

  const UpdateWkfVariablesIn = useCallback(async(dados) => {
    await api.put(`/Update/tbl_wkf_variables_in`, dados);
    await ListWkfVariablesIn(dados.id_wkf)
  },[ListWkfVariablesIn])

  const DeletWkfVariablesIn = useCallback(async(id, id_wkf) => {
    await api.delete(`DeletByCol/tbl_wkf_variables_in/${id}`);
    await ListWkfVariablesIn(id_wkf)
  },[ListWkfVariablesIn])
  






  return (
    <ContextWorkFlowVariables.Provider value={{ 

      CreatWkfVariablesIn,
      UpdateWkfVariablesIn,
      ListWkfVariablesIn,
      DeletWkfVariablesIn,

      tbl_wkf_variables_ins
      
    }}>
      {children}
    </ContextWorkFlowVariables.Provider>
  );
}



export { ContextWorkFlowVariables, ProviderWorkFlowVariables };