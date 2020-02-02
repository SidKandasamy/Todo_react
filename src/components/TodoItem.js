import React, { Component } from 'react'


export class TodoItem extends Component {

    getStyle = () => {
        if(this.props.todo.completed){
            return {
                textDecoration:'line-through',
                backgroundColor: 'green',
                padding: '10px',
                borderBottom: '1px solid #ccc',
            }
        } else {
            return{
                textDecoration: 'none',
                backgroundColor: 'red',
                padding: '10px',
                borderBottom: '1px solid #ccc',
            }
        }
    }

   

    render() {

        const {id,title} = this.props.todo; //deconstruction, so we can use id and title within the jsx

        return (
            <div style={this.getStyle()}>
                
                <p>
                <input type="checkbox" onChange={this.props.markComplete.bind
                (this,id)}/> {''}
                {title}
                <input type="checkbox"/>
                </p> 
            </div>
        )
    }
}
export default TodoItem

//Climbing the Tree, acessing and changing state

//to access the state which is in App.js, from ToDoItems, you access the props from the Todo.js. The Todo.js includes the <TodoItem> which has the props. 

//then from there, props are still only accessible in the App.js, so from Todo.js, you need to then acess app.js

//markComplete={this.markComplete} within the Component and create the function/method   markComplete = (e) => {
    //console.log("hello")
//}

//Changing State

//