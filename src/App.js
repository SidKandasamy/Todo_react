import React, { Component } from 'react';
import Todo from './components/Todo'
import Header from './components/layout/Header'
import Addform from './components/layout/Addform'
import uuid from 'uuid';


import './App.css';

class App extends Component {

  state = {
    todo:[
      {
        id:uuid.v4(),
        title:'take out the trash',
        completed: false,
      },

      {
        id:uuid.v4(),
        title:'Buy food',
        completed: false,
      },

      {
        id:uuid.v4(),
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

//delete todo
buttonClicked = (id) => {
  this.setState({todo:this.state.todo.filter(todo => todo.id !== id)});
}

  addForm = (title) =>{

    const newTodo ={
      id:uuid.v4(),
      title,
      completed: false,

    }

    this.setState({todo:[...this.state.todo, newTodo]})
  }


  render() {

    //todo is a prop
    return(
      <div className="App">
        <div className="container">
        <Header></Header>
        <Addform addForm={this.addForm}/>
        <Todo todo={this.state.todo} buttonClicked={this.buttonClicked} markComplete={this.markComplete}/> 
        </div>
      </div>
    );
    }
}

export default App;
