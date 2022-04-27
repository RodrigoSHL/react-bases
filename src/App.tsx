import React from "react";
import Counter from "./bases/Counter";
import CounterBy from "./bases/CounterBy";
import CounterEffect from "./bases/CounterEffect";
import CounterHook from "./bases/CounterHook";
import CounterReducerComponent from "./bases/CounterReducer";

function App() {
  return (
    <>
      <h1>React</h1>
      <hr />
      <Counter initialValue={0} />
      <hr />
      <CounterBy />
      <hr />
      <CounterEffect />
      <CounterHook />
      <CounterReducerComponent />

    </>
  );
}

export default App;
