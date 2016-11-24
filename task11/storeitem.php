<!DOCTYPE html>
<html>
<body>

<?php
session_start();
$caption = $_POST["item"];
//echo $caption;

array_push($_SESSION[‘todoCollection’], [‘caption’ => $_POST["item"], ‘isCompleted’ => false]);

?>

<?php
  header('Location: http://task11.local.sahusoft.info/todo.php');
  exit;
?>



</body>
</html>
