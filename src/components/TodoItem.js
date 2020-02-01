import React, { Component } from 'react'


export class TodoItem extends Component {
    render() {
        return (
            <div style={{backgroundColor: 'grey'}}>
                <p>{this.props.todo.title}</p> 
            </div>
        )
    }
}


export default TodoItem
