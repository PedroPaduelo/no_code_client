import React, { useState } from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { IconButton } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';

import { ImputTextUnControler } from '../../../components/Inputs/InputCustom';
import { InputsDataFromApiWkf } from './InputsDataFromApiWkf';

import { useWorkFlow } from '../../../hooks/WKF/useWorkFlow';
import { ProviderWorkFlowVariables } from '../../../Context/WKF/ContextWorkFlowVariables';

export default function ModalCriaWorkFlow() {

  const { CreatWkf, UpdateWkf, DeletWkf, wkf } = useWorkFlow();

  const [open, setOpen] = useState(false);
  const [wkf_name, swkf_name] = useState("")
  const [wkf_descricao, swkf_descricao] = useState("")

  
  const handleClickOpen = async() => {
    await CreatWkf({
      id_app: 1,
      wkf_name: "New API workflow...",
      wkf_descricao,
    })
    setOpen(true);
  };
  const handleClose = async() => {
    await DeletWkf(wkf.id)
    setOpen(false);
  };
  const handleSubmit = async() => {      
    await UpdateWkf({
      id: wkf.id,
      id_app: 1,
      wkf_name,
      wkf_descricao
    })
    setOpen(false);
  }

  return (
    <div>
      <IconButton 
        sx={{
        }}
        onClick={handleClickOpen}
        edge="end" 
      >
        <AddIcon/>
      </IconButton>

      <Dialog open={open}>

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
          Criar Workflow
        </DialogTitle>

        <DialogContent
          sx={{
            width: "600px"
          }}
        >

          <DialogContentText
            sx={{
              fontSize: "14px",
              fontWeight: "bold",
              color: "text.primary",
              marginBottom: "10px"
            }}
          >
            Cria o Workflow e seus parametro ja todo para simplicficar.
          </DialogContentText>

          <ImputTextUnControler  
            lebel="Nome do campo"
            flexDirection="column"
            value={wkf_name}
            onChange={(e) => swkf_name(e.target.value)}
            sx={{ 
              width: "100%",  
            }}            
          />

          <ImputTextUnControler 
            lebel="Descrição:"
            flexDirection="column"
            multiline
            rows={2}
            value={wkf_descricao}
            onChange={(e) => swkf_descricao(e.target.value)}
            sx={{ 
              width: "100%",  
            }}            
          />

        <ProviderWorkFlowVariables>
          <InputsDataFromApiWkf
            wkf={wkf}
          />
        </ProviderWorkFlowVariables>

        </DialogContent>

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
          <Button onClick={handleSubmit}>
            Criar
          </Button>
        </DialogActions>

      </Dialog>
    </div>
  );
}