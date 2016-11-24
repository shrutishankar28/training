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

  <?php
    session_start();
    if(!isset($_SESSION[‘todoCollection’]))
    $_SESSION[‘todoCollection’] = [];
  ?>

  <link rel="stylesheet" type="text/css" href="style.css">
  <div class="container">
  <div class="jumbotron">
      <h1>My First Todo App</h1>
  </div>
    <p>Enter Task:</p>

  <form id="formid" action="storeitem.php" method="post">
    <input type="text" name="item"/><br/>
    <input type="submit" class="btn btn-primary" value="ADD"/>
    </div>
  </form>

  <ul>
       <?php for($i = 0; $i < sizeof($_SESSION[‘todoCollection’]); $i++) { ?>
          <li><?php print_r($_SESSION[‘todoCollection’][$i][‘caption’]); ?></li>
      <?php } ?>
  </ul>


</body>

</html>
