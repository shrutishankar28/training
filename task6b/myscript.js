var TodoItem = function() {
  this.caption = "Default";
  this.isCompleted = false;
  this.toggle = function() {
    this.isCompleted = !this.isCompleted;
  }
};

var TodoApp = function(){
  this.todoCollection = [];
  this.addItem = function(){
    var TodoItemObj = new TodoItem();
    TodoItemObj.caption=$("#inp_task").val();
    this.todoCollection.push(TodoItemObj);
    this.render();
  }
  this.render = function(){
    $("#tdlist").empty();
    for(var i in this.todoCollection){
      var item = this.todoCollection[i];
      var li = buildUI(item.caption,item.isCompleted,i);
      $("#tdlist").append(li);
    }
  }
};

var TodoAppObj = new TodoApp();
$("#formid").submit(function(){
  //alert("myscript");
  TodoAppObj.addItem();
});
