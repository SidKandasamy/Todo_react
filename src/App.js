import React, { Component } from 'react';
import Todo from './components/Todo'


import './App.css';

class App extends Component {

  state = {
    todo:[
      {
        id:1,
        title:'take out the trash',
        completed: true,
      },

      {
        id:2,
        title:'Buy food',
        completed: false,
      },

      {
        id:1,
        title:'feed cat',
        completed: false,
      }
    ]
  }

  markComplete = (e) => {
    console.log("hello")
}

  render() {

    //todo is a prop
    return(
      <div className="App">

        <Todo todo={this.state.todo} markComplete={this.markComplete}/> 
        
      </div>
    );
    }
}

export default App;
