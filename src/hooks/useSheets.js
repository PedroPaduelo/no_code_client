import  { useContextSelector } from 'use-context-selector'
import  { SheetsContext } from '../Context/SheetsContext'

export function useSheets(){

  const GetDadosSheetsAndConect = useContextSelector(SheetsContext, sheets => sheets.GetDadosSheetsAndConect)

  const dadosSheets = useContextSelector(SheetsContext, sheets => sheets.dadosSheets)
  const load = useContextSelector(SheetsContext, sheets => sheets.load)
  
  return {
    GetDadosSheetsAndConect,
    dadosSheets,
    load
  }
}