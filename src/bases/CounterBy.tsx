import React, { useState } from 'react'

interface Props {
    initialValue?: number
}

const CounterBy = ({initialValue=10}: Props) => {
    const [counter, setCounter] = useState({
        counter: initialValue,
        clicks: 0
    })

    const handleClick = (click:number) => {
        return setCounter(prev => ({
            counter : prev.counter + click,
            clicks : prev.clicks +1
        }))
    }
  return (
    <>
        <h1> CounterBy: {counter.counter}</h1>
        <h1> CounterClicks: {counter.clicks}</h1>

        <button onClick={() => handleClick(1)}>
            +1
        </button>
        <button onClick={() => handleClick(5)}>
            +5
        </button>
    </>
  )
}

export default CounterBy