import React from 'react';

class TodoItem extends React.Component {

  onDeleteHandler() {
    this.props.onDeleteItem(this.props.index);
  }

  onCheckHandler() {
    this.props.onCheckItem(this.props.index);
  }

 onChangeHandler(e) {
  this.setState({isCompleted: e.target.isCompleted});
  this.forceUpdate();

}

  render() {
    let obj={checked:this.props.isCompleted}

    return(
      <li className={this.props.isCompleted?'strikeThrough':''}>
      <input type="checkbox" {...obj} onClick={this.onCheckHandler.bind(this)} onChange={this.onChangeHandler.bind(this)} />
      {this.props.caption}
      <input type="button" value="Delete" onClick={this.onDeleteHandler.bind(this)} />
      </li>);
    }
}

export default TodoItem;
