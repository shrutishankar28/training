import React, { Component } from 'react';
import  Counter from './Counter';
import {  connect } from 'react-redux';
// import { timeout } from './timeout'
class AppCounter extends Component{



  render(){
    console.log(this);
    return(

      //Simple counter
      /*<Counter
        value={this.props.store}
        onIncrement={()=>this.props.dispatch({type: 'INCREMENT'})}
        onDecrement={() => this.props.dispatch({type: 'DECREMENT'})}
      />*/

      //using thunk
      <Counter
        value={this.props.store}
        onIncrement={()=>this.props.dispatch(timeout())}
        onDecrement={() => this.props.dispatch({type: 'DECREMENT'})}
      />

    );
  }
}

//middleware function
function timeout(){
  return dispatch=>{
      setTimeout(function(){
      dispatch({type: 'INCREMENT'})

    },1000);
  }
}

function mapstate(store){
  return{
    store
  }
}

function mapDispatch(dispatch){
  return{
    dispatch
  }
}

export default connect(mapstate,mapDispatch)(AppCounter)
