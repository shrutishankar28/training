import React, {Component} from 'react'
import { connect } from 'react-redux'
import { addTodo } from '../components/actions'
//import { addData } from '../services/thunkmiddleware'
import $ from 'jquery';
//import '.../public/index.html'


let input;
class UserInput extends Component{

  onSubmitHandler(event){
    event.preventDefault();
     //onClick={() => this.props.dispatch(addData(input.value))}
     this.props.dispatch(addData(this.input.value));
     this.input.value='';

  }

  render()
  {

    return(
      <div>
        <div className="container">
          <div className="jumbotron">
          <h2 className="text-danger">MyTodoApp</h2>
          <form onSubmit={this.onSubmitHandler.bind(this)}>
            <input  ref={node => {
                this.input = node}} id="inp"/>
            <input type="submit"  className="btn btn-primary" value="Add"/ >
          </form>
          </div>
        </div>
      </div>

    );
  }
}

function addData(caption) {
//  event.preventDefault();

  return dispatch => {

    $.ajax({

      type: 'POST',
      url: 'http://reduxthunktodo.local.sahusoft.info/src/sync.php',
      async: true,
      dataType:'json',
      success: function(data){

          //console.log(data);

          dispatch(addTodo(caption));

      },
      data: {cap:caption,isCompleted:false,mode:"Add"}

    })
  }
}

/*function mapDispatch(dispatch){
  return {
    add: (value) => {dispatch(addTodo(value)); }
  }
}*/

function mapDispatch(dispatch){
  return{
    dispatch
  }
}

function mapStore(store){

    //console.log(store);

}

export default connect(null,mapDispatch)(UserInput);;


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
