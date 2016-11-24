import React from 'react';
class UserInput extends React.Component {


  constructor() {

    super();

    this.state = {
      input: ' '
    };

  }

  onSubmitHandler(event) {

    this.props.onAddItem(this.state.input);
    this.setState({
      input: ''
    });

    event.preventDefault();

  }

  onChangeHandler(e){
    this.setState({input: e.target.value})
  }

  render() {

    var that = this;

    return <form method="POST" onSubmit={this.onSubmitHandler.bind(that)}>
      <input type="text" value={this.state.input} onChange={this.onChangeHandler.bind(that)}  name="cap" />
      <input type="submit" value="Add item" />
    </form>;
  }

}

export default UserInput;
