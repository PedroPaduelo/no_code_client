
import React from 'react';
import { SelectFieldCustonUncontrole, TextFieldCustonUncontrole } from './InputsPrimitivosUncontroler/InputsPrimitivosUncontroler';


export function SwitchInputPrimitivoArray({
  onChangeCuston,
  valueCuston,
  item
}) {

  switch (item.type) {

    case "text":
      return (
        <TextFieldCustonUncontrole 

          md={item.colunms.md} 
          sm={item.colunms.sm} 
          xs={item.colunms.xs} 
          lg={item.colunms.lg} 
          xl={item.colunms.xl} 

          label={item.label} 
          nameFilde={item.nameFilde} 
          placeholder={item.placeholder}
          sxInput={item.sxInput}

          onChange={onChangeCuston}
          value={valueCuston}
        />
      )



    case "select":
      return (
        <SelectFieldCustonUncontrole 

          md={item.colunms.md} 
          sm={item.colunms.sm} 
          xs={item.colunms.xs} 
          lg={item.colunms.lg} 
          xl={item.colunms.xl} 
          
          label={item.label} 
          nameFilde={item.nameFilde} 
          placeholder={item.placeholder}
          options={item.options}
          sxInput={item.sxInput}

          onChange={onChangeCuston}
          value={valueCuston}
        />
      )

    default:
      return (
        <TextFieldCustonUncontrole 

          md={item.colunms.md} 
          sm={item.colunms.sm} 
          xs={item.colunms.xs} 
          lg={item.colunms.lg} 
          xl={item.colunms.xl}

          label={item.label} 
          nameFilde={item.nameFilde} 
          placeholder={item.placeholder}
          sxInput={item.sxInput}

          onChange={onChangeCuston}
          value={valueCuston}
        />
      )
  }     
    
}

