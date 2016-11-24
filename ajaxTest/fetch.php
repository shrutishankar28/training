<?php
header("Access-Control-Allow-Origin:*");
  $data = file_get_contents('/home/sahusoft/Sites/projects/shruti/ajaxTest/Data.json');
  // $items= json_decode($data,true);
  // $val= json_encode($items);
  echo $data;
?>
