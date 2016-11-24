<?php
  $inp= $_POST["inp_string"];
  file_put_contents("user.txt",$inp);
  $myFile= fopen("user.txt","r") or die("Unable to open file");
  echo fread($myFile,filesize("user.txt"));
  fclose($myFile);



?>
