import  { useContextSelector } from 'use-context-selector'
import  { BDContext } from '../Context/BDContext'

export function useBD(){

  const ListTables = useContextSelector(BDContext, BD => BD.ListTables)
  const CreatedTable = useContextSelector(BDContext, BD => BD.CreatedTable)
  const DropTable = useContextSelector(BDContext, BD => BD.DropTable)

  const AddColumnTable = useContextSelector(BDContext, BD => BD.AddColumnTable)
  const RenameColumnTable = useContextSelector(BDContext, BD => BD.RenameColumnTable)
  const DropColumnTable = useContextSelector(BDContext, BD => BD.DropColumnTable)

  const SelectTable = useContextSelector(BDContext, BD => BD.SelectTable) 


  const ListByIdCamposOfTables = useContextSelector(BDContext, BD => BD.ListByIdCamposOfTables)



  const ListCrudDadosBD = useContextSelector(BDContext, BD => BD.ListCrudDadosBD)



  const tbl_tables = useContextSelector(BDContext, BD => BD.tbl_tables)
  const tbl_campos = useContextSelector(BDContext, BD => BD.tbl_campos)
  const tbl_table = useContextSelector(BDContext, BD => BD.tbl_table)
  const tbl_dados = useContextSelector(BDContext, BD => BD.tbl_dados)

  const tbl_api_dados = useContextSelector(BDContext, BD => BD.tbl_api_dados)

  return {
    ListTables,
    CreatedTable,
    DropTable,

    AddColumnTable,
    RenameColumnTable,
    DropColumnTable,

    SelectTable,

    ListByIdCamposOfTables,


    ListCrudDadosBD,





    tbl_tables,
    tbl_campos,
    tbl_table,
    tbl_dados,
    tbl_api_dados
  }
}