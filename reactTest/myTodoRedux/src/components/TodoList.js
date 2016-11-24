import React, {PropTypes} from 'react'
import TodoItem from './TodoItem'

const TodoList = ({TodoItems}) => (

  <ul>
    {TodoItems.map(todo =>
        <TodoItem
          key={todo.id}
          {...todo}

        />
    )}
  </ul>
)

TodoList.propTypes = {

  TodoItems: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    text: PropTypes.string.isRequired
  }).isRequired)

}

export default TodoList

/*const TodoList = ({TodoItems, onCheckItem, onDeleteItem}) => (

  <ul>
    {TodoItems.map(todo =>
        <TodoItem
          key={todo.id}
          {...todo}
          onCheckItem={() => onCheckItem(todo.id)}
          onDeleteItem={() => onDeleteItem(todo.id)}
        />
    )}
  </ul>
)

TodoList.propTypes = {
  onCheckItem: PropTypes.func.isRequired,
  TodoItems: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    completed: PropTypes.bool.isRequired,
    text: PropTypes.string.isRequired
  }).isRequired).isRequired
  onDeleteItem: PropTypes.func.isRequired
}

export default TodoList */
