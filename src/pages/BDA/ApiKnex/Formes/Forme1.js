import React, { useContext, useEffect } from 'react';
import { Grid } from '@mui/material';

import { useForm, FormProvider, useFormContext, useFieldArray } from "react-hook-form";
import { TabelasContext } from '../../../../Context/DB/TabelasContext';
import { mapLabel } from './utils';

import { useExecutApi } from '../../../../hooks/useExecutApi';

const methodo_options = [
  {
    value: 'select',
    label: 'select',
  },
  {
    value: 'column',
    label: 'column',
  },
  {
    value: 'where',
    label: 'where',
  },
  {
    value: 'whereNot',
    label: 'whereNot',
  },
  {
    value: 'whereIn',
    label: 'whereIn',
  },
  {
    value: 'orWhereIn',
    label: 'orWhereIn',
  },
  {
    value: 'whereNotIn',
    label: 'whereNotIn',
  },
  {
    value: 'orWhereNotIn',
    label: 'orWhereNotIn',
  },
  {
    value: 'whereNull',
    label: 'whereNull',
  },
  {
    value: 'whereNotNull',
    label: 'whereNotNull',
  },
  {
    value: 'whereBetween',
    label: 'whereBetween',
  },
  {
    value: 'whereNotBetween',
    label: 'whereNotBetween',
  },
  {
    value: 'whereRaw',
    label: 'whereRaw',
  },
  {
    value: 'whereLike',
    label: 'whereLike',
  },
  {
    value: 'whereILike',
    label: 'whereILike',
  },
  {
    value: 'join',
    label: 'join',
  },
  {
    value: 'innerJoin',
    label: 'innerJoin',
  },
  {
    value: 'leftJoin',
    label: 'leftJoin',
  },
  {
    value: 'leftOuterJoin',
    label: 'leftOuterJoin',
  },
  {
    value: 'rightJoin',
    label: 'rightJoin',
  },
  {
    value: 'rightOuterJoin',
    label: 'rightOuterJoin',
  },
  {
    value: 'fullOuterJoin',
    label: 'fullOuterJoin',
  },
  {
    value: 'crossJoin',
    label: 'crossJoin',
  },
  {
    value: 'joinRaw',
    label: 'joinRaw',
  },
  {
    value: 'having',
    label: 'having',
  },
  {
    value: 'havingIn',
    label: 'havingIn',
  },
  {
    value: 'havingNotIn',
    label: 'havingNotIn',
  },
  {
    value: 'havingNull',
    label: 'havingNull',
  },
  {
    value: 'havingNotNull',
    label: 'havingNotNull',
  },
  {
    value: 'havingBetween',
    label: 'havingBetween',
  },
  {
    value: 'havingNotBetween',
    label: 'havingNotBetween',
  },
  {
    value: 'havingRaw',
    label: 'havingRaw',
  },
  {
    value: 'distinct',
    label: 'distinct',
  },
  {
    value: 'distinctOn',
    label: 'distinctOn',
  },
  {
    value: 'groupBy',
    label: 'groupBy',
  },
  {
    value: 'groupByRaw',
    label: 'groupByRaw',
  },
  {
    value: 'orderBy',
    label: 'orderBy',
  },
  {
    value: 'orderByRaw',
    label: 'orderByRaw',
  },
  {
    value: 'limit',
    label: 'limit',
  },
  {
    value: 'offset',
    label: 'offset',
  },
  {
    value: 'insert',
    label: 'insert',
  },
  {
    value: 'count',
    label: 'count',
  },
  {
    value: 'min',
    label: 'min',
  },
  {
    value: 'max',
    label: 'max',
  },
  {
    value: 'sum',
    label: 'sum',
  },
  {
    value: 'avg',
    label: 'avg',
  },
  {
    value: 'increment',
    label: 'increment',
  },
  {
    value: 'decrement',
    label: 'decrement',
  },
  {
    value: 'first',
    label: 'first',
  },
  {
    value: 'rank',
    label: 'rank',
  },
  {
    value: 'createTableLike',
    label: 'createTableLike',
  },
  {
    value: 'toSQL',
    label: 'toSQL',
  }

  
];


// -------------------------------------------------- //

function Input({ name, ...rest }) {
  const { register } = useFormContext(); // retrieve all hook methods
  return <input {...rest} {...register(name)} />;
}

function Select({ options, name, ...rest }) {
  const { register } = useFormContext();

  return (
    <select {...register(name)} {...rest}>
      {options.map(value => (
        <option key={value.value} value={value.value}>
          {value.label}
        </option>
      ))}
    </select>
  );
}

// -------------------------------------------------- //







// -------------------------------------------------- //

function Array({name}) {


  const { 
    campos_render 
  } = useContext(TabelasContext);


  const { fields, append, remove } = useFieldArray({
    name: name
  });

  
  const nextedArraySchema = {
    id: 1,
    nameArray: "dados",
    schemaApend: {
      atributo: "",
      value: "",
      type: "Statico",
    },
    itens: [
      {
        id: 1,
        label: "Colunas",
        nameFilde: "value",
        type: "select",
        placeholder: "",
        options: mapLabel(campos_render, "column_name", "column_name"),
      }
    ]
  }


  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
      }}
    >
      <button
        type="button"
        onClick={() => append({ methodo: ""})}
      >
        append
      </button>

      <ul>
        {fields.map((item, index) => (
          <li key={item.id}>
            <Select options={methodo_options} name={`${name}.${index}.methodo`} />
            <button type="button" onClick={() => remove(index)}>Delete</button>
            
            <NextedArray name={`${name}.${index}.${nextedArraySchema.nameArray}`} nextedArraySchema={nextedArraySchema} />
          </li>
        ))}
      </ul>

    </div>
  );
}

function NextedArray({name, nextedArraySchema}) {

  const { fields, append, remove } = useFieldArray({
    name: name
  });
  
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
      }}
    >

      <button
        type="button"
        onClick={() => {
          append(nextedArraySchema.schemaApend)
        }}
      >
        append
      </button>

      <ul>
        {fields.map((item, index) => (
          <li key={item.id}>
            {
              nextedArraySchema.itens.map(item => (
                <div key={item.id}>
                  <label>{item.label}</label>
                  {item.type === "select" ? (
                    <Select options={item.options} name={`${name}.${index}.${item.nameFilde}`} />
                  ) : (
                    <Input name={`${name}.${index}.${item.nameFilde}`} />
                  )}
                </div>
              ))
            }
            <button type="button" onClick={() => remove(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

// -------------------------------------------------- //















// ------------------ Forme Principal que renderiza tudo ------------------- //

export function Forme1() {
  const { 
    tables_render,
    ListByIdCamposOfTables
  } = useContext(TabelasContext);
  
  const {Api_Knext} = useExecutApi();

  const methods = useForm();

  const tebela = methods.watch("tabela")

  useEffect(() => {
    async function get() {
      try {
       await ListByIdCamposOfTables(tebela)
      } catch (error) {
        console.log(error);
      }
    }
    get();
  }, [ListByIdCamposOfTables, tebela]);



  return ( 
    <Grid container spacing={1}>

      <FormProvider {...methods} > 
        <form>
          <Select options={tables_render.map((item) => (
            { 
              id: item.table_name, 
              label: item.table_name, 
              value: item.table_name 
            }
          ))} name={"tabela"} />


          <button
            type="button"
            onClick={async () => {await Api_Knext(methods.getValues())}}
          >
            Log Values
          </button>
          <Array name={"methodos"} />

        </form>
      </FormProvider>

    </Grid>
    
  );
}

// -------------------------------------------------- //