import { useState, useCallback } from 'react';
import { createContext }  from 'use-context-selector';
import { useUserAuth } from '../hooks/useUserAuth';
import api from '../services/api';

const FlowContext = createContext();

function FlowProvider({ children }) {

  const { user } = useUserAuth();

  const [tipo, setTipo] = useState();


  const [ tbl_job_work, stbl_job_work ] = useState({});
  const [ tbl_job_work_status, stbl_job_work_status ] = useState(false);

  const [ tbl_card, stbl_card ] = useState({});
  const [ tbl_card_status, stbl_card_status ] = useState(false);

  const [ tbl_inputs, stbl_inputs ] = useState([{}]);
  const [ tbl_inputs_status, stbl_inputs_status ] = useState(false);

  const [ tbl_processo, stbl_processo ] = useState({});
  const [ tbl_processo_status, stbl_processo_status ] = useState(false);

  const [ tbl_result, stbl_result ] = useState([]);
  const [ tbl_result_status, stbl_result_status ] = useState(false);
  

  const [ tbl_integracao_api, stbl_integracao_api ] = useState({});
  const [ tbl_integracao_api_status, stbl_integracao_api_status ] = useState(false);
  const [ tbl_integracao_api_connect_result, stbl_integracao_api_connect_result ] = useState({});

  const [ tbl_integracao_sheehts, stbl_integracao_sheehts ] = useState({});
  const [ tbl_integracao_sheehts_status, stbl_integracao_sheehts_status ] = useState(false);





  const [ tbl_cards, stbl_cards ] = useState([]);



  const set_job_work = useCallback(async(dados) => {

    const job_work_name = dados.job_work_name;
    const job_work_desc = dados.job_work_desc;
    const user_created = user.user_email;
    const user_updated = user.user_email;

    if(job_work_name === "" || job_work_desc === "" ){
      return false
    }

    const {data} =  await api.post(`/CreatJobWorks`,{
      job_work_name,
      job_work_desc,
      user_created,
      user_updated,
    });
    
    stbl_job_work_status(data?.status);

    stbl_job_work({
      id: data?.data.id,
      job_work_name,
      job_work_desc,
      user_created,
      user_updated,
    })

    return true

  },[user])

  const set_card = useCallback((dados) => {

    const cards_name = dados.cards_name;
    const cards_descr = dados.cards_descr;
    const cards_tipo = dados.cards_descr;
    const user_created = user.user_email;
    const user_updated = user.user_email;


    if(cards_name === "" || cards_descr === "" || cards_tipo === "" ){
      return false
    }

    stbl_card({
      cards_name,
      cards_descr,
      cards_tipo,
      user_created,
      user_updated,
    })
    stbl_card_status(true)

    return true

  },[user])

  const set_inputs = useCallback((dados) => {

    stbl_inputs(dados)
    stbl_inputs_status(true)

    return true

  },[])

  const set_processo = useCallback((dados) => {

    const processo_name = dados.processo_name;
    const user_created = user.user_email;
    const user_updated = user.user_email;

    if(processo_name === ""){
      return false
    }

  
    stbl_processo({
      processo_name,
      user_created,
      user_updated,
    })

    setTipo(dados.processo_tipo)
    stbl_processo_status(true)

    return true

  },[user])







  const set_integracao_api = useCallback( async (dados) => {

    const api_titulo = dados.api_titulo;
    const api_tipo_authentication = dados.api_tipo_authentication;
    const api_headers = dados.api_headers;
    const api_parameters = dados.api_parameters;
    const api_method = dados.api_method;
    const api_path = dados.api_path;
    

    const user_created = user.user_email;
    const user_updated = user.user_email;


    if(api_titulo === "" || api_tipo_authentication === "" || api_headers === "" || api_parameters === "" || api_method === "" || api_path === "" ){
      return false
    }


    const connectApiResult = await api.post(`/ActionApiConnect`, {
        api_headers,
        api_parameters,
        api_method,
        api_path,
    })
  

    stbl_integracao_api_connect_result(connectApiResult.data)



    stbl_integracao_api({
      api_titulo,
      api_tipo_authentication,
      api_headers,
      api_parameters,
      api_method,
      api_path,
      user_created,
      user_updated,
    })

    stbl_integracao_api_status(true)

    return true

  },[user])

  const set_integracao_sheehts = useCallback( async (dados) => {


    const user_created = user.user_email;
    const user_updated = user.user_email;

    stbl_integracao_sheehts({
      ...dados,
      user_created,
      user_updated,
    })
    stbl_integracao_sheehts_status(true)

    return true

  },[user])



  const set_result = useCallback((dados) => {

    console.log(dados)
    
    stbl_result(dados)
    
    console.log(tbl_result)

    stbl_result_status(true)

    return true

  },[tbl_result])









  const set_bd_job_work = useCallback(async () => {

    const job_work = {
      ...tbl_job_work,
      card: {
        ...tbl_card,
        inputs: [
          ...tbl_inputs,
        ],
      },
      processo: {
        ...tbl_processo,
        integracao_api: tbl_integracao_api,
        integracao_sheehts: tbl_integracao_sheehts
      },
      result: tbl_result,
    }
  
    const result = await api.post(`/WorkSpaceCore`, job_work);

    if(result.data.status === "success"){
      stbl_card({});
      stbl_card_status(false);
      stbl_inputs([{}]);
      stbl_inputs_status(false);

      stbl_processo({});
      stbl_processo_status(false);

      stbl_result([]);
      stbl_result_status(false);
        
      stbl_integracao_api({});
      stbl_integracao_api_status(false);
      stbl_integracao_api_connect_result({});

      stbl_integracao_sheehts({});
      stbl_integracao_sheehts_status(false);


      const result = await api.get(`/ListCardFullByIdJobWork/${tbl_job_work?.id}`);
      
      stbl_cards(result.data.data);

    }


    return true

  },[tbl_card, tbl_inputs, tbl_integracao_api, tbl_integracao_sheehts, tbl_job_work, tbl_processo, tbl_result])







  return (
    <FlowContext.Provider value={{ 
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
    }}>
      {children}
    </FlowContext.Provider>
  );
}

export { FlowContext, FlowProvider };