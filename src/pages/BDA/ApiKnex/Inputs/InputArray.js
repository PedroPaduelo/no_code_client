import React, { useState } from "react";
import { Grid } from '@mui/material';
import { useFieldArray } from "react-hook-form";
import { SwitchInputPrimitivoArray } from "./SwitchInputPrimitivoArray";




export const InputArray = ({
  control,
  itens,
  name,
  ...props
}) => {


  const { fields, append, remove } = useFieldArray({
    control, 
    name: name,
  });


  const [fieldArray, setFieldArray] = useState([]);


  const handleChange = event => {
    setFieldArray({ ...fieldArray, [event.target.name]: event.target.value });
  }




  return (
    <Grid item {...props}>
      
      <Grid container spacing={1}>
        {itens.map((item, index) => (
          <SwitchInputPrimitivoArray
            key={index}
            item={item}
            nameFilde={item.nameFilde}
            onChangeCuston={handleChange}
            valueCuston={fieldArray[item.nameFilde]}
          />
        ))}
      </Grid>




      <button
        type="button"
        onClick={() => append(fieldArray)}
      >
        append
      </button>




      {fields.map((item, index) => {
          return (
            <div
              key={item.id}
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                marginBottom: "10px",
                border: "1px solid #ccc"
              }}
            >
              {
                Object.keys(item).map((key) =>{

                    if(key === "id"){
                      return null;
                    }

                    return (
                      <h6>{item[key]}</h6>
                    )
                  }
                )
              }
              <button type="button" onClick={() => remove(index)}>Delete</button>
            </div>
          )

      })
      
      }



    </Grid>
  )
};















