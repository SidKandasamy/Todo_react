import React from 'react'

function Header() {
    return (
       <header style={headerStyle}>
        <h1>ToDo List</h1>
       </header>
    )
}

const headerStyle = {
    backgroundColor: 'grey',
    color:'white',
    textAlign: 'center',
    padding: '10px',
    borderBottom: '1px solid #ccc',
}


export default Header;