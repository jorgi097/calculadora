import './App.css';
import './components/Boton.js'
import Boton from './components/Boton.js';
import logo from './images/freecodecamp-logo.png'
import Pantalla from './components/Pantalla.js';

function App() {
  return (
    <div className="App">
      <div className='logo-contenedor'>
        <img 
          src={logo}
          className='logo-imagen'
          alt=''
        />
      </div>
      <div className='calculadora-contenedor'>
        <Pantalla/>
        <div className='fila'>
          <Boton>1</Boton>
          <Boton>2</Boton>
          <Boton>3</Boton>
          <Boton>+</Boton>
        </div>
        <div className='fila'>
          <Boton>4</Boton>
          <Boton>5</Boton>
          <Boton>6</Boton>
          <Boton>-</Boton>
        </div>
        <div className='fila'>
          <Boton>7</Boton>
          <Boton>8</Boton>
          <Boton>9</Boton>
          <Boton>X</Boton>
        </div>
        <div className='fila'>
          <Boton>.</Boton>
          <Boton>0</Boton>
          <Boton>=</Boton>
          <Boton>/</Boton>
        </div>
        <div className='fila'>
          
        </div>
      </div>
    </div>
  );
}

export default App;
