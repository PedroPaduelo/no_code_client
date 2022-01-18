
import React, { useContext } from 'react';
import { Backdrop, Box, CircularProgress, Grid, IconButton} from '@mui/material';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';

import { HeaderCuston } from './HeaderCuston';
import ListTabelas from './ListTabelas';
import { TabelasContext } from '../../../Context/DB/TabelasContext';
import ModalCria from './ModalCria';
import ModalEdita from './ModalEdita';
import ModalDeleta from './ModalDeleta';
import { CampoBuscaTable } from './CampoBuscaTable';
import { CriaCamposTabelas } from './Campos/CriaCamposTabelas';






export function Tabelas() {
  const { 
    set_modal_cria_table,
    set_modal_cria_campo,
    set_loading,
    loading,
    table
   } = useContext(TabelasContext);





  return ( 
    <Grid container spacing={2}>


      <Grid item xs={4}>
        <HeaderCuston
          title="Tabelas"
        >
          <IconButton 
            sx={{
            }}
            onClick={() => {set_modal_cria_table(true)}}
            edge="end" 
            aria-label="delete"
          >
            <AddCircleOutlineIcon/>
          </IconButton>
        </HeaderCuston>

        <Box
          sx={{ 
            display: 'flex',
            flexDirection: 'column',
            mt: '1rem',
            mb: '1rem',
          }}
        >
          <CampoBuscaTable/>
        </Box>
          
        <Box>
          <ListTabelas/>
        </Box>
      </Grid>

      <Grid item xs={8}>
        <HeaderCuston
          title={`Tabela selecionada ( ${table || ""} )`}
        >
          <IconButton 
            sx={{
            }}
            onClick={() => {set_modal_cria_campo(true)}}
            edge="end" 
            aria-label="delete"
          >
            <AddCircleOutlineIcon/>
          </IconButton>
        </HeaderCuston>

        <Box>
          <CriaCamposTabelas/>
        </Box>
      </Grid>


      <Backdrop
        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={loading}
        onClick={() => {set_loading(false)}}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
      <ModalDeleta/>
      <ModalEdita/>
      <ModalCria/>
    </Grid>
    
  );
}

