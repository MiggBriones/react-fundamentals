import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import './style.css';

// No de deben compartir elementos
// para poder compartir elementos, información; utilizar PROPS

// props = propiedades de creación del componente, son READONLY



function A(props) {
  console.log(props.children);
  return <p>Hola {props.nombre}</p>;
}

function B(props) {
  return <p>{props.nombre}: 10</p>;
}

function MiComponente() {
  return <p>Hola mundo </p>;
}

class MiComponenteDeClase extends Component  {
  render() {
    return <p>Hola, soy de la clase.</p>;
  }
}



class App extends Component {
  constructor() {
    super();
    this.state = {
      name: 'React'
    };
  }

  render() {
    let nombre = "Miguel"; 
    
    return (
      <div>
        <A nombre={nombre}>
          <p>Hijo de A, numero 1</p>
          <p>Hijo de A, numero 2</p>
        </A>
        <B nombre={nombre}/>
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
