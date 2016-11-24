import React from 'react';
import $ from 'jquery';
import TodoList from './TodoList';
import UserInput from './UserInput';

class App extends React.Component {

  constructor() {

    super();

    this.state = {
      todoItems: [
      ]
  };


  }

  onAddItemHandler(itemCaption){

    $.ajax
      ({
          type: 'POST',
          dataType : 'json',
          async: true,
          //url: 'http://mytodoreact.local.sahusoft.info/src/sync.php',
          url: 'http://shruti.local.sahusoft.info/reactTest/api/sync.php',
          success: function(data){
            alert("hello");
          },

          data: {cap:itemCaption ,isCompleted:false, mode:'Add' }

      });

    this.state.todoItems.push({
      caption: itemCaption,
      isCompleted: false
    });

    this.forceUpdate();

  }

  onDeleteItemHandler(index) {

    $.ajax
     ({
         type: 'POST',
         dataType : 'json',
         //async: true,
         url: 'http://shruti.local.sahusoft.info/reactTest/api/sync.php',
         data: {index:index, mode:'Del' }

     });

    this.state.todoItems.splice(index, 1);
    this.forceUpdate();

  }

  onCheckItemHandler(index){

    $.ajax
     ({
         type: 'POST',
         dataType : 'json',
         //async: true,
         //url: 'http://mytodoreact.local.sahusoft.info/src/sync.php',
         url: 'http://shruti.local.sahusoft.info/reactTest/api/sync.php',
         data: {index:index, mode :'Edit' }

     });


    var x=this.state.todoItems[index].isCompleted;
    this.state.todoItems[index].isCompleted =!x;
    this.forceUpdate();
  }

 componentWillMount(){
    //alert("hey!");
    let that=this;
    $.ajax({
      type: 'POST',
      //url: 'http://mytodoreact.local.sahusoft.info/src/fetch.php',
      url: 'http://shruti.local.sahusoft.info/reactTest/api/fetch.php',
      success: function(data){
        if(data!=null)
        //console.log(data);
        that.setState({todoItems:data});
      },
      data: JSON.stringify(that.state.todoItems),
      dataType:'json'
    })

  }

  /*componentDidUpdate() {
    //alert("hey!");
  let that = this;
  //Already parsed json variable
  $.ajax({
    type: 'POST',
    url: 'http://mytodoreact.local.sahusoft.info/src/sync.php',
    success: function() {
      console.log("Done");
    },
    data: {cap:JSON.stringify(that.state.todoItems)},
    dataType: 'json'
})
  //Serialize
}*/


  render() {
    return <div>


      <UserInput onAddItem={this.onAddItemHandler.bind(this)} />

      <TodoList items={this.state.todoItems} onCheckItem={this.onCheckItemHandler.bind(this)} onDeleteItem={this.onDeleteItemHandler.bind(this)} />
    </div>;
  }

}


export default App;
