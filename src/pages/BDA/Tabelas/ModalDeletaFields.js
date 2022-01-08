import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

import { useBD } from '../../../hooks/useBD';

export default function ModalDeletaFields({dados}) {
  const [open, setOpen] = React.useState(false);

  const {DropColumnTable, tbl_table} = useBD()


  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };



  const handleSubmit = async() => {  
    console.log(dados?.column_name, tbl_table.table_name )  
    await DropColumnTable({
      table_name: tbl_table.table_name,
      column_name: dados?.column_name,
    })
    handleClose()
  }


  return (
    <div>
      
      <IconButton 
        onClick={handleClickOpen}
        edge="end" 
        aria-label="edite"
        size="small"
      >
        <DeleteIcon  fontSize="small" />
      </IconButton>



      <Dialog open={open} onClose={handleClose}>

        <DialogTitle>Deletar</DialogTitle>

        <DialogContent>


          <DialogContentText>
            Tem certeza que deseja deletar o campo {dados.name}?
          </DialogContentText>


        </DialogContent>

        <DialogActions>
          <Button onClick={handleClose}>Cancelar</Button>
          <Button onClick={handleSubmit}>Deletar</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}