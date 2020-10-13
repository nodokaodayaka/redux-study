import React, { useState } from 'react';
import TodoList from './components/TodoList';

function App() {
  const [data, setData] = useState([]);

  return (
    <div className="App">
      <TodoList todoList={data} setData={setData} />
    </div>
  );
}

export default App;
