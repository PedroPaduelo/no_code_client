import  { useContextSelector } from 'use-context-selector'
import  { FlowContext } from '../Context/FlowContext'

export function useFlow(){

  const set_job_work = useContextSelector(FlowContext, flow => flow.set_job_work)
  const set_card = useContextSelector(FlowContext, flow => flow.set_card)
  const set_inputs = useContextSelector(FlowContext, flow => flow.set_inputs)
  const set_processo = useContextSelector(FlowContext, flow => flow.set_processo)
  const set_integracao_api = useContextSelector(FlowContext, flow => flow.set_integracao_api)
  const set_integracao_sheehts = useContextSelector(FlowContext, flow => flow.set_integracao_sheehts)
  const set_result = useContextSelector(FlowContext, flow => flow.set_result)

  const tbl_job_work = useContextSelector(FlowContext, flow => flow.tbl_job_work)
  const tbl_card = useContextSelector(FlowContext, flow => flow.tbl_card)
  const tbl_inputs = useContextSelector(FlowContext, flow => flow.tbl_inputs)
  const tbl_processo = useContextSelector(FlowContext, flow => flow.tbl_processo)
  const tbl_integracao_api = useContextSelector(FlowContext, flow => flow.tbl_integracao_api)
  const tbl_integracao_sheehts = useContextSelector(FlowContext, flow => flow.tbl_integracao_sheehts)
  const tbl_result = useContextSelector(FlowContext, flow => flow.tbl_result)
  
  const tbl_job_work_status = useContextSelector(FlowContext, flow => flow.tbl_job_work_status)
  const tbl_card_status = useContextSelector(FlowContext, flow => flow.tbl_card_status)
  const tbl_inputs_status = useContextSelector(FlowContext, flow => flow.tbl_inputs_status)
  const tbl_processo_status = useContextSelector(FlowContext, flow => flow.tbl_processo_status)
  const tbl_integracao_api_status = useContextSelector(FlowContext, flow => flow.tbl_integracao_api_status)
  const tbl_integracao_sheehts_status = useContextSelector(FlowContext, flow => flow.tbl_integracao_sheehts_status)
  const tbl_result_status = useContextSelector(FlowContext, flow => flow.tbl_result_status)

  const set_bd_job_work = useContextSelector(FlowContext, flow => flow.set_bd_job_work)

  const tbl_integracao_api_connect_result = useContextSelector(FlowContext, flow => flow.tbl_integracao_api_connect_result)

  const tipo = useContextSelector(FlowContext, flow => flow.tipo)

  const tbl_cards = useContextSelector(FlowContext, flow => flow.tbl_cards)

  return {
    set_job_work,
      set_card,
      set_inputs,
      set_processo,
      set_integracao_api,
      set_integracao_sheehts,
      set_bd_job_work,
      set_result,

      tbl_job_work,
      tbl_card,
      tbl_inputs,
      tbl_processo,
      tbl_integracao_api,
      tbl_integracao_sheehts,
      tbl_result,
      tbl_cards,


      tbl_job_work_status,
      tbl_card_status,
      tbl_inputs_status,
      tbl_processo_status,
      tbl_integracao_api_status,
      tbl_integracao_sheehts_status,
      tbl_result_status,



      tbl_integracao_api_connect_result,

      tipo
  }
}