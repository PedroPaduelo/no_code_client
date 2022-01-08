import React from 'react';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { Grid, IconButton, MenuItem } from '@mui/material';




import { ImputSelect, ImputSelectUnControler,  ImputText,  ImputTextUnControler } from '../../../../../../../components/Inputs/InputCustom';
import { useBD } from '../../../../../../../hooks/useBD';
import { useWorkFlowVariables } from '../../../../../../../hooks/WKF/useWorkFlowVariables';
import { useWorkFlow } from '../../../../../../../hooks/WKF/useWorkFlow';







export function DadosInsert({ disabled, control, append, remove, fields, watch }) {

  const { ListTables, tbl_tables, tbl_campos  } = useBD();
  const { ListWkfVariablesIn, tbl_wkf_variables_ins } = useWorkFlowVariables();
  const { wkf } = useWorkFlow()


  
  const [ data_insert_tipo_do_dados, sdata_insert_tipo_do_dados ] = React.useState();
  const [ data_insert_origem, sdata_insert_origem ] = React.useState();
  const [ data_insert_column, sdata_insert_column ] = React.useState();
  const [ data_insert_value, sdata_insert_value ] = React.useState();






  React.useEffect(() => {
    async function getUser() {
      try {
       await ListTables()
      } catch (error) {
      }
    }
    getUser(); 
  }, [ListTables]);


 

 


  const handleChangeCamposSet = async(event) => {


    await ListWkfVariablesIn(wkf.id)
    
    
    sdata_insert_origem(event.target.value)
  };
 

  return (
    <Grid 
      sx={{ 
        border: "1px solid #e0e0e0",
        borderRadius: "5px",
        backgroundColor: "#fafafa",
        mt: '20px',
        p: '10px',
      }}
    >

      <Grid item xs={12}
        sx={{ 
          display: 'flex',
          mb: '10px',
        }}
      >
        
        <Grid item xs={9}
          sx={{ 
            mr: '10px',
          }}
        >
          <ImputText 
            lebel="Name query data:"
            sx={{ 
              mb: '3px',
            }}

            control={control}
            nameField={`data_insert_titulo`} 

            flexDirection="column"
            
            widthLabel="8rem"
            disabled={disabled}
          />



          {/* <ImputTextUnControler 
            lebel="Name query data:"
            value={data_insert_titulo}
            onChange={(e) => sdata_insert_titulo(e.target.value)}

            flexDirection="column"
            
            widthLabel="8rem"
            disabled={disabled}
          /> */}



        </Grid>

        <Grid item xs={3}>
          <ImputSelect 
            lebel="Table:"
            sx={{ 
              mb: '3px',
            }}
            
            control={control}
            nameField={`table`}
            flexDirection="column"
            disabled={disabled}
          >

            {tbl_tables.map(table => (
              <MenuItem value={table.table_name}>{table.table_name}</MenuItem>
            ))}

          </ImputSelect>
        </Grid>

      </Grid>
      

    


      <Grid item xs={12}
        sx={{ 
          display: 'flex',
        }}
      >
      
        {/* Nome da campo */}
        <Grid item xs={4}
          sx={{ 
            mr: '10px',
          }}
        >
          <ImputSelectUnControler 
            lebel="Nome do campo:"
            sx={{ 
              mb: '3px',
            }}

            value={data_insert_column}
            onChange={(e) => sdata_insert_column(e.target.value)}

            flexDirection="column"
            widthLabel="8rem"
          >
            {tbl_campos.map(campo => (
              <MenuItem value={campo.column_name}>{campo.column_name}</MenuItem>
            ))}
          </ImputSelectUnControler>

          
        </Grid>

        {/* Tipo do dado   */}
        <Grid item xs={2}
          sx={{ 
            mr: '10px',
          }}
        >
          <ImputSelectUnControler 
            lebel="Tipo do dado:"
            sx={{ 
              mb: '3px',
            }}
            value={data_insert_tipo_do_dados}
            onChange={(e) => sdata_insert_tipo_do_dados(e.target.value)}
            flexDirection="column"
          >
            <MenuItem value={"Statico"}>Statico</MenuItem>
            <MenuItem value={"Dinamico"}>Dinamico</MenuItem>

          </ImputSelectUnControler>
        </Grid>

        {/*  value */}
        <Grid item xs={6}
          sx={{ 
            display: 'flex',
          }}
        >

          <Grid item xs={6}
            sx={{ 
              mr: '10px',
            }}
          >
            <ImputSelectUnControler 
              lebel="Origem:"
              sx={{ 
                mb: '3px',
              }}

              value={data_insert_origem}
              onChange={handleChangeCamposSet}
              flexDirection="column"
            >
              <MenuItem value={"wkf_variables"}>wkf_variables</MenuItem>
              <MenuItem value={"fn_variables"}>fn_variables</MenuItem>
              <MenuItem value={"fn_result"}>fn_result</MenuItem>
              
            </ImputSelectUnControler>
          </Grid>

          { data_insert_tipo_do_dados === "Dinamico" ? 
            <Grid item xs={6}
              sx={{ 
              }}
            >
              <ImputSelectUnControler 
                lebel="Value:"
                sx={{ 
                  mb: '3px',
                }}

                value={data_insert_value}
                onChange={(e) => sdata_insert_value(e.target.value)}
                flexDirection="column"
              >
                {tbl_wkf_variables_ins.map(campo => (
                  <MenuItem value={campo.var_name}>{campo.var_name}</MenuItem>
                ))}
                
              </ImputSelectUnControler>
              
            </Grid>
            : 
            <Grid item xs={6}>
              <ImputTextUnControler 
                lebel="Value:"
                sx={{ 
                  mb: '3px',
                }}

                onChange={(e) => sdata_insert_value(e.target.value)}
                flexDirection="column"
                disabled={disabled}
              />
            </Grid>
          }
        </Grid>

        <Grid item xs
          sx={{ 
            display: 'flex',
            justifyContent: 'flex-end',
            alignItems: 'end',
            pl: '10px', 
            pb: '2px',
          }}
        >
          
          <IconButton 
            disabled={disabled}
            onClick={ async() => {
              append({
                key: data_insert_column,
                type_data: data_insert_tipo_do_dados,
                origem: data_insert_origem,
                var: data_insert_value,
              });

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

      {fields.map((item, index) => {
        return (
        <Grid item xs={12}
          sx={{ 
            display: 'flex',
          }}
        >
        
          {/* Nome da campo */}
          <Grid item xs={4}
            sx={{ 
              mr: '10px',
            }}
          >
            <ImputText 
              sx={{ 
                mb: '3px',
              }}

              control={control}
              nameField={`dados.${index}.key`} 

              flexDirection="column"
              
              widthLabel="8rem"
              disabled={true}
            />
          </Grid>

          {/* Tipo do dado   */}
          <Grid item xs={2}
            sx={{ 
              mr: '10px',
            }}
          >
            <ImputSelect 
              sx={{ 
                mb: '3px',
              }}
              control={control}
              nameField={`dados.${index}.type_data`}
              flexDirection="column"
              disabled={true}
            >
              <MenuItem value={"Statico"}>Statico</MenuItem>
              <MenuItem value={"Dinamico"}>Dinamico</MenuItem>

            </ImputSelect>
          </Grid>

          {/*  value */}
          <Grid item xs={6}
            sx={{ 
              display: 'flex',
            }}
          >
            <Grid item xs={6}
              sx={{ 
                mr: '10px',
              }}
            >
              <ImputSelect 
                sx={{ 
                  mb: '3px',
                }}

                control={control}
                nameField={`dados.${index}.origem`}
                flexDirection="column"
                disabled={true}
              >
                <MenuItem value={"wkf_variables"}>wkf_variables</MenuItem>
                <MenuItem value={"fn_variables"}>fn_variables</MenuItem>
                <MenuItem value={"fn_result"}>fn_result</MenuItem>
                
              </ImputSelect>
            </Grid>

            <Grid item xs={6}>
              <ImputText
                sx={{ 
                  mb: '3px',
                }}
                control={control}
                nameField={`dados.${index}.var`}
                flexDirection="column"
                disabled={true}
              />
            </Grid>

          </Grid>


          <Grid item xs
            sx={{ 
              display: 'flex',
              justifyContent: 'flex-end',
              alignItems: 'end',
              pl: '10px', 
              pb: '2px',
            }}
          >
            
            <IconButton 
              disabled={disabled}
              onClick={ async() => {
                remove(index);
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
    
        )
      })}
      



    </Grid>
  );
}

