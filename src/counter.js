import React from "react";
import useCounter from "./UseCounter";

const Counter = () => {
    const { counter, increment, decrement } = useCounter();

    return (
        <div>
            Counter:{counter}
            <button onClick={increment}>+</button>
            <button onClick={decrement}>-</button>
        </div>
    );
};

export default Counter;
