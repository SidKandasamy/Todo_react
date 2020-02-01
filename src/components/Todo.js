import React, {Component} from 'react';
import TodoItem from './TodoItem'


class Todo extends Component {
    markComplete = (e) => {
            console.log("hello")
    }
    
    render(){

//you can check the props console.log(this.props.todo)
    return this.props.todo.map(todo => (
            <TodoItem todo={todo} markComplete={this.markComplete} />   //<h3>{todo.title}</h3> map method on the todo props which loops through and gets out the title
    ));
 }
}


export default Todo;
