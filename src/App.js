import React, {useReducer} from 'react';

const ENTRIES = {
    IN: 1,
    DE: 2
}

const initialCount = 0

const reducer = (state, action) => {
  if (action.type === ENTRIES.IN) {
    return state + 1;
  }
  else if(action.type === ENTRIES.DE) {
    return state - 1;
  }
  return state;
}

const App = () => {
  const [count, dispatch] = useReducer(reducer, initialCount);

  return (
    <div>
      count:{count}
      <button onClick={() => dispatch({ type:ENTRIES.IN })}>+</button>
      <button onClick={() => dispatch({ type: ENTRIES.DE })}>-</button>
    </div>
  );
}

export default App;
