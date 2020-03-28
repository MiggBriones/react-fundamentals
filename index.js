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

  synChanges(value, property) {
    let state = {}
    state[property] = value;
    this.setState(state);

  }

  submitForm = ()=>{
    console.log(this.state);
  }

   render(){
     return(
      <form>
        <input 
          onChange={(ev) => {this.synChanges(ev.target.value, 'email') } }
          type="email"
          value={this.state.email}
          placeholder="Email"/>
        <input
          onChange={(ev) => {this.synChanges(ev.target.value, 'password') } }
          type="password"
          value={this.state.password} 
          placeholder="****" />
        <div>
          <input
            onClick={ this.submitForm }
            type="submit"
            value="Iniciar en el password"/>
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