import React from "react";

import CounterPresentational from "../Presentationals/CounterPresentational"

class CounterContainer extends React.Component {
  constructor(){
    super();
    this.state = {
      value: 0
    }
  }

  onIncrease = () => {
    this.setState({
      value: this.state.value + 1
    })
  }

  onDecresase = () => {
    this.setState({
      value: this.state.value - 1
    })
  }

  render(){
    return (
      <CounterPresentational
        value={this.state.value}
        onIncrease={this.onIncrease}
        onDecresase={this.onDecresase} />
    )
  }
}

export default CounterContainer
