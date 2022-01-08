import { useState, useCallback } from 'react';
import { createContext }  from 'use-context-selector';
import api from '../services/api';

const BDContext = createContext();




function BDProvider({ children }) {

  const [ tbl_api_dados ] = useState([]);
  const [ tbl_table, stbl_table ] = useState([]);
  const [ tbl_tables, stbl_tables ] = useState([]);
  const [ tbl_campos, stbl_campos ] = useState([]);

  const [ tbl_dados, stbl_dados ] = useState("");


  const ListTables = useCallback(async() => {
    const {data} =  await api.get(`/ListTables`);
    stbl_tables(data.data)
  },[])

  const CreatedTable = useCallback(async(dados) => {

    await api.post(`/CreatedTable`, {table_name: dados});
    await ListTables()
  },[ListTables])

  const DropTable = useCallback(async(dados) => {

    const dadoDrop =  {
      table_name: dados.table_name,
      id: dados.id
    }

    await api.post(`/DropTable`, dadoDrop);




    await ListTables()


  },[ListTables])

  const ListByIdCamposOfTables = useCallback(async(id) => {
    const {data} =  await api.get(`/ListFields/${id}`);
    stbl_campos(data.data);
  },[])

  const AddColumnTable = useCallback(async(dados) => {
    
    await api.post(`/AddColumnTable`, dados);
    await ListByIdCamposOfTables(dados.table_name)
  },[ListByIdCamposOfTables])

  const RenameColumnTable = useCallback(async(dados) => {
    await api.post(`/RenameColumnTable`, dados);
    await ListByIdCamposOfTables(dados.table_name)
  },[ListByIdCamposOfTables])
  
  const DropColumnTable = useCallback(async(dados) => {

    await api.post(`/DropColumnTable`, dados);
    await ListByIdCamposOfTables(dados.table_name)

  },[ListByIdCamposOfTables])









  const ListCrudDadosBD = useCallback(async(dados) => {
    console.log(dados)
    
    const {data} =  await api.get(`/ListCrud_DBA/${dados.table_name}`);

    const header =  data.data.fields.map(key => {
      return{
        Header: key.name,
        accessor: key.name,
        align: "left",
      }
    })

    stbl_dados({dados: data.data.rows, header});
  },[])













  const SelectTable = useCallback(async(data) => {
    stbl_table(data);
  },[])


  return (
    <BDContext.Provider value={{ 
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
    }}>
      {children}
    </BDContext.Provider>
  );
}



export { BDContext, BDProvider };