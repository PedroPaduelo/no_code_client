import  { useContextSelector } from 'use-context-selector'
import  { ContextWorkFlowVariables } from '../../Context/WKF/ContextWorkFlowVariables'

export function useWorkFlowVariables(){
  // Context Set WKF
    ////
  // Context Set WKF

  // Context Var WKF
  const tbl_wkf_variables_ins = useContextSelector(ContextWorkFlowVariables, (state) => state.tbl_wkf_variables_ins)
  // Context Var WKF

  // Context Function Crud
  const CreatWkfVariablesIn = useContextSelector(ContextWorkFlowVariables, (state) => state.CreatWkfVariablesIn)
  const UpdateWkfVariablesIn = useContextSelector(ContextWorkFlowVariables, (state) => state.UpdateWkfVariablesIn)
  const ListWkfVariablesIn = useContextSelector(ContextWorkFlowVariables, (state) => state.ListWkfVariablesIn)
  const DeletWkfVariablesIn = useContextSelector(ContextWorkFlowVariables, (state) => state.DeletWkfVariablesIn)
 
  // Context Function Crud



  return {
    CreatWkfVariablesIn,
    UpdateWkfVariablesIn,
    ListWkfVariablesIn,
    DeletWkfVariablesIn,

    tbl_wkf_variables_ins,
  }
}