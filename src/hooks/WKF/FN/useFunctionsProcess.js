import  { useContextSelector } from 'use-context-selector'
import  { ContextFunctionsProcess } from '../../../Context/WKF/FN/ContextFunctionsProcess'

export function useFunctionsProcess(){
  // Context Set WKF
  const set_wkf_functions_process = useContextSelector(ContextFunctionsProcess, (state) => state.set_wkf_functions_process)
  const set_disabled_procces = useContextSelector(ContextFunctionsProcess, (state) => state.set_disabled_procces)
  // Context Set WKF

  // Context Var WKF
  const tbl_wkf_functions_process = useContextSelector(ContextFunctionsProcess, (state) => state.tbl_wkf_functions_process)
  const disabled_procces = useContextSelector(ContextFunctionsProcess, (state) => state.disabled_procces)
  // Context Var WKF

  // Context Function Crud
  const CreatFnProcess = useContextSelector(ContextFunctionsProcess, (state) => state.CreatFnProcess)
  const UpdateFnProcess = useContextSelector(ContextFunctionsProcess, (state) => state.UpdateFnProcess)
  const ListFnProcess = useContextSelector(ContextFunctionsProcess, (state) => state.ListFnProcess)
  const DeletFnProcess = useContextSelector(ContextFunctionsProcess, (state) => state.DeletFnProcess)
 
  // Context Function Crud



  return {
    CreatFnProcess,
    UpdateFnProcess,
    ListFnProcess,
    DeletFnProcess,

    set_wkf_functions_process,
    set_disabled_procces,

    tbl_wkf_functions_process,
    disabled_procces
  }
}