import useForm from "../../hooks/useForm";
import React from "react";
import useRenderCounter from "../../hooks/useRenderCounter";

const UncontrolledForm = () => {
  const {handleSubmit, register, errors} = useForm();

  function onSubmit(data) {
    console.log("Chegou no onSubmit")
    console.log("Dados do formulário", data)
  }

  const counter = useRenderCounter(() => {
    console.log('Renderizou UncontrolledForm')
    console.log('errors', errors)
  })

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input type="text" {...register('name', {
        rules: {
          required: 'O campo nome é obrigatório',
          onlyNumber: 'O campo nome deve ter apenas números'
        }
      })}/>
      {errors?.name && <p>{Object.values(errors.name)[0]}</p>}
      <button type="submit">Submit form</button>
      <h3>Quantidade de renders: {counter}</h3>
    </form>
  )
}

export default UncontrolledForm;
