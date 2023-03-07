import React from 'react';
import UncontrolledForm from "./components/UncontrolledForm";
import ControlledForm from "./components/ControlledForm";

function App() {
  return (
    <div className="App">
      <h1>Formulários</h1>
      <h2>Formulário não controlado (useForm custom hook)</h2>
      <UncontrolledForm/>
      <h2>Formulário controlado (useState)</h2>
      <ControlledForm/>
    </div>
  );
}

export default App;
