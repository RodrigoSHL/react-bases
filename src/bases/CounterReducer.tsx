import React, { useState } from "react";

interface CounterState {
  counter: number;
  previous: number;
  changes: number;
}

const INITIAL_STATE: CounterState = {
  counter: 0,
  previous: 0,
  changes: 0,
};

const CounterReducerComponent = ({ initialValue = 0 }: Props) => {
  const [counter, setCounter] = useState(initialValue);

  const handleClick = () => {
    return setCounter((prev) => prev + 1);
  };
  return (
    <>
      <h1> CounterReducer: {counter}</h1>
      <button onClick={() => handleClick()}>+1</button>
    </>
  );
};

export default CounterReducerComponent;
