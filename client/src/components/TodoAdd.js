import React, {useState} from 'react';
import axios from 'axios';

const TodoAdd = () => {
    const [item, setItem] = useState('');
    const click = async () => {
        await axios.post('http://localhost:4000/api/todo/add', {text:item})
        .then(res => {console.log('res:', res)});
    }
    return(
        <div>
            <input type="text" onChange={(e) => {setItem(e.target.value)}}/>
            <button onClick={click}>Add</button>
        </div>
    );
}

export default TodoAdd;