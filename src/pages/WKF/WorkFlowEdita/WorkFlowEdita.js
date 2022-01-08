import * as React from 'react';

import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import PreviewIcon from '@mui/icons-material/Preview';
import { InputsDataFromApiWkf } from './InputsDataFromApiWkf';
import { ImputTextUnControler } from '../../../components/Inputs/InputCustom';
import { IconButton } from '@mui/material';
import { useWorkFlow } from '../../../hooks/WKF/useWorkFlow';
import { ProviderWorkFlowVariables } from '../../../Context/WKF/ContextWorkFlowVariables';

export default function WorkFlowEdita({dados}) {

  const { UpdateWkf, set_wkf, wkf } = useWorkFlow();

  const [open, setOpen] = React.useState(false);
  const [wkf_name, swkf_name] = React.useState(dados.wkf_name || '');
  const [wkf_descricao, swkf_descricao] = React.useState(dados.wkf_descricao || '');
  
  
  const handleClickOpen = async() => {
    set_wkf(dados)
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const handleSubmit = async() => {  

    await UpdateWkf({
      id: dados.id,
      id_app: 1,
      wkf_name,
      wkf_descricao,
    })

    handleClose()
  }



  return (
    <div>
      <IconButton 
        onClick={handleClickOpen}
        aria-label="delete"
        size="small"
      >
        <PreviewIcon  fontSize="small" />
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
            Salvar
          </Button>
        </DialogActions>

      </Dialog>
    </div>
  );
}