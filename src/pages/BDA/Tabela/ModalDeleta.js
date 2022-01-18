import React, { useContext } from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { TabelasContext } from '../../../Context/DB/TabelasContext';

export default function ModalDeleta() {

  const { 
    DropTable,
    openModalDeletaTable,
    set_modal_deleta_table
  } = useContext(TabelasContext);

  const handleSubmit = async() => {   
    await DropTable()
  }

  return (
    <Dialog open={openModalDeletaTable}>

      <DialogTitle>Deletar</DialogTitle>

      <DialogContent>


        <DialogContentText>
          Tem certeza que deseja deletar a tabela?
        </DialogContentText>


      </DialogContent>

      <DialogActions>
        <Button onClick={()=>{set_modal_deleta_table(false)}}>Cancelar</Button>
        <Button onClick={handleSubmit}>Deletar</Button>
      </DialogActions>
    </Dialog>
  );
}