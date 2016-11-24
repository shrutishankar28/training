//let nextTodoId = 0

export const addTodo = (text) => {
//  nextTodoId=len;
  return {
    type: 'ADD_TODO',
    //id: nextTodoId++,
    text
  }
}

export const toggleTodo = (id) => {
  return {
    type: 'TOGGLE_TODO',
    id
  }
}

export const removeTodo = (id) => {

  //nextTodoId--
  return {
    type: 'REMOVE_TODO',
    id

  }
}
