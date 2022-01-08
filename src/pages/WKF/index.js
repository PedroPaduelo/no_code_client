
import React, { useState } from 'react';
import Grid from '@mui/material/Grid';


import { Funcoes } from './Funcoes/Funcoes';
import { WorkFlowHeader } from './WorkFlowHeader';
import { WorkFlowCards } from './WorkFlowCards';
import { ProviderWorkFlow } from '../../Context/WKF/ContextWorkFlow';
import { ProviderFunctions } from '../../Context/WKF/FN/ContextFunctions';
import { ProviderFunctionsVariables } from '../../Context/WKF/FN/ContextFunctionsVariables';
import { ProviderFunctionsProcess } from '../../Context/WKF/FN/ContextFunctionsProcess';
import { BDProvider } from '../../Context/BDContext';
import { ProviderWorkFlowVariables } from '../../Context/WKF/ContextWorkFlowVariables';

export function WorkingFlow() {

  const [openFn, sopenFn] = useState(false);

  return ( 
    <Grid container rowSpacing={2} columnSpacing={{ xs: 1, sm: 2, md: 0 }} >
      <ProviderWorkFlow>
        {/* Header de criação do WorkFlow */}
        <WorkFlowHeader/>
        <BDProvider>
          <ProviderFunctions>
            <ProviderFunctionsVariables>
              <ProviderFunctionsProcess>
                <ProviderWorkFlowVariables>
                  {/* Cards de WorkFlow */}
                  <WorkFlowCards sopenFn={sopenFn} />
              
                  {/* Componente de criação edição e visualização de Funlções */}
                  <Funcoes openFn={openFn} sopenFn={sopenFn} />
                </ProviderWorkFlowVariables>
              </ProviderFunctionsProcess>
            </ProviderFunctionsVariables>
          </ProviderFunctions>
        </BDProvider>
      </ProviderWorkFlow>
        
  </Grid>
  );
}

