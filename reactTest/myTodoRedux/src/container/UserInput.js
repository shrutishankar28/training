import React, {Component} from 'react'
import { connect } from 'react-redux'
import { addTodo } from '../components/actions'
//import '.../public/index.html'


let input;
class UserInput extends Component{

  render()
  {
    return(
      <div>


      <div className="container">
        <div className="jumbotron">
        <h2 className="text-danger">MyTodoApp</h2>


      <input  ref={node => {
          input = node}} id="inp"/>
      <input type="submit"  onClick={() => this.props.add(input.value)} className="btn btn-primary" value="Add"/ >

      </div>
        </div>
      </div>
    );
  }
}

function mapDispatch(dispatch){
  return {
    add: (value) => {dispatch(addTodo(value)); }
  }
}

function mapStore(store){

    console.log(store);

}
export default connect(mapStore,mapDispatch)(UserInput);;


/*
const UserInput = () => {

  let input
  console.log(this);

  return(
    <div>
    <h1>  Add item here</h1>

  <input ref={node => {
          input = node
        }} />

      <input type="Submit" onClick={()=>{this.props.dispatch(addTodo(input.value))}} value="Add"/>
    </div>
  );
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

export default connect(mapstate,mapDispatch)(UserInput)*/
