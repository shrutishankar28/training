<?php
header("Access-Control-Allow-Origin:*");

 $op=$_POST['mode'];
 $caption=$_POST['cap'];
 $isCompleted=$_POST['isCompleted'];
 $index=$_POST['index'];
 //$comp= Boolean($isCompleted);
 $ind=json_decode($index,true);
$bool=json_decode($isCompleted,true);
 $inp = file_get_contents('/home/sahusoft/Sites/projects/shruti/reactTest/reduxThunkTodo/public/Data.json');
 $tempArray = json_decode($inp,true);

unset($inp);

 switch ($op) {
   case 'Add':
     $tempArray[] = array('text'=>$caption,'completed'=>$bool);
     break;

   case 'Del':
        sleep(1);
       array_splice($tempArray,$ind,1);
       break;

   case 'Edit':
     sleep(1);
     $tempArray[$ind]['completed']=  !$tempArray[$ind]['completed'];
     break;

   default:
       echo "Default Case";
     break;
 }

 $jsonData = json_encode($tempArray);
 file_put_contents('/home/sahusoft/Sites/projects/shruti/reactTest/reduxThunkTodo/public/Data.json', $jsonData);
 unset($tempArray);
?>{}
