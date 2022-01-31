
import React from 'react';
import { InputArray } from './InputArray';
import { TextFieldCuston,  SelectFieldCuston } from './InputsPrimitivos';


export function SwitchInputPrimitivo({item, nameFilde, control}) {

  switch (item.type) {

    case "text":
      return (
        <TextFieldCuston 

          md={item.colunms.md} 
          sm={item.colunms.sm} 
          xs={item.colunms.xs} 
          lg={item.colunms.lg} 
          xl={item.colunms.xl} 

          label={item.label} 
          nameFilde={nameFilde} 
          placeholder={item.placeholder}
          sxInput={item.sxInput}

          control={control} 
        />
      )

    case "select":
      return (
        <SelectFieldCuston 

          md={item.colunms.md} 
          sm={item.colunms.sm} 
          xs={item.colunms.xs} 
          lg={item.colunms.lg} 
          xl={item.colunms.xl} 
          
          label={item.label} 
          nameFilde={nameFilde} 
          placeholder={item.placeholder}
          options={item.options}
          sxInput={item.sxInput}

          control={control} 
        />
      )

    case "array":
      return (
        <InputArray 

          md={item.colunms.md} 
          sm={item.colunms.sm} 
          xs={item.colunms.xs} 
          lg={item.colunms.lg} 
          xl={item.colunms.xl} 
          
          name={nameFilde}
          itens={item.itens}
          control={control} 
        />
      )

    default:
      return (
        <TextFieldCuston 

          md={item.colunms.md} 
          sm={item.colunms.sm} 
          xs={item.colunms.xs} 
          lg={item.colunms.lg} 
          xl={item.colunms.xl}

          label={item.label} 
          nameFilde={item.nameFilde} 
          placeholder={item.placeholder}
          sxInput={item.sxInput}

          control={control} 
        />
      )
  }     
    
}

