import { Input } from '@mui/material';
import React from 'react';
// import { ImputTextUnControler } from '../../../components/Inputs/InputCustom';
import useInputCustom from '../../../hooks/Input/useInput';


function Teste() {


  const [ handleChange ] = useInputCustom()

  return(
    <div>
      <input  
        name="name"
        onChange={handleChange}            
      />
    </div>

  );
}

export default Teste;