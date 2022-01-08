import React, { memo, useState } from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

import { IconButton } from '@mui/material';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';




export default function Modal_m({children, gravar, cancelar}) {

  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = async() => {
    gravar();
    setOpen(false);
  };

  return (
    <div>
      <IconButton 
        sx={{
        }}
        onClick={handleClickOpen}
        edge="end" 
        aria-label="delete"
      >
        <AddCircleOutlineIcon/>
      </IconButton>



      <Dialog 
        fullWidth={true}
        maxWidth={"md"}
        open={open} 
      >

        {/* Titulo do Modal */}
        <DialogTitle
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: '0.5rem 1rem',
            borderBottom: '1px solid #e0e0e0',
            fontSize: '1.5rem',
            fontWeight: 'bold',
            color: '#000',
            backgroundColor: '#fff',
            mb: '5px',
          }}
        >
          Criar Action
        </DialogTitle>




        <DialogContent>
          {/* Sub titulo do Modal */}
          <DialogContentText
            sx={{
              fontSize: "17px",
              color: "text.primary",
              marginBottom: "25px"
            }}
          >
            Cria a sua função de forma simples e rapida.
          </DialogContentText>

          {children}
            
        </DialogContent>





        {/* Roda pé com ações de garavar e finalizar */}
        <DialogActions
          sx={{
            display: 'flex',
            justifyContent: 'end',
            alignItems: 'center',
            padding: '0.5rem 1rem',
            borderTop: '1px solid #e0e0e0',
            fontSize: '1.5rem',
            fontWeight: 'bold',
            color: '#000',
            backgroundColor: '#fff',
            mb: '5px',
          }}
        >
          <Button onClick={handleClose}>
            Cancelar
          </Button>
          <Button onClick={handleClose}>
            Salvar
          </Button>
        </DialogActions>

      </Dialog>
    </div>
  );
}


export const Modal = memo(Modal_m);