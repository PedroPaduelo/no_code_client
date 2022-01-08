import  { useContextSelector } from 'use-context-selector'
import  { WKFContext } from '../../Context/WKF/WKFContext'

export function useWKF(){
  // Set Context WKF
  const set_wkf = useContextSelector(WKFContext, (state) => state.set_wkf)
  const set_wkf_function = useContextSelector(WKFContext, (state) => state.set_wkf_function)
  const set_wkf_function_variables = useContextSelector(WKFContext, (state) => state.set_wkf_function_variables)
  const set_wkf_function_process = useContextSelector(WKFContext, (state) => state.set_wkf_function_process)
  const set_wkf_function_conditions = useContextSelector(WKFContext, (state) => state.set_wkf_function_conditions)
  
  // Set Context WKF


  // Context WKF
  const wkf =useContextSelector(WKFContext, (state) => state.wkf)
  const fn = useContextSelector(WKFContext, (state) => state.fn)
  const fn_variables = useContextSelector(WKFContext, (state) => state.fn_variables)
  const fn_process = useContextSelector(WKFContext, (state) => state.fn_process)
  const fn_conditions = useContextSelector(WKFContext, (state) => state.fn_conditions)
  // Context WKF


  const ListIdWkfFields = useContextSelector(WKFContext, BD => BD.ListIdWkfFields)
  const ListIdActions = useContextSelector(WKFContext, BD => BD.ListIdActions)
  const CreatFunctions = useContextSelector(WKFContext, BD => BD.CreatFunctions)
  const UpdateFunctions = useContextSelector(WKFContext, BD => BD.UpdateFunctions)


  const CreatWkf = useContextSelector(WKFContext, BD => BD.CreatWkf)
  const UpdateWkf = useContextSelector(WKFContext, BD => BD.UpdateWkf)
  const ListWkf = useContextSelector(WKFContext, BD => BD.ListWkf)



  const CreatWkfVariablesIn = useContextSelector(WKFContext, BD => BD.CreatWkfVariablesIn)
  const UpdateWkfVariablesIn = useContextSelector(WKFContext, BD => BD.UpdateWkfVariablesIn)
  const ListWkfVariablesIn = useContextSelector(WKFContext, BD => BD.ListWkfVariablesIn)
  const DeletWkfVariablesIn = useContextSelector(WKFContext, BD => BD.DeletWkfVariablesIn)

  const tbl_wkf_variables_ins = useContextSelector(WKFContext, BD => BD.tbl_wkf_variables_ins)




  const tbl_wkfs = useContextSelector(WKFContext, BD => BD.tbl_wkfs)
  const tbl_fields = useContextSelector(WKFContext, BD => BD.tbl_fields)
  const tbl_wkf_actions = useContextSelector(WKFContext, BD => BD.tbl_wkf_actions)


  // Layout WKF ativadores
  const flag_name_fn = useContextSelector(WKFContext, BD => BD.flag_name_fn)
  const flag_variaveis_fn = useContextSelector(WKFContext, BD => BD.flag_variaveis_fn)
  const flag_acoes_fn = useContextSelector(WKFContext, BD => BD.flag_acoes_fn)
  const flag_condicoes_fn = useContextSelector(WKFContext, BD => BD.flag_condicoes_fn)

  return {
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
  }
}