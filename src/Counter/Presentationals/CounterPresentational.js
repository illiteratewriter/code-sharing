import React from "react";

const CounterPresentational = props => {
  return (
    <div>
      <button onClick={props.onDecresase}>
        Decrease
      </button>
      <span style={{padding: "0px 10px"}}>
        {props.value}
      </span>
      <button onClick={props.onIncrease}>
        Increase
      </button>
    </div>
  )
}

export default CounterPresentational
