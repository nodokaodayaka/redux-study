import React, { useState } from 'react';
import axios from 'axios';

function App() {
  const [data, setData] = useState([{text:'first'}]);

  const clickHandler = () => {
    const work = axios.get('http://localhost:4000/').then(res => {
      setData(res.data);
    });
  };

  return (
    <div>
      <button onClick={clickHandler}>Click Me!</button>
      <div>{data[0].text}</div>
    </div>
  );
}

export default App;
