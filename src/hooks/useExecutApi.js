import { useCallback } from 'react';
import api from '../services/api';

export function useExecutApi(){
 
  const Creat = useCallback(async(tabela, dados) => {
    const {data} =  await api.post(`/Creat/${tabela}`, dados );
    return data.result
  },[])

  const List = useCallback(async(tabela) => {
    const {data} =  await api.get(`/List_Full/${tabela}`);
    return data.result
  },[])

  const List_Raw = useCallback(async(tabela) => {
    
    const {data} =  await api.get(`/BD_P_List_Dados/${tabela}`);
    return data.result
  },[])
  
  const Update = useCallback(async(tabela, dados) => {
    const {data} =  await api.post(`/Update_By_Id/${tabela}`, dados);
    return data.result
  },[])

  const Delete = useCallback(async(tabela, id) => {
    const {data} =  await api.post(`/Delete_By_Id/${tabela}/${id}`);
    return data.result
  },[])

  const Sql_Raw = useCallback(async(dados) => {
    try {
      const {data} =  await api.post(`/Execut_Raw`,{dados});
      console.log(data.result)
      return data.result
     } catch (error) {
      console.log(error)
      return false
     }
  },[])

  const Api_Knext = useCallback(async(dados) => {
    try {
      const {data} =  await api.post(`/Api_Knext `,dados);
      console.log(data.result)
      return data.result
     } catch (error) {
      return false
     }
  },[])


  

  return {
    List,
    List_Raw,
    Creat,
    Update,
    Delete,

    Sql_Raw,
    Api_Knext
  }
}
