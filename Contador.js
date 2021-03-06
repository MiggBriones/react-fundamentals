import React, { useState } from 'react';

/*
Hooks, son una nueva característica en React 16.8. Estos te permiten usar el estado y otras características de React sin escribir una clase. 

Una caracteristica de los Hooks es que no se pueden usar 
condicionales y ciclos cuando se aplica un hook.
*/
function Contador(props) {
  // this.state = { contador:0 };
  const [contador, setContador] = useState(0);

  return (
    <div>
      <p>Conteo: {contador}</p>
      <button onClick={ () => setContador(contador+1) }>Aumentar </button>
    </div> 
  )
}

export default Contador;