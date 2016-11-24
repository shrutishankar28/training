import React, {Component, PropTypes} from 'react';

class Counter extends Component{

  static PropTypes={
    value:PropTypes.number.isRequired,
    onIncrement:PropTypes.func.isRequired,
    onDecrement: PropTypes.func.isRequired
  }

  render(){

    return(
      <div>
        <h1>{this.props.value}</h1>
        <button onClick={this.props.onIncrement}>+</button>
        <button onClick={this.props.onDecrement}>-</button>
      </div>
    );
  }
}

export default Counter;
