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
                backgroundColor: 'none',
                padding: '10px',
                borderBottom: '1px solid #ccc',
            }
        }
    }

   

    render() {
        return (
            <div style={this.getStyle()}>
                
                <p>
                <input type="checkbox" onChange={this.props.markComplete}/> {''}
                {this.props.todo.title}
                </p> 
            </div>
        )
    }
}


export default TodoItem
