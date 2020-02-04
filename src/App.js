import React, { Component } from 'react';
import Todo from './components/Todo'
import Header from './components/layout/Header'
import Addform from './components/layout/Addform'


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
        completed: false,
      },

      {
        id:3,
        title:'feed cat',
        completed: false,
      }
    ]
  }

  //toggle todo complete
  markComplete = (id) => {
    this.setState({todo:this.state.todo.map(todo =>{
      if(todo.id === id){
        todo.completed = !todo.completed
      }
        return todo;
    }) });
}

buttonClicked = (id) => {
  this.setState({todo:this.state.todo.filter(todo => todo.id !== id)});
}



  render() {

    //todo is a prop
    return(
      <div className="App">

        <Header></Header>
        <Addform/>
        <Todo todo={this.state.todo} buttonClicked={this.buttonClicked} markComplete={this.markComplete}/> 
     
        
      </div>
    );
    }
}

export default App;
