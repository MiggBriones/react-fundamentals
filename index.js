import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import './style.css';

class Blog extends Component {
  constructor(props){
    super(props);

    this.state = {
      articles: []
    };
  }

  // Code is invoked after the component is mounted/inserted into the DOM tree.
  componentDidMount() {
    let promesa =
      fetch('https://jsonplaceholder.typicode.com/posts');

    promesa.then((response) => {
      response.json().then((data)=>{
        console.log(data);
        this.setState({
          articles:data
        });
      })
    })
  }

  render() {
    return(
      <div>
        {
          this.state.articles.map((article) => {
            return <p>{article.title}</p>
          })
        }
      </div>
    )
  }
}

class App extends Component {
  constructor() {
    super();
  }

  render() {

    return (
      <div>
        <Blog />
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));