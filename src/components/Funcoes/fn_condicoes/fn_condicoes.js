import React, { useCallback, useState } from 'react';

import Zoom from '@mui/material/Zoom';

import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import SaveAsOutlinedIcon from '@mui/icons-material/SaveAsOutlined';
import ModeEditOutlinedIcon from '@mui/icons-material/ModeEditOutlined';
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';

import Modal from '../Modals/Modal';


import { useFunctions } from '../../hooks/WKF/FN/useFunctions';
import { Grid, IconButton, MenuItem } from '@mui/material';
import { ImputSelectUnControler, ImputTextUnControler } from '../Inputs/InputCustom';
import AcaoDaFuncao from './fn_process/AcaoDaFuncao';
import { useWorkFlow } from '../../hooks/WKF/useWorkFlow';


export default function FuncoesCria() {

  const {
    fn,
    CreatFN
  } = useFunctions();


  const { wkf } = useWorkFlow()

 
  const [fn_name, sfn_name] = useState(fn.fn_name||'')
  const [fn_type, sfn_type] = useState(fn.fn_type||'')


  const [var_index, svar_index] = useState("");
  const [var_name, svar_name] = useState("");
  const [var_type, svar_type] = useState("");
  const [var_defalut_value, svar_defalut_value] = useState("");
  const [vars, svars] = useState([]);
  const [flague_edit_var, sflague_edit_var] = useState(false);


  const [condicoes_index, scondicoes_index] = useState("");
  const [value_1, svalue_1] = useState("");
  const [sinal, ssinal] = useState("");
  const [value_2, svalue_2] = useState("");
  const [condicoes, scondicoes] = useState([]);
  const [flague_edit_condicoes, sflague_edit_condicoes] = useState(false);
  


  const set_var = useCallback((index) => {
    const filter_vars = vars[index]
    svar_name(filter_vars.var_name);
    svar_type(filter_vars.var_type);
    svar_defalut_value(filter_vars.var_defalut_value);
    svar_index(index)
    sflague_edit_var(true)
  },[vars])
  const edit_var = useCallback(() => {
    const auxi_vars = vars

    if (var_name !== "" && var_type !== "") {
      auxi_vars[var_index].var_name = var_name;
      auxi_vars[var_index].var_type = var_type;
      auxi_vars[var_index].var_defalut_value = var_defalut_value;
      sflague_edit_var(false)
      svars(auxi_vars)
    }else{
      alert("Preencha todos os campos")
      return
    }
  },[var_defalut_value, var_index, var_name, var_type, vars])
  const removeVar = useCallback((index) => {
    svars(vars.filter((_, i) => i !== index));
  },[vars])



  const set_condicoes = useCallback((index) => {
    const filter_condicoes = condicoes[index]

    svalue_1(filter_condicoes.value_1);
    ssinal(filter_condicoes.sinal);
    svalue_2(filter_condicoes.value_2);

    scondicoes_index(index)
    sflague_edit_condicoes(true)
  },[condicoes])
  const edit_condicoes = useCallback(() => {
    const auxi_condicoes = condicoes

    if (var_name !== "" && var_type !== "") {
      auxi_condicoes[condicoes_index].value_1 = value_1;
      auxi_condicoes[condicoes_index].sinal = sinal;
      auxi_condicoes[condicoes_index].value_2 = value_2;
      sflague_edit_var(false)
      svars(auxi_condicoes)
    }else{
      alert("Preencha todos os campos")
      return
    }
  },[condicoes, condicoes_index, sinal, value_1, value_2, var_name, var_type])
  const removeCondicoes = useCallback((index) => {
    scondicoes(condicoes.filter((_, i) => i !== index));
  },[condicoes])



  const gravar = useCallback(async() => {

    console.log({
      id_wk: wkf.id,
      fn_name,
      fn_type,
      is_have_condition: 0,
      variables: {vars},
      conditions: {condicoes}
    })

    await CreatFN({
      id_wk: wkf.id,
      fn_name,
      fn_type,
      is_have_condition: 0,
      variables: {vars},
      conditions: {condicoes}
    })

  },[CreatFN, condicoes, fn_name, fn_type, vars, wkf.id])



  const cancelar = useCallback(async(data) => {


  },[])


  return (

    <Modal
      gravar={gravar}
      cancelar={cancelar}
    >

      {/* Nome da função */}

      <Zoom in={true}>
        <div>

          {/* Nome da função */}
          <Grid item xs={12}
            sx={{ 
              display: 'flex',
              border: '1px solid #e0e0e0',
              borderRadius: '5px',
              padding: '10px',
              mt: '25px'
            }}
          >
            
            <Grid item xs={8}
              sx={{ 
                pr: "10px", 
              }} 
            >
              <ImputTextUnControler  
                lebel="Nome:"
                flexDirection="column"
                value={fn_name}
                onChange={(e) => sfn_name(e.target.value)}
                sx={{ 
                  width: "100%",
                  mr: "5px", 
                }}            
              />
            </Grid>

            <Grid item xs={4}>
              <ImputSelectUnControler 
                nameField={`type`} 
                lebel="Tipo:"
                value={fn_type}
                onChange={(e) => sfn_type(e.target.value)}
                flexDirection="column"
                helperText="Seleciona o tipo de campo"
                sx={{ 
                  width: "100%"
                }}
              >
                <MenuItem value="Api">
                  Executar Api
                </MenuItem>

                <MenuItem value="Dados_Insert">
                  Inserir Dados
                </MenuItem>

                <MenuItem value="Dados_List">
                  Listar Dados
                </MenuItem>

                <MenuItem value="Dado_Get">
                  Listar um Registro apenas
                </MenuItem>

                <MenuItem value="Dados_UpData">
                  Atualizar Dados
                </MenuItem>

                <MenuItem value="Dados_Delete">
                  Deletar Dados
                </MenuItem>

              </ImputSelectUnControler>
            </Grid>

          </Grid>

          {/* variaveis da função */}
          <Grid item xs={12}
            sx={{
              border: '1px solid #e0e0e0',
              borderRadius: '5px',
              padding: '10px',
              mt: '25px'
            }}
          >

            {/* Insere variaveis */}
            <Grid item xs={12}
              sx={{ 
                display: 'flex',
                mb: "7px"
              }}
            >
              {/* nome da variavel */}
              <Grid item xs={3}>
            
                <ImputTextUnControler
                  lebel="Variavel:"
                  flexDirection="column"
                  value={var_name}
                  onChange={(e) => svar_name(e.target.value)}
                  sx={{ 
                    width: "100%"
                  }}
                />
                
              </Grid>
              
              {/* Srelect tipo */}
              <Grid item xs={3}
                sx={{
                  pl: '10px',
                }}
              >
                <ImputSelectUnControler 
                  lebel="Tipo:"
                  value={var_type}
                  onChange={(e) => svar_type(e.target.value)}
                  flexDirection="column"
                  sx={{ 
                    width: "100%"
                  }}
                >
                  <MenuItem value="Texto estático">
                    Texto estático
                  </MenuItem>
                  <MenuItem value="Número estático">
                    Número estático
                  </MenuItem>
                  <MenuItem value="Caixa de seleção">
                    Caixa de seleção
                  </MenuItem>
                  <MenuItem value="Valor dinâmico">
                    Valor dinâmico
                  </MenuItem>
                  <MenuItem value="Matriz de chaves / valores">
                    Matriz de chaves / valores
                  </MenuItem>
                </ImputSelectUnControler>
              </Grid> 

              {/* Valor defalt */}
              <Grid item xs={6}
                sx={{
                  pl: '10px',
                }}
              >
                <ImputTextUnControler
                  lebel="Valor padrão"
                  flexDirection="column"
                  value={var_defalut_value}
                  onChange={(e) => svar_defalut_value(e.target.value)}
                  sx={{ 
                    width: "100%"
                  }}
                />
              </Grid> 

              {/* Ações */}
              <Grid item xs
                sx={{ 
                  display: 'flex',
                  justifyContent: 'flex-end',
                  alignItems: 'end',
                  pl: '10px', 
                  
                }}
              >
            
                <IconButton
                  disabled={!flague_edit_var}
                  onClick={async () => {
                    edit_var()  
                    sflague_edit_var(false)
                    svar_name("")
                    svar_type("")
                    svar_defalut_value("")
                  }}
                  aria-label="grava" 
                  size="small"
                  sx={{
                    mr: '5px'
                  }}
                >
                  <SaveAsOutlinedIcon/>
                </IconButton>
              
                <IconButton 
                  disabled={flague_edit_var}
                  onClick={() => {
                    if(var_name !== "" && var_type !== ""){
                      svars([...vars, {
                        var_name,
                        var_type,
                        var_defalut_value
                      }])
                      svar_name("")
                      svar_type("")
                      svar_defalut_value("")
                    }else{
                      alert("Preencha todos os campos")
                    }
                  }}

                  aria-label="grava" 
                  size="small"
                  sx={{
                    mr: '5px'
                  }}
                >
                  <AddCircleOutlineIcon/>
                </IconButton>
              
              </Grid> 
            </Grid> 

            {/* Lista de variaveis */}
            <Grid item xs={12}>
              {vars.map((item, index) => (
                <Grid item xs={12}
                  key={index}
                  sx={{ 
                    display: 'flex',
                    mb: "5px"
                  }}
                >
                  {/* nome da variavel */}
                  <Grid item xs={3}>
                
                    <ImputTextUnControler
                      flexDirection="column"
                      value={item.var_name}
                      disabled={true}
                      sx={{ 
                        width: "100%"
                      }}
                    />
                    
                  </Grid>
                  
                  {/* Srelect tipo */}
                  <Grid item xs={3}
                    sx={{
                      pl: '10px',
                    }}
                  >
                    <ImputSelectUnControler 
                      value={item.var_type}
                      disabled={true}
                      flexDirection="column"
                      sx={{ 
                        width: "100%"
                      }}
                    >
                      <MenuItem value="Texto estático">
                        Texto estático
                      </MenuItem>
                      <MenuItem value="Número estático">
                        Número estático
                      </MenuItem>
                      <MenuItem value="Caixa de seleção">
                        Caixa de seleção
                      </MenuItem>
                      <MenuItem value="Valor dinâmico">
                        Valor dinâmico
                      </MenuItem>
                      <MenuItem value="Matriz de chaves / valores">
                        Matriz de chaves / valores
                      </MenuItem>
                    </ImputSelectUnControler>
                  </Grid> 

                  {/* Valor defalt */}
                  <Grid item xs={6} 
                    sx={{
                      pl: '10px',
                    }}
                  >
                    <ImputTextUnControler
                      flexDirection="column"
                      value={item.var_defalut_value}
                      disabled={true}
                      sx={{ 
                        width: "100%"
                      }}
                    />
                  </Grid> 

                  {/* Ações */}
                  <Grid item xs
                    sx={{ 
                      display: 'flex',
                      justifyContent: 'flex-end',
                      alignItems: 'end',
                      pl: '10px', 
                      
                    }}
                  >
                    
                    <IconButton
                      onClick={() => {
                        set_var(index)
                      }}
                      aria-label="grava" 
                      size="small"
                      sx={{
                        mr: '5px'
                      }}
                    >
                      <ModeEditOutlinedIcon/>
                    </IconButton>
                    
                    <IconButton 
                      onClick={ () => {
                        removeVar(index)
                      }}

                      aria-label="grava" 
                      size="small"
                      sx={{
                        mr: '5px'
                      }}
                    >
                      <DeleteOutlinedIcon/>
                    </IconButton>
                    
                  </Grid> 
                </Grid> 
              ))}
            </Grid> 

          </Grid>

          {/* Condições da função */}
          <Grid item xs={12}
            sx={{
              border: '1px solid #e0e0e0',
              borderRadius: '5px',
              padding: '10px',
              mt: '25px'
            }}
          >

            {/* Condições da função */}
            <Grid item xs={12}
              sx={{ 
                display: 'flex',
                mb: "7px"
              }}
            >
              
              {/* valor 1 */}
              <Grid item xs={5}>
                <ImputSelectUnControler 
                  lebel="Value 1"
                  value={var_type}
                  onChange={(e) => svar_type(e.target.value)}
                  flexDirection="column"
                  sx={{ 
                    width: "100%",       
                  }}
                >
                  {[].map((item, index) => {
                    return (
                      <MenuItem key={index} value={item.stackfull}>{item.stackfull}</MenuItem>
                    )
                  })}
                </ImputSelectUnControler>
              </Grid>
              
              {/* sinal */}
              <Grid item xs={2}
                sx={{
                  pl: '10px',
                  pr: '10px',
                }}
              >
                <ImputSelectUnControler 
                  lebel="Sinal"
                  value={sinal}
                  onChange={(e) => ssinal(e.target.value)}
                  flexDirection="column"
                  sx={{ 
                    width: "100%",
                    textAlign: "center",       
                  }}
                >
                  <MenuItem value="=="> {"=="} </MenuItem>
                  <MenuItem value="!=="> {"!=="} </MenuItem>
                  <MenuItem value=">"> {">"} </MenuItem>
                  <MenuItem value="<"> {"<"} </MenuItem>
                  <MenuItem value=">="> {">="} </MenuItem>
                  <MenuItem value="<="> {"<="} </MenuItem>

                </ImputSelectUnControler>
              </Grid> 

              {/* valor 2  */}
              <Grid item xs={5}>
                <ImputSelectUnControler 
                  lebel="Value 2"
                  value={var_type}
                  onChange={(e) => svar_type(e.target.value)}
                  flexDirection="column"
                  sx={{ 
                    width: "100%",       
                  }}
                >
                  {[].map((item, index) => {
                    return (
                      <MenuItem key={index} value={item.stackfull}>{item.stackfull}</MenuItem>
                    )
                  })}
                </ImputSelectUnControler>
              </Grid>

              {/* Ações */}
              <Grid item xs
                sx={{ 
                  display: 'flex',
                  justifyContent: 'flex-end',
                  alignItems: 'end',
                  pl: '10px', 
                  
                }}
              >
                

                <IconButton
                  disabled={!flague_edit_condicoes}
                  onClick={async () => {
                    edit_condicoes()
                    svar_name("")
                    svar_type("")
                    svar_defalut_value("")
                  }}
                  aria-label="grava" 
                  size="small"
                  sx={{
                    mr: '5px'
                  }}
                >
                  <SaveAsOutlinedIcon/>
                </IconButton>

                <IconButton 
                  disabled={flague_edit_condicoes}
                  onClick={ async() => {
                    scondicoes([...condicoes, {
                      value_1,
                      sinal,
                      value_2
                    }])

                    svalue_1("")
                    ssinal("")
                    svalue_2("")
                  }}

                  aria-label="grava" 
                  size="small"
                  sx={{
                    mr: '5px'
                  }}
                >
                  <AddCircleOutlineIcon/>
                </IconButton>

              </Grid> 

            </Grid>

            {/* Lista de Condições */}
            <Grid item xs={12}>
              {condicoes.map((item, index) => (
                <Grid item xs={12}
                  key={index}
                  sx={{ 
                    display: 'flex',
                    mb: "5px"
                  }}
                >

                  {/* valor 1 */}
                  <Grid item xs={5}>
                    <ImputSelectUnControler 
                      value={item.value_1}
                      flexDirection="column"
                      disabled={true}
                      sx={{ 
                        width: "100%",       
                      }}
                    >
                      {[].map((item, index) => {
                        return (
                          <MenuItem key={index} value={item.stackfull}>{item.stackfull}</MenuItem>
                        )
                      })}
                    </ImputSelectUnControler>
                  </Grid>
                  
                  {/* sinal */}
                  <Grid item xs={2}
                    sx={{
                      pl: '10px',
                      pr: '10px',
                    }}
                  >
                    <ImputSelectUnControler 
                      value={item.sinal}
                      flexDirection="column"
                      disabled={true}
                      sx={{ 
                        width: "100%",
                        textAlign: "center",       
                      }}
                    >
                      <MenuItem value="=="> {"=="} </MenuItem>
                      <MenuItem value="!=="> {"!=="} </MenuItem>
                      <MenuItem value=">"> {">"} </MenuItem>
                      <MenuItem value="<"> {"<"} </MenuItem>
                      <MenuItem value=">="> {">="} </MenuItem>
                      <MenuItem value="<="> {"<="} </MenuItem>

                    </ImputSelectUnControler>
                  </Grid> 

                  {/* valor 2  */}
                  <Grid item xs={5}>
                    <ImputSelectUnControler 
                      value={item.value_2}
                      flexDirection="column"
                      disabled={true}
                      sx={{ 
                        width: "100%",       
                      }}
                    >
                      {[].map((item, index) => {
                        return (
                          <MenuItem key={index} value={item.stackfull}>{item.stackfull}</MenuItem>
                        )
                      })}
                    </ImputSelectUnControler>
                  </Grid>

                  {/* Ações */}
                  <Grid item xs
                    sx={{ 
                      display: 'flex',
                      justifyContent: 'flex-end',
                      alignItems: 'end',
                      pl: '10px', 
                      
                    }}
                  >
    
                    <IconButton
                      onClick={() => {
                        set_condicoes(index)

                      }}
                      aria-label="grava" 
                      size="small"
                      sx={{
                        mr: '5px'
                      }}
                    >
                      <ModeEditOutlinedIcon/>
                    </IconButton>
                    
                    <IconButton 
                      onClick={ () => {
                        removeCondicoes(index)
                      }}

                      aria-label="grava" 
                      size="small"
                      sx={{
                        mr: '5px'
                      }}
                    >
                      <DeleteOutlinedIcon/>
                    </IconButton>
                    
                  </Grid> 

                </Grid> 
              ))}
            </Grid>

          </Grid>

          {/* Acao Da Funcao */}
          <AcaoDaFuncao/>

        </div>
      </Zoom>
      

    </Modal>

  );
}