import React from 'react';
import { Grid, MenuItem } from '@mui/material';
import { ArrayFieldsApi } from './ArrayFieldsApi';
import { ImputSelect, ImputText } from '../../../../../../../components/Inputs/InputCustom';

export function ProcessoApi({control, disabled}) {
  
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
        }}
      >
        
        <Grid item xs={9}
          sx={{ 
            mr: '10px',
          }}
        >
          <ImputText 
            control={control}
            flexDirection="column"
            nameField={`api_titulo`} 
            lebel="Nome Api:"
            widthLabel="8rem"
            disabled={disabled}
          />
        </Grid>

        <Grid item xs={3}>
          <ImputSelect 
            control={control}
            flexDirection="column"
            nameField={`api_tipo_authentication`} 
            lebel="Authentication:"
            disabled={disabled}
          >

            <MenuItem value={"HTTP Basic Auth"}>HTTP Basic Auth</MenuItem>
            <MenuItem value={"Private key in URL"}>Private key in URL</MenuItem>
            <MenuItem value={"JSON Web Token"}>JSON Web Token</MenuItem>

          </ImputSelect>
        </Grid>

      </Grid>

      <Grid item xs={12}
        sx={{ 
          display: 'flex',
        }}
      >
      
        <Grid item xs={2}
          sx={{ 
            mr: '10px',
          }}
        >
          <ImputSelect 
            control={control}
            flexDirection="column"
            nameField={`api_method`} 
            lebel="Method:"
            disabled={disabled}
          >
            <MenuItem value={"GET"}>GET</MenuItem>
            <MenuItem value={"POST"}>POST</MenuItem>
            <MenuItem value={"PUT"}>PUT</MenuItem>
            <MenuItem value={"DELETE"}>DELETE</MenuItem>

          </ImputSelect>
        </Grid>

        <Grid item xs={10}>
          <ImputText 
            control={control}
            flexDirection="column"
            nameField={`api_path`} 
            lebel="URL:"
            widthLabel="8rem"
            disabled={disabled}
          />
        </Grid>

      </Grid>

      <Grid item xs={12}
        sx={{ 
          display: 'flex',
        }}
      >
        
        <Grid item xs={6}
          sx={{
            border: '1px solid #ccc',
            borderRadius: '5px',
            padding: '5px',
            mt: '10px',
            mr: '10px',
          }}
        >
          <ArrayFieldsApi
            name={"api_headers"}
            control={control}
            appendDados={{ key: "", value: "" }}
            headerTitle={"Headers"}
            disabled={disabled}
          />
        </Grid>

        <Grid item xs={6}
          sx={{
            border: '1px solid #ccc',
            borderRadius: '5px',
            padding: '5px',
            mt: '10px',
          }}
        >
          <ArrayFieldsApi
            name={"api_parameters"}
            control={control}
            appendDados={{ key: "", value: "" }}
            headerTitle={"Parameters"}
            disabled={disabled}
          />
        </Grid>

      </Grid>
      
    </Grid>
  );
}

