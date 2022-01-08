import React, { useCallback, useState } from 'react';
import  { createContext } from 'use-context-selector'

import api from '../services/api'

const SheetsContext = createContext();

function SheetsProvider({ children }) {

  const [ load, sload ] = useState(false);
  const [ dadosSheets, sdadosSheets ] = useState(false);



  const GetDadosSheetsAndConect = useCallback( async(sheets_id_url) => {
    

    try {
      sload(true);

      const { data } = await api.post(`/GetDadosSheetsAndConect`, {sheets_id_url});
      sdadosSheets(data)
    
      sload(false);
    } catch (error) {
      sload(false);
      
      console.log(error)
    }
  },[])





  
  return (
    <SheetsContext.Provider value={{ 
      GetDadosSheetsAndConect,

      dadosSheets,
      load
    }}>
      {children}
    </SheetsContext.Provider>
  );
}

export { SheetsContext, SheetsProvider };