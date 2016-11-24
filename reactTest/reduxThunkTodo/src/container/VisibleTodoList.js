
import React, {Component} from 'react'
import { connect } from 'react-redux'
import { toggleTodo } from '../components/actions'
import { removeTodo } from '../components/actions'
import $ from 'jquery';
// import loading from '../reducers/loading'
//import todoid from './UserInput'

class VisibleTodoList extends Component{

  render()
  {

    return(
      <div>
      <div className="container">
        <div className="jumbotron">
      <ul>
        {this.props.store.loading ? 'Loading...': ''}
        { this.props.store.todoreducer.map(todo =>

          <li key={todo.id} style={{textDecoration: todo.completed?'line-through':'none'}}>
          <input type="checkbox" checked={todo.completed?true:false} onClick={() => {this.props.dispatch(toggleData(todo.id))}} />

            {todo.text}
            <button className='btn btn-success' onClick={()=> {this.props.dispatch(removeData(todo.id))}}>
            Remove
            </button>
            {this.props.store.removing.rid===todo.id ? 'Removing...': ''}
            {this.props.store.checking.cid===todo.id ? 'Changing status...': ''}
          </li>

        )}
      </ul>
      </div>
        </div>
      </div>
    );
  }
}

function toggleData(index) {

  return dispatch => {

    dispatch({type:"CHECK_PROGRESS",id:index});

    $.ajax({

      type: 'POST',
      url: 'http://reduxthunktodo.local.sahusoft.info/src/sync.php',
      async: true,
      dataType:'json',
      success: function(data){
        dispatch({type:"CHECK_SUCCESS",id:index});

          dispatch(toggleTodo(index))
      },
      data: {index:index, mode:"Edit" }

    })
  }
}

function removeData(id) {

  return dispatch => {
    dispatch({type:"REMOVE_PROGRESS",id:id});
    $.ajax({

      type: 'POST',
      url: 'http://reduxthunktodo.local.sahusoft.info/src/sync.php',
      async:true,
      dataType:'json',
      success: function(data){
          dispatch({type:"REMOVE_SUCCESS",id:id});
          dispatch(removeTodo(id));
      },
      data: {index:id, mode:"Del" }

    })
  }
}

function removeProgress(id){
  return dispatch => {

  }
}

function mapstate(store){
  //console.log(store);
  return{
    store
  }
}

function mapDispatch(dispatch){
  return{
    dispatch
  }
}

export default connect(mapstate,mapDispatch)(VisibleTodoList)
