import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { IconButton } from '@mui/material';
import { useBD } from '../../../hooks/useBD';

export default function ModalCriaTabela({Icon}) {
  const [open, setOpen] = React.useState(false);

  const {CreatedTable } = useBD()

  const [table_name, stable_name] = React.useState("")


  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };



  const handleSubmit = async() => {    
    console.log(table_name)
    await CreatedTable(table_name)
    handleClose()
  }



  return (
    <div>
      <IconButton 
        sx={{
        }}
        onClick={handleClickOpen}
        edge="end" 
        aria-label="delete"
      >
        <Icon/>
      </IconButton>



      <Dialog open={open} onClose={handleClose}>
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
            variant="standard"
            value={table_name}
            onChange={(e)=>{stable_name(e.target.value)}}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Sair</Button>
          <Button onClick={handleSubmit}>Criar</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}