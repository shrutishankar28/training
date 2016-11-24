import React, { Component } from 'react'
import VisibleTodoList from '../container/VisibleTodoList'
import UserInput from '../container/UserInput'
//import TodoList from './TodoList'

const AppTodo = () => (
  <div>
    <UserInput />
    <VisibleTodoList />
  </div>
)
/*class AppTodo extends Component{
  render(){

    return(
    <div>
        <UserInput />
        <TodoList />
    </div>
);

  }

}*/



export default AppTodo
