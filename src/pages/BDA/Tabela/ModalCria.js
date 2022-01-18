import React, { useContext, useState } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { TabelasContext } from '../../../Context/DB/TabelasContext';

export default function ModalCria() {
  const [table_name, stable_name] = useState('');

  const { 
    openModalCriaTable,
    set_modal_cria_table,
    CreatedTable
  } = useContext(TabelasContext);


  const handleClose = () => {
    set_modal_cria_table(false);
    stable_name("")
  };
  const handleSubmit = async() => {    
    await CreatedTable(table_name)
  }

  return (
    <Dialog open={openModalCriaTable}>
      <DialogTitle>Criar tabela</DialogTitle>
      <DialogContent>
        <DialogContentText>
          A tabela deve ter um nome simples e será criada no banco de dados.
        </DialogContentText>
        <TextField
          autoFocus
          margin="dense"
          id="name"
          label="Nome da tabela"
          type="text"
          fullWidth
          variant="outlined"
          value={table_name}
          onChange={(e)=>{stable_name(e.target.value)}}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Cancelar</Button>
        <Button onClick={handleSubmit}>Gravar</Button>
      </DialogActions>
    </Dialog>
  );
}