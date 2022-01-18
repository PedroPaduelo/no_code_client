import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { IconButton, MenuItem } from '@mui/material';
import ModeEditIcon from '@mui/icons-material/ModeEdit';
import { ImputSelectUnControler, ImputTextUnControler } from '../../../../components/Inputs/InputCustom';
import { TabelasContext } from '../../../../Context/DB/TabelasContext';



export default function ModalEditaFields({dados}) {
  const [open, setOpen] = React.useState(false);

  const { 
    RenameColumnTable,
    table
   } = React.useContext(TabelasContext);

  const [column_name, scolumn_name] = React.useState(dados?.column_name)
  const [column_type, scolumn_type] = React.useState(dados?.data_type)
  const [column_length, scolumn_length] = React.useState(dados?.character_maximum_length)
  const [column_default, scolumn_default] = React.useState(dados?.column_default)
  const [column_not_null, scolumn_not_null] = React.useState(dados?.is_nullable === 'YES' ? "Sim" : "Não")
  

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmit = async() => {  
    handleClose()  
    await RenameColumnTable({
      table_name: table,
      column_name: dados?.column_name,
      new_column_name: column_name,
      column_type,
      column_length,
      column_default,
      column_not_null
    })
  }

  return (
    <div>
      
      <IconButton 
        sx={{
          mr: 1,
        }}
        onClick={handleClickOpen}
        edge="end" 
        aria-label="edite"
        size="small"
      >
        <ModeEditIcon  fontSize="small" />
      </IconButton>



      <Dialog open={open} onClose={handleClose}>

        <DialogTitle>Editar Campo</DialogTitle>

        <DialogContent>


          <DialogContentText>
            Edita os campos para a tablea selecionada.
          </DialogContentText>

          <ImputTextUnControler  
            lebel="Nome do campo"
            flexDirection="column"
            value={column_name}
            onChange={(e) => scolumn_name(e.target.value)}
            sx={{ 
              width: "100%",  
            }}            
          />

          <ImputSelectUnControler 
            nameField="api_tipo_authentication"
            lebel="Tipo do campo"
            disabled={true}
            flexDirection="column"
            value={column_type}
            onChange={(e) => scolumn_type(e.target.value)}
            sx={{ 
              width: "100%"
            }}
          >
            <MenuItem value={"string"}>String</MenuItem>
            <MenuItem value={"text"}>Text</MenuItem>

            <MenuItem value={"integer"}>Integer</MenuItem>
            <MenuItem value={"bigInteger"}>Big Integer</MenuItem>
            <MenuItem value={"float"}>Float</MenuItem>
            <MenuItem value={"double"}>Double</MenuItem>
            <MenuItem value={"decimal"}>Decimal</MenuItem>

            <MenuItem value={"date"}>Date</MenuItem>
            <MenuItem value={"dateTime"}>DateTime</MenuItem>
            <MenuItem value={"time"}>Time</MenuItem>
            <MenuItem value={"timestamp"}>Timestamp</MenuItem>
            
          </ImputSelectUnControler>

          <ImputTextUnControler 
            lebel="Tamanho do campo"
            flexDirection="column"
            disabled={true}
            value={column_length}
            onChange={(e) => scolumn_length(e.target.value)}
            sx={{ 
              width: "100%",  
            }}            
          />

          <ImputTextUnControler 
            lebel="Valor padrão"
            flexDirection="column"
            value={column_default}
            onChange={(e) => scolumn_default(e.target.value)}
            sx={{ 
              width: "100%",  
            }}            
          />


          <ImputSelectUnControler 
            lebel="Pode ser vazio"
            flexDirection="column"
            value={column_not_null}
            onChange={(e) => scolumn_not_null(e.target.value)}
            sx={{ 
              width: "100%"
            }}
          >
            <MenuItem value={"Sim"}>Sim</MenuItem>
            <MenuItem value={"Não"}>Não</MenuItem>
          </ImputSelectUnControler>

        </DialogContent>

        <DialogActions>
          <Button onClick={handleClose}>Sair</Button>
          <Button onClick={handleSubmit}>Salvar</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}