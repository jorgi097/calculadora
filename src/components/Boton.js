import React from "react";
import '../styles/boton.css'
import { useState } from "react";

function Boton(props){
    const esOperador = (valor) => {
        return isNaN(valor) && (valor != '.') && (valor != '=')
    }



    return(
      <div className={`boton ${esOperador(props.children) ? 'operador': ''}`.trimEnd()}>
        {props.children}
      </div>  
    )
}

export default Boton;