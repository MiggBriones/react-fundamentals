import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import './style.css';


class Formulario extends Component {
  constructor(props){
    super(props);

    this.state = {
       email: '',
       password: ''
    }
  }

  synEmailChange(email) {

  }

   render(){
     return(
      <form>
        <input 
          conChange={(ev) => {this.synEmailChange(ev.target.value) } }
          type="email"
          value={this.state.email}
          placeholder="Email"/>
        <input type="password" value={this.state.password} placeholder="****" />
        <div>
          <input type="submit" value="Iniciar en el password"/>
        </div>
      </form>
     )
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
    let nombre = "Uriel"; 
    
    return (
      <div>
        <Formulario />
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
