import { useState, useCallback, useEffect, createContext } from 'react';
import api from '../../services/api';

const TabelasContext = createContext();




function TabelasProvider({ children }) {
  const [ loading, sloading ] = useState(false);

  const [ openModalCriaTable, sopenModalCriaTable ] = useState(false);
  const [ openModalEditaTable, sopenModalEditaTable ] = useState(false);
  const [ openModalDeletaTable, sopenModalDeletaTable ] = useState(false);

  const [ openModalCriaCampo, sopenModalCriaCampo ] = useState(false);


  const [ table, stable ] = useState()
  const [ table_edit, stable_edit ] = useState()
  const [ tables, stables ] = useState([])
  const [ tables_render, stables_render ] = useState([])



  const [ campos, scampos ] = useState([]);
  const [ campos_render, scampos_render ] = useState([])





  const set_loading = useCallback(async(data) => {
    sloading(data);
  },[])


  const set_table = useCallback(async(data) => {
    stable(data);
  },[])
  const set_table_edit = useCallback(async(data) => {
    stable_edit(data)
    sopenModalEditaTable(true)
  },[])
  const set_tables = useCallback(async(data) => {
    stables(data);
  },[])
  const set_tables_render = useCallback(async(data) => {
    stables_render(data);
  },[])


  const set_modal_cria_table = useCallback(async(data) => {
    sopenModalCriaTable(data);
  },[])
  const set_modal_edit_table = useCallback(async(data) => {
    sopenModalEditaTable(data);
  },[])
  const set_modal_deleta_table = useCallback(async(data) => {
    sopenModalDeletaTable(data);
  },[])




  const set_modal_cria_campo = useCallback(async(data) => {
    sopenModalCriaCampo(data);
  },[])
  const set_campos = useCallback(async(data) => {
    scampos(data);
  },[])
  const set_campos_render = useCallback(async(data) => {
    scampos_render(data);
  },[])







  const ListTables = useCallback(async() => {
    const {data} =  await api.get(`/ListTables`);
    stables(data.data)
    stables_render(data.data)
  },[])
  const CreatedTable = useCallback(async(dados) => {
    sopenModalCriaTable(false)
    sloading(true);
    await api.post(`/CreatedTable`, {table_name: dados});
    await ListTables()
    sloading(false);

  },[ListTables])
  const RenameTable = useCallback(async(dados) => {
    set_modal_edit_table(false);
    sloading(true);

    await api.post(`/RenameTable`, dados);
    await ListTables()

    sloading(false);
  },[ListTables, set_modal_edit_table])
  const DropTable = useCallback(async() => {
    set_modal_deleta_table(false);
    sloading(true);

    const dadoDrop =  {
      table_name: table.table_name
    }
    await api.post(`/DropTable`, dadoDrop);

    await ListTables()
    sloading(false);
  },[ListTables, set_modal_deleta_table, table])






  const ListByIdCamposOfTables = useCallback(async(id) => {
    const {data} =  await api.get(`/ListFields/${id}`);
    scampos(data.data);
    scampos_render(data.data);
  },[])
  const AddColumnTable = useCallback(async(dados) => {
    sloading(true);
    await api.post(`/AddColumnTable`, dados);
    await ListByIdCamposOfTables(dados.table_name)
    sloading(false);
  },[ListByIdCamposOfTables])
  const RenameColumnTable = useCallback(async(dados) => {
    sloading(true);
    await api.post(`/RenameColumnTable`, dados);
    await ListByIdCamposOfTables(dados.table_name)
    sloading(false);
  },[ListByIdCamposOfTables])
  const DropColumnTable = useCallback(async(dados) => {
    sloading(true);
    await api.post(`/DropColumnTable`, dados);
    await ListByIdCamposOfTables(dados.table_name)
    sloading(false);
  },[ListByIdCamposOfTables])









  useEffect(() => {
    async function getUser() {
      try {
       await ListTables()
      } catch (error) {
      }
    }
    getUser(); 
  }, [ListTables]);











  


  return (
    <TabelasContext.Provider value={{ 

      CreatedTable,
      ListTables,
      RenameTable,
      DropTable,

      ListByIdCamposOfTables,
      AddColumnTable,
      RenameColumnTable,
      DropColumnTable,
      
      set_table,
      set_tables,
      set_tables_render,
      set_modal_cria_table,
      set_modal_edit_table,
      set_modal_deleta_table,
      set_table_edit,
      set_loading,


      set_modal_cria_campo,
      set_campos,
      set_campos_render,



      table,
      table_edit,
      tables,
      tables_render,
      openModalCriaTable,
      openModalEditaTable,
      openModalDeletaTable,
      loading,


      openModalCriaCampo,
      campos,
      campos_render

    }}>
      {children}
    </TabelasContext.Provider>
  );
}



export { TabelasContext, TabelasProvider };