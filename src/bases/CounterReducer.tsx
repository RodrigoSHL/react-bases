import React, { useReducer } from "react";
interface CounterState {
  counter: number;
  previous: number;
  changes: number;
}

const INITIAL_STATE: CounterState = {
  counter: 10,
  previous: 20,
  changes: 20,
};

type CounterAction = 
| { type: 'increaseBy', payload: {value:number;}}
| { type: 'reset'}

const counterReducer = (state:CounterState, action:CounterAction): CounterState => {
  switch (action.type) {
    case "reset":
      return {
        counter: 0,
        previous: 0,
        changes: 0,
      };
      case "increaseBy":
        
        return {
          counter: state.counter + action.payload.value,
          previous: state.counter,
          changes: state.changes +1,
        };
    default:
      return state;
  }
}

const CounterReducerComponent = () => {
  const [counterState, dispatch] = useReducer(counterReducer, INITIAL_STATE);
  const handleReset = () => {
    dispatch({ type: 'reset' });
  };

  const handleIncrement = (value:number) => {
    dispatch({ type: 'increaseBy', payload: {value: value} });
  };
  return (
    <>
      <h1>Counter Reducer</h1>
      <pre>
      { JSON.stringify( counterState, null, 2 ) }
      </pre>
      <button onClick={() => handleReset()}>Reset</button>
      <button onClick={() => handleIncrement(1)}>+1</button>
      <button onClick={() => handleIncrement(2)}>+2</button>
      <button onClick={() => handleIncrement(3)}>+3</button>
    </>
  );
};

export default CounterReducerComponent;
