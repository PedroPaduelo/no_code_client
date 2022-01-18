import React, { useContext, useState } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { TabelasContext } from '../../../Context/DB/TabelasContext';

export default function ModalEdita() {
  const [table_name, stable_name] = useState('');

  const { 
    openModalEditaTable,
    table_edit,
    set_modal_edit_table,
    RenameTable
  } = useContext(TabelasContext);


  const handleClose = () => {
    stable_name("")
  };
  const handleSubmit = async() => {    
    const oldTableName = table_edit.table_name;
    const newTableName = table_name;

    await RenameTable({oldTableName, newTableName})
    handleClose()
  }

  
  return (
    <Dialog open={openModalEditaTable}>
      <DialogTitle>Criar tabela</DialogTitle>
      <DialogContent>
        <DialogContentText>
          A tabela deve ter um nome simples e será criada no banco de dados.
        </DialogContentText>
        <TextField
          autoFocus
          disabled
          margin="dense"
          id="name"
          label="Nome da tabela"
          type="text"
          fullWidth
          variant="outlined"
          value={table_edit?.table_name}
        />

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
        <Button onClick={()=>{set_modal_edit_table(false)}}>Cancelar</Button>
        <Button onClick={handleSubmit}>Atualizar</Button>
      </DialogActions>
    </Dialog>
  );
}