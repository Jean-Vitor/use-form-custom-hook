import React, {useState} from "react";
import useRenderCounter from "../../hooks/useRenderCounter";

const ControlledForm = () => {
  const [name, setName] = useState('')

  function onSubmit(event) {
    event.preventDefault();
    console.log({name});
  }

  const counter = useRenderCounter(() => {
    console.log('Renderizou ControlledForm')
  })

  return (
    <form onSubmit={onSubmit}>
      <input type="text" name="name" onChange={(event) => setName(event.target.value)}/>
      <button type="submit">Submit form</button>
      <h3>Quantidade de renders: {counter}</h3>
    </form>
  )
}

export default ControlledForm;
