import React, { useState } from 'react';
import { ImputTextUnControler } from '../../../components/Inputs/InputCustom';


function Teste2() {
  const [wkf_descricao, swkf_descricao] = useState("")

  return(
    <div>
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
    </div>

  );
}

export default Teste2;