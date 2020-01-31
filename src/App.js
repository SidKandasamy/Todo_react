import React, { Component } from 'react';
import Todo from './components/Todo'

import './App.css';

class App extends Component {

  state = {
    todo:[
      {
        id:1,
        title:'take out the trash',
        completed: false,
      },

      {
        id:2,
        title:'Buy food',
        completed: true,
      },

      {
        id:1,
        title:'feed cat',
        completed: false,
      }
    ]
  }


  render() {

    return(
      <div className="App">

        <Todo/>

      </div>
    );
    }
}

export default App;
