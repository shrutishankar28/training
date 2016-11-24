function buildUI(caption,isCompleted,index){

  //alert("captio is "+caption);

  var liTag = $("<li></li>");
  var removetag = $("<input type='submit' value='Remove' class='btn btn-success'/>");
  var chckbox = $("<input type='checkbox'/>");

  $(removetag).click(function() {
    TodoAppObj.todoCollection.splice(index,1);
    TodoAppObj.render();
  });

  $(chckbox).click(function() {
    TodoAppObj.todoCollection[index].toggle();
    TodoAppObj.render();
  });

  $(liTag).append(chckbox,caption,removetag);

  if(isCompleted){
    $(liTag).attr('class','completed');
    $(chckbox).attr('checked','checked');
  }
  else
    $(liTag).attr('class','');

  return liTag;
}
