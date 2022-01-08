import React from 'react';
import { useFieldArray } from "react-hook-form";

import { Grid, IconButton, Tooltip } from '@mui/material';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import { ImputText } from '../../../../../../../components/Inputs/InputCustom';


export function ArrayFieldsApi({name, control, appendDados, headerTitle, disabled}) {

  const {
    fields,
    remove,
    append,
  } = useFieldArray({
    control,
    name: name
  });

  

  return (
    
    <Grid item xs={12}>
      
      <Grid item xs={12}
        sx={{ 
          display: "flex",
          justifyContent: "space-between",
          alignItems: 'center',
          borderBottom: '1px solid #ccc',
        }}
      >
        <p>{headerTitle}</p>
  
        <Tooltip 
          title="Adicionar" 
          aria-label="Adicionar" 
          placement="right"
          sx={{
            mr: "0px",
          }}
        >
          <IconButton 
            onClick={() => append(appendDados)}
            edge="end" 
            aria-label="add"
            disabled={disabled}
          >
            <AddCircleOutlineIcon/>
          </IconButton>
        </Tooltip>

      </Grid>

      {fields.map((item, index) => {
        return (

          <Grid item xs={12} key={item.id}
            sx={{ 
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <ImputText 
              control={control}
              flexDirection="column"
              nameField={`${name}.${index}.key`}
              lebel="key"
              disabled={disabled}
              sx={{
                mr: '5px',
              }}
            />

            <ImputText 
              control={control}
              flexDirection="column"
              nameField={`${name}.${index}.value`}
              lebel="value"
              disabled={disabled}
              sx={{
                ml: '5px',
                mr: '5px'
              }}
            />

            <Tooltip 
              title="Deletar item" 
              aria-label="Deletar item" 
              placement="right"
              sx={{
                mr: "0px",
                mt: "1rem",
              }}
            >
              <IconButton
                onClick={() => remove(index)}
                edge="end" 
                aria-label="add"
                disabled={disabled}
              >
                <DeleteForeverIcon/>
              </IconButton>
            </Tooltip>

          </Grid>

        );
      })}

    </Grid>
  );
}

