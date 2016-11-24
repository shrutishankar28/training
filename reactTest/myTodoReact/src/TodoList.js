import React from 'react';
import TodoItem from './TodoItem';

class TodoList extends React.Component {

  onDeleteItemHandler(index){
    this.props.onDeleteItem(index);
  }

  onCheckItemHandler(index){
  this.props.onCheckItem(index);
  }



  render() {

    var that = this;

    return <ul>
      {this.props.items.map(function(obj, index){
        return <TodoItem
          key={index}
          caption={obj.caption}
          isCompleted={obj.isCompleted}
          onCheckItem={that.onCheckItemHandler.bind(that)}
          onDeleteItem={that.onDeleteItemHandler.bind(that)}
          index={index}
          />
      })}
    </ul>;
  }

}

export default TodoList;
