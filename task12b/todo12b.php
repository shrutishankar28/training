

<?php
  session_start();
  if(!isset($_SESSION[‘todoCollection’]))
  $_SESSION[‘todoCollection’] = [];
?>

<!DOCTYPE html>
<html>
<head>
  <title> MyTodoApp </title>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
  <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
</head>

<body>

  <link rel="stylesheet" type="text/css" href="style.css">
  <div class="container">
  <div class="jumbotron">
      <h1>My First Todo App</h1>
  </div>
    <p>Enter Task:</p>

  <form id="formid" action="todo12b.php" method="post">
    <input type="text" name="item"/><br/>
    <input type="submit" class="btn btn-primary" value="ADD"/>
    </div>
  </form>

  <?php
  //session_start();
  //$caption = $_POST["item"];
  //echo $caption

  $myFile=fopen("task.txt","w") or die("Unable to open file");

  array_push($_SESSION[‘todoCollection’], [‘caption’ => $_POST['item'], ‘isCompleted’ => false]);
  $stringFromFile=serialize($_SESSION['todoCollection']);
  file_put_contents("task.txt",$stringFromFile);
  fwrite($myfile, $stringFromFile);


  ?>


  <ul>
    <?php
                foreach ($_SESSION['todoCollection'] as $key) {
                ?>
                <li>
                  <?php print_r($key['caption']);
                    $txt = $key['caption'];

                   ?>
                </li>
                <?php
                }
                ?>
                <hr>
                <?php
                $stringFromFile = file_get_contents("task.txt");
                $fromFile = unserialize($stringFromFile);
                foreach ($fromFile as $key) {
                  echo $key['caption'];?>
                  <br>
                  <?php
                }
                //echo $fromFile;
                fclose($myfile);
             ?>
  </ul>




</body>

</html>
