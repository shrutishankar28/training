import React, { PropTypes } from 'react'

const Todo = ({text}) => (

  <li>

        {text}

  </li>
)

Todo.propTypes = {
  text: PropTypes.string.isRequired
}


/*const Todo = ({onCheckItem, completed ,text, onDeleteItem}) => (

  <li>
      <input type="checkbox" onClick={onCheckItem} style={{
          textDecoration: completed ? 'line-through' : 'none'
        }}/>
        {text}
        <input type="button" onClick={onDeleteItem} value="Delete"/>
  </li>
)

Todo.propTypes = {
  onCheckItem: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired,
  onDeleteItem: PropTypes.func.isRequired
}*/
