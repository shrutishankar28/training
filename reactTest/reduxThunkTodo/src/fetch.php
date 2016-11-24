
<?php
  sleep(1);
  header("Access-Control-Allow-Origin:*");
  $data = file_get_contents('/home/sahusoft/Sites/projects/shruti/reactTest/reduxThunkTodo/public/Data.json');

  //$items= json_decode($data,true);
  //$val= json_encode($items);
  echo $data;
?>
