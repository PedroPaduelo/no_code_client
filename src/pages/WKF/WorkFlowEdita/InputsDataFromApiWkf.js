import { Grid, IconButton, MenuItem } from '@mui/material';
import React, { useEffect, useState } from 'react';
import ModeEditOutlineOutlinedIcon from '@mui/icons-material/ModeEditOutlineOutlined';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import SaveAsOutlinedIcon from '@mui/icons-material/SaveAsOutlined';

import { ImputTextUnControler, ImputSelectUnControler } from '../../../components/Inputs/InputCustom';
import { useWorkFlowVariables } from '../../../hooks/WKF/useWorkFlowVariables';

export function InputsDataFromApiWkf({wkf}) {

  const [var_id, svar_id] = useState("");
  const [var_name, svar_name] = useState("");
  const [var_type, svar_type] = useState("");
  const [var_defalut_value, svar_defalut_value] = useState("");

  const [flague_edit, sflague_edit] = useState(false);

  const { CreatWkfVariablesIn, ListWkfVariablesIn, tbl_wkf_variables_ins, DeletWkfVariablesIn, UpdateWkfVariablesIn } = useWorkFlowVariables();

  useEffect(() => {
    async function getUser() {
      try {
       await ListWkfVariablesIn(wkf.id)
      } catch (error) {
      }
    }
    getUser(); 
  }, [ListWkfVariablesIn, wkf.id]);


  const handleEditVar = async(dados) => {
    svar_id(dados.id)
    svar_name(dados.var_name)
    svar_type(dados.var_type)
    svar_defalut_value(dados.var_value.value)
    sflague_edit(true)
  };

  return(
    <Grid 
      container 
      spacing={0} 
    >
    
      <Grid 
        sx={{ 
          pb: '10px',
          pt: '10px',
          mt: '20px',
          borderBottom: '1px solid #e0e0e0',
          borderTop: '1px solid #e0e0e0',
        }}
      >
        <Grid item xs={12}
          sx={{ 
            display: 'flex',
          }}
        >
          
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

          <Grid item xs
            sx={{ 
              display: 'flex',
              justifyContent: 'flex-end',
              alignItems: 'end',
              pl: '10px', 
              
            }}
          >
            {flague_edit &&
              <IconButton 
                onClick={async () => {
                  
                  await UpdateWkfVariablesIn(
                    {
                      id: var_id,
                      id_wkf: wkf.id,
                      var_name,
                      var_type,
                      var_value: {
                        accessor: var_name,
                        type_accessor: "Dynamic API",
                        value: var_defalut_value
                      }
                    }
                  )
                  sflague_edit(false)
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
            }

            {!flague_edit &&
              <IconButton 
                onClick={async () => {
                  
                  await CreatWkfVariablesIn(
                    {
                      id_wkf: wkf.id,
                      var_name,
                      var_type,
                      var_value: {
                        accessor: var_name,
                        type_accessor: "Dynamic API",
                        value: var_defalut_value
                      }
                    }
                  )

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
                <AddCircleOutlineIcon/>
              </IconButton>
            }


            
          </Grid> 

        </Grid>
      </Grid>


      <Grid 
        item 
        xs={12} 
        sx={{ 
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'space-between',
          alignItems: 'space-between',
        }}
      >
        {tbl_wkf_variables_ins.map((item, index) => {
          return (
            <Grid 
              key={index}
              sx={{ 
                border: "1px solid #e0e0e0",
                borderRadius: "5px",
                backgroundColor: "#fafafa",
                padding: '5px',
                width: "100%",
                mt: '10px',
              }}
            >
              <Grid item xs={12}
                sx={{ 
                  display: 'flex',
                }}
              >
                
                <Grid item xs={3}>
              
                  <ImputTextUnControler
                    disabled={true}
                    value={item.var_name}
                    lebel="Variavel:"
                    flexDirection="column"
                    sx={{ 
                      width: "100%"
                    }}
                  />
                  
                </Grid>
                
                <Grid item xs={3}
                  sx={{
                    pl: '10px',
                  }}
                >
                  <ImputSelectUnControler 
                    disabled={true}
                    value={item.var_type}
                    lebel="Tipo:"
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

                <Grid item xs={6}
                  sx={{
                    pl: '10px',
                  }}
                >
                  <ImputTextUnControler
                    disabled={true}
                    value={item.var_value.value}
                    lebel="Valor padrão"
                    flexDirection="column"
                    sx={{ 
                      width: "100%"
                    }}
                  />
                </Grid> 

                <Grid item xs
                  sx={{ 
                    display: 'flex',
                    justifyContent: 'flex-end',
                    alignItems: 'end',
                    pl: '10px', 
                    
                  }}
                >
                  <IconButton 
                    onClick={() => {handleEditVar(item)}}
                    aria-label="delete" 
                    size="small"
                    sx={{
                      mr: '10px',
                    }}
                  >
                    <ModeEditOutlineOutlinedIcon/>
                  </IconButton>

                  <IconButton 
                    onClick={async () => {
                      await DeletWkfVariablesIn(item.id, wkf.id)
                    }}
                    aria-label="grava" 
                    size="small"
                    sx={{
                      mr: '5px'
                    }}
                  >
                    <DeleteOutlineIcon/>
                  </IconButton>
                  
                </Grid> 

              </Grid>
            </Grid>
          );
        })}
      </Grid>

      
    </Grid>
  );


}

