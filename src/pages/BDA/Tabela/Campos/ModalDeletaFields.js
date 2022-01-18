import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import { TabelasContext } from '../../../../Context/DB/TabelasContext';

export default function ModalDeletaFields({dados}) {
  const [open, setOpen] = React.useState(false);



  const { 
    DropColumnTable,
    table
   } = React.useContext(TabelasContext);


  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };



  const handleSubmit = async() => {  
    handleClose()
    await DropColumnTable({
      table_name: table,
      column_name: dados?.column_name,
    })
    
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