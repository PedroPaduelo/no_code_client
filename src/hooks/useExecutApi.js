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

  const Update = useCallback(async(tabela, dados) => {
    const {data} =  await api.post(`/Update_By_Id/${tabela}`, dados);
    return data.result
  },[])

  const Delete = useCallback(async(tabela, id) => {
    const {data} =  await api.post(`/Delete_By_Id/${tabela}/${id}`);
    return data.result
  },[])

  return {
    List,
    Creat,
    Update,
    Delete
  }
}