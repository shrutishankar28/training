
import React, {Component} from 'react'
import { connect } from 'react-redux'
import { toggleTodo } from '../components/actions'
import { removeTodo } from '../components/actions'


class VisibleTodoList extends Component{

  render()
  {

    return(
      <div>
      <div className="container">
        <div className="jumbotron">
      <ul>
        { this.props.todo.map(todo =>

          <li key={todo.id} style={{textDecoration: todo.completed?'line-through':'none'}}>
          <input type="checkbox" checked={todo.completed?true:false} onClick={() => {this.props.toggle(todo.id)}} />
            {todo.text}
            <button className='btn btn-success' onClick={()=> {this.props.remove(todo.id)}}>
            Remove
            </button>
          </li>
        )}
      </ul>
      </div>
        </div>
      </div>
    );
  }
}

function mapstate(store){
  return{
    todo:store
  }
}

function mapDispatch(dispatch){
  return{
    toggle: (id) => {
    dispatch(toggleTodo(id));
  },

  remove: (id) =>{
  dispatch(removeTodo(id));
}
}
}
export default connect(mapstate,mapDispatch)(VisibleTodoList)
