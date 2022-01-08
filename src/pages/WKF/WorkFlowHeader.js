
import React, { memo } from 'react';
import Grid from '@mui/material/Grid';
import HeaderLine from '../../components/Heades/HeaderLine';
import ModalCriaWorkFlow from './WorkFlowCria/ModalCriaWorkFlow';

function WorkHeader() {

  return ( 
    <Grid 
      item 
      xs={12}
      container
      direction="row"
      justifyContent="flex-start"
      alignItems="center"
    >
      <HeaderLine title="Workflow">
        <ModalCriaWorkFlow/>
      </HeaderLine>
    </Grid>
  );
}


export const WorkFlowHeader = memo(WorkHeader);
