import React from 'react';

const Todo = ({todo}) => {
    return (
        <li style={{listStyleType:"none"}}>
            {todo.id}:{todo.text}
        </li>
    );
}

export default Todo;