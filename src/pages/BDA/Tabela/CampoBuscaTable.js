
import React, { useContext } from 'react';
import { Typography } from '@mui/material';
import { styled , alpha} from '@mui/system';
import { InputBase } from '@mui/material';
import { TabelasContext } from '../../../Context/DB/TabelasContext';

const Input = styled(InputBase)(({theme}) => ({
  '& .MuiInputBase-input': {
    borderRadius: 4,
    backgroundColor: theme.palette.mode === 'light' ? '#fcfcfb' : '#2b2b2b',
    border: '1px solid #ced4da',
    fontSize: 14,
    padding: '5px',
    transition: theme.transitions.create([
      'border-color',
      'background-color',
      'box-shadow',
    ]),
    '&:focus': {
      boxShadow: `${alpha(theme.palette.primary.main, 0.25)} 0 0 0 0.1rem`,
      borderColor: theme.palette.primary.main,
    }
  }
}));


export function CampoBuscaTable() {

  const { 
    tables,
    set_tables_render
  } = useContext(TabelasContext);

  
  const [value, setValue] = React.useState('');


  return ( 
    <>
      <Typography variant="subtitle2"
        sx= {{
          width: '100%',
        }}
      >
        Busca Tabela
      </Typography>

      <Input
        value={value}
        onChange={(e) => {
          const tables_filters = tables.filter(value => value.table_name.includes(e.target.value))
          set_tables_render(tables_filters)
          setValue(e.target.value)
        }}
      />
    </>
    
  );
}

