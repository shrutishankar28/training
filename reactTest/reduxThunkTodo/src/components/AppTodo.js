import React, { Component } from 'react'
import VisibleTodoList from '../container/VisibleTodoList'
import $ from 'jquery';
import { connect } from 'react-redux'
import UserInput from '../container/UserInput'
//import TodoList from './TodoList'

/*const AppTodo = () => (
  <div>
    <UserInput />
    <VisibleTodoList />
  </div>
)*/
class AppTodo extends Component
{

  getData(dispatch){

    $.ajax({

      type: 'POST',
      url: 'http://reduxthunktodo.local.sahusoft.info/src/fetch.php',
      success: function(data){

        if(data!=null){

          dispatch({type:"LOAD_SUCCESS"});
          let len=data.length;
          dispatch({type:"SERVER_RESPONSE", tododata:data,l:len})
        }
      },
      data: JSON.stringify(),
      dataType:'json'

    })
  }

  componentWillMount(){
   this.props.dispatch({type:"LOAD_PROGRESS"});
   this.props.dispatch(this.getData);

  }



  render(){

    return(
      <div>
          <UserInput />
          <VisibleTodoList />
      </div>
    );
  }
}


function mapDispatch(dispatch){
  return{
    dispatch
  }
}

function mapstate(store){
  return{
    store
  }
}

export default connect(mapstate,mapDispatch)(AppTodo)
