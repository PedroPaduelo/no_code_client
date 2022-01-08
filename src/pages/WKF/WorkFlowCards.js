
import React, { memo, useEffect } from 'react';
import Grid from '@mui/material/Grid';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import { IconButton } from '@mui/material';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import WorkFlowEdita from './WorkFlowEdita/WorkFlowEdita';
import { CardCuston } from '../../components/Cards/CardCuston';
import { useWorkFlow } from '../../hooks/WKF/useWorkFlow';
import { useFunctions } from '../../hooks/WKF/FN/useFunctions';



function WorkFlowCardsList({sopenFn}) {
  const { wkfs, ListWkf, DeletWkf, set_wkf } = useWorkFlow();
  const { ListFN, set_fns } = useFunctions();

  useEffect(() => {
    async function getUser() {
      try {
       await ListWkf()
      } catch (error) {
      }
    }
    getUser(); 
  }, [ListWkf]);

  return ( 
    <Grid 
      item 

      xs={12}
      sm={12} 
      md={12} 

      container
      direction="row"
      justifyContent="flex-start"
      alignItems="flex-start"
    >
      {
        wkfs.map((item, index) => {
          return (

            <CardCuston
              title={"Api WKF"}
              subtitle={item.wkf_name}
              time_ms={index}
              sx={{
                display: 'flex',
                flexWrap: "wrap",
                justifyContent: 'space-between'
              }}
            >

              <Grid item xs={12} 
                sx={{
                }}
              >
              </Grid>

              {/* Footer */}
              <Grid item xs={12} 
                sx={{
                  display: 'flex',
                  justifyContent: 'space-around',
                  width: '120px',
                  alignItems: 'center',

                }}
              >
                <WorkFlowEdita
                  dados={item}
                />

                <IconButton 
                  onClick={ async() => {
                    set_wkf(item)
                    await ListFN(item.id)
                    sopenFn(true)
                  }}
                  aria-label="delete"
                  size="small"
                >
                  <AddCircleOutlineIcon  fontSize="small" />
                </IconButton>

                <IconButton 
                  onClick={async () => {
                    await DeletWkf(item.id)
                    set_fns([])
                    sopenFn(false)
                  }}
                  aria-label="delete"
                  size="small"
                >
                  <DeleteOutlineOutlinedIcon  fontSize="small" />
                </IconButton>
              
              </Grid>

            </CardCuston>
                      
          )
        })
      }
    </Grid>
  );
}


export const WorkFlowCards = memo(WorkFlowCardsList);