import "./App.css";
import "./components/Boton.js";
import Boton from "./components/Boton.js";
import logo from "./images/freecodecamp-logo.png";
import Pantalla from "./components/Pantalla.js";
import BotonClear from "./components/BotonClear.js";
import { useState } from "react";
import {evaluate} from 'mathjs'

function App() {
  const [input, setInput] = useState("");

  const agregarInput = (val) => {
    setInput(input + val);
  };

  const calcularResultado = ()=>{
    if (input){
      setInput(evaluate(input))
    } else{
      alert('Ingrese valores para calcular')
    }
    
  }

  return (
    <div className='App'>
      <div className='logo-contenedor'>
        <img src={logo} className='logo-imagen' alt='' />
      </div>
      <div className='calculadora-contenedor'>
        <Pantalla input={input} />
        <div className='fila'>
          <Boton manejarClic={agregarInput}>1</Boton>
          <Boton manejarClic={agregarInput}>2</Boton>
          <Boton manejarClic={agregarInput}>3</Boton>
          <Boton manejarClic={agregarInput}>+</Boton>
        </div>
        <div className='fila'>
          <Boton manejarClic={agregarInput}>4</Boton>
          <Boton manejarClic={agregarInput}>5</Boton>
          <Boton manejarClic={agregarInput}>6</Boton>
          <Boton manejarClic={agregarInput}>-</Boton>
        </div>
        <div className='fila'>
          <Boton manejarClic={agregarInput}>7</Boton>
          <Boton manejarClic={agregarInput}>8</Boton>
          <Boton manejarClic={agregarInput}>9</Boton>
          <Boton manejarClic={agregarInput}>*</Boton>
        </div>
        <div className='fila'>
          <Boton manejarClic={agregarInput}>.</Boton>
          <Boton manejarClic={agregarInput}>0</Boton>
          <Boton manejarClic={calcularResultado}>=</Boton>
          <Boton manejarClic={agregarInput}>/</Boton>
        </div>
        <div className='fila'>
          <BotonClear manejarClear={() => setInput("")}>
            Clear
          </BotonClear>
        </div>
      </div>
    </div>
  );
}

export default App;
