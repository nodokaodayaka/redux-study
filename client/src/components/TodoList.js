import React from 'react';
import axios from 'axios';
import Todo from './Todo';

const TodoList = ({ todoList, setData }) => {

    const click = async () => {
        await axios.get('http://localhost:4000/').then(res => {
            setData(res.data);
        });
    };

    return (
        <div>
            <button onClick={() => click()}>Get TodoList from server.js</button>
            <button onClick={() => {setData([])}}>Clear TodoList from Display</button>
            <ul>
                {todoList.map(
                    (todo, index) => {
                        return (<Todo key={index} todo={todo} />)
                    }
                )}
            </ul>
        </div>
    );
}

export default TodoList;