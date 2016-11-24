<?php
header("Access-Control-Allow-Origin:*");
//echo "fasghj"

$op=$_POST['mode'];
$caption= $_POST['cap'];
$isCompleted=$_POST['isCompleted'];
$index= $_POST['index'];

$inp = file_get_contents('/home/sahusoft/Sites/projects/shruti/reactTest/myTodoReact/public/Data.json');
$tempArray = json_decode($inp,true);

unset($inp);

switch ($op) {
  case "Add":
    $tempArray[] = array('caption'=>$caption,'isCompleted'=>$isCompleted);
    break;

  case "Del":
      array_splice($tempArray,$index,1);
      break;

  case "Edit":
      $tempArray[$index]['isCompleted']=  !$tempArray[$index]['isCompleted'];
      break;

  default:
      echo "Default Case";
    break;
}

$jsonData = json_encode($tempArray);
file_put_contents('/home/sahusoft/Sites/projects/shruti/reactTest/myTodoReact/public/Data.json', $jsonData);

unset($tempArray);
?>
