import * as React from 'react';
import Box from '@mui/material/Box';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import DeleteIcon from '@mui/icons-material/Delete';
import { IconButton } from '@mui/material';
import { useBD } from '../../../hooks/useBD';

export default function ListTabelas() {

  const {ListTables, DropTable, ListByIdCamposOfTables,  tbl_tables, SelectTable, ListCrudDadosBD  } = useBD();

  const [ select, sselect ] = React.useState();

  React.useEffect(() => {
    async function getUser() {
      try {
       await ListTables()
      } catch (error) {
      }
    }
    getUser(); 
  }, [ListTables]);



  return (
    <Box>
      <nav aria-label="main mailbox folders">
     
        {
          tbl_tables.map((item, index) => ( 
            <ListItem disablePadding
            selected={item.table_name === select}
            dense={true}
            secondaryAction={
              <IconButton 
                onClick={() => {DropTable(item)} }
                edge="end" 
                aria-label="delete"
                size="small"
              >
                <DeleteIcon  fontSize="small" />
              </IconButton>
            }
          >
            <ListItemButton
              onClick={ async () => {
                sselect(item.table_name)
                SelectTable(item)
                await ListCrudDadosBD(item)
                await ListByIdCamposOfTables(item.table_name)} 
              }
            >
              <ListItemText primary={item.table_name} />
            </ListItemButton>
          </ListItem>
          ))
        }

      </nav>
    </Box>
  );
}