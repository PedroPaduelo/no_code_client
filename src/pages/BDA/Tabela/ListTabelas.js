import React, { memo, useContext } from 'react';
import Box from '@mui/material/Box';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import DeleteIcon from '@mui/icons-material/Delete';
import ModeEditOutlineIcon from '@mui/icons-material/ModeEditOutline';
import { IconButton } from '@mui/material';
import ViewComfyIcon from '@mui/icons-material/ViewComfy';
import TableViewIcon from '@mui/icons-material/TableView';

import { TabelasContext } from '../../../Context/DB/TabelasContext';

export function ListTabela() {

  const { 
    set_table,
    set_table_edit,
    set_modal_deleta_table,
    ListByIdCamposOfTables,
    tables_render
   } = useContext(TabelasContext);

  return (
    <Box sx={{ width: '100%', bgcolor: 'background.paper' }}>
      <nav aria-label="main mailbox folders">
     
        {
          tables_render.map((item, index) => ( 
            <ListItem 
              key={index}
              disablePadding
              dense={true}
              secondaryAction={
                item.table_type !== 'VIEW' &&
                <>  
                  <IconButton 
                    sx={{
                      mr: 0.5,
                    }}
                    onClick={() => {
                      set_table_edit(item)
                    }}
                    edge="end" 
                    aria-label="delete"
                    size="small"
                  >
                    <ModeEditOutlineIcon  fontSize="small" />
                  </IconButton>

                  <IconButton 
                    onClick={() => {
                      set_table(item)
                      set_modal_deleta_table(true)
                    }}
                    edge="end" 
                    aria-label="delete"
                    size="small"
                  >
                    <DeleteIcon  fontSize="small" />
                  </IconButton>
                </>
              }
            >
              <ListItemButton
                onClick={async () => {
                  set_table(item.table_name)
                  await ListByIdCamposOfTables(item.table_name)
                }}
              >
                { item.table_type === 'VIEW' ? 

                  <TableViewIcon 
                    fontSize="small"
                    sx={{
                      color: "#707070",
                      mr: 1,
                    }}
                  />
                  
                  :

                  <ViewComfyIcon
                    fontSize="small"
                    sx={{
                      color: "#707070",
                      mr: 1,
                    }}
                  />
                  
                }

                <ListItemText primary={item.table_name} />
              </ListItemButton>
            </ListItem>
          ))
        }

      </nav>
    </Box>
  );
}

const ListTabelas = memo(ListTabela);
export default ListTabelas