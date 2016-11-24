<?php
header("Access-Control-Allow-Origin:*");
//$data[] =array('caption'=>"Repeat",'isCompleted'=>true);

$inp = file_get_contents('Data.json');
$tempArray = json_decode($inp);
$tempArray[] = array('caption'=>"Do-this-last",'isCompleted'=>false);
//print_r($tempArray);
$jsonData = json_encode($tempArray);
file_put_contents('Data.json', $jsonData);
// Print Logic
// $str = file_get_contents('Data.json');
// $json = json_decode($str, true);
// echo '<p>' . print_r($json, true) . '</p>';
?>
