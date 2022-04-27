import { useCounter } from "../hooks/useCounter";

const CounterHook = ({ initialValue = 0 }) => {
  
  const {counter,counterElement,handleClick} = useCounter();
  
  return (
    <>
      <h2 ref={counterElement}> CounterHook: {counter}</h2>
      <button onClick={() => handleClick()}>+1</button>
    </>
  );
};

export default CounterHook;
