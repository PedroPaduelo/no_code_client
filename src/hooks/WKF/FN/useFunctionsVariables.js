import  { useContextSelector } from 'use-context-selector'
import  { ContextFunctionsVariables } from '../../../Context/WKF/FN/ContextFunctionsVariables'

export function useFunctionsVariables(){
  // Context Set WKF
  const set_wkf_functions_variables = useContextSelector(ContextFunctionsVariables, (state) => state.set_wkf_functions_variables) 
  // Context Set WKF

  // Context Var WKF
  const tbl_wkf_functions_variables = useContextSelector(ContextFunctionsVariables, (state) => state.tbl_wkf_functions_variables)
  // Context Var WKF

  // Context Function Crud
  const CreatFnVariablesIn = useContextSelector(ContextFunctionsVariables, (state) => state.CreatFnVariablesIn)
  const UpdateFnVariablesIn = useContextSelector(ContextFunctionsVariables, (state) => state.UpdateFnVariablesIn)
  const ListFnVariablesIn = useContextSelector(ContextFunctionsVariables, (state) => state.ListFnVariablesIn)
  const DeletFnVariablesIn = useContextSelector(ContextFunctionsVariables, (state) => state.DeletFnVariablesIn)
 
  // Context Function Crud



  return {
    CreatFnVariablesIn,
    UpdateFnVariablesIn,
    ListFnVariablesIn,
    DeletFnVariablesIn,
    
    set_wkf_functions_variables,

    tbl_wkf_functions_variables,
  }
}