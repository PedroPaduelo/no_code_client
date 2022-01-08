import  { useContextSelector } from 'use-context-selector'
import  { ContextFunctions } from '../../../Context/WKF/FN/ContextFunctions'

export function useFunctions(){
  // Context Set WKF
  const set_upDataList = useContextSelector(ContextFunctions, (state) => state.set_upDataList)
  const set_fns = useContextSelector(ContextFunctions, (state) => state.set_fns)
  const set_fn = useContextSelector(ContextFunctions, (state) => state.set_fn)
  const set_fn_var = useContextSelector(ContextFunctions, (state) => state.set_fn_var)
  const set_fn_process = useContextSelector(ContextFunctions, (state) => state.set_fn_process)
  const set_fn_conditions = useContextSelector(ContextFunctions, (state) => state.set_fn_conditions)
  const reset_sets = useContextSelector(ContextFunctions, (state) => state.reset_sets)
  // Context Set WKF

  // Context Var WKF
  const fn =useContextSelector(ContextFunctions, (state) => state.fn)
  const fns =useContextSelector(ContextFunctions, (state) => state.fns)
  const fn_variables = useContextSelector(ContextFunctions, (state) => state.fn_variables)
  const fn_process = useContextSelector(ContextFunctions, (state) => state.fn_process)
  const fn_conditions = useContextSelector(ContextFunctions, (state) => state.fn_conditions)
  const upDataList = useContextSelector(ContextFunctions, (state) => state.upDataList)


  const flag_name_fn = useContextSelector(ContextFunctions, (state) => state.flag_name_fn)
  const flag_variaveis_fn = useContextSelector(ContextFunctions, (state) => state.flag_variaveis_fn)
  const flag_acoes_fn = useContextSelector(ContextFunctions, (state) => state.flag_acoes_fn)
  const flag_condicoes_fn = useContextSelector(ContextFunctions, (state) => state.flag_condicoes_fn)
  // Context Var WKF


  // Context Function Crud
  const CreatFN = useContextSelector(ContextFunctions, (state) => state.CreatFN)
  const UpdateFN = useContextSelector(ContextFunctions, (state) => state.UpdateFN)
  const ListFN = useContextSelector(ContextFunctions, (state) => state.ListFN)
  const DeletFN = useContextSelector(ContextFunctions, (state) => state.DeletFN)
  // Context Function Crud



  return {
    set_upDataList,
    set_fns,
    set_fn,
    set_fn_var,
    set_fn_process,
    set_fn_conditions,
    reset_sets,

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
    
    CreatFN,
    UpdateFN,
    ListFN,
    DeletFN

  }
}