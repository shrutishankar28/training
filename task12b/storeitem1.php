<?php
session_start();
if(!isset($_SESSION['todoCollection']))
    $_SESSION['todoCollection'] = [];
 ?>

 <!DOCTYPE html>
 <html>
   <head>
     <meta charset="utf-8">
     <title></title>
   </head>
   <body>
     <form action="storeitem1.php" method="post">
      <input type="text" name="name" value="">
      <input type="submit" name="id" value="add">
     </form>
     <?php
     $myfile = fopen("task.txt", "w") or die("Unable to open file!");
     array_push($_SESSION['todoCollection'], ['caption' => $_POST['name'], 'isCompleted' => 'false']);
    // print_r($_SESSION['todoCollection']);
    //
    //
    //echo "asd".$fromFile;
    $stringFromFile = serialize($_SESSION['todoCollection']);
    //echo $stringFromFile;
    file_put_contents(“task.txt”, $stringFromFile);
    //fwrite($myfile, $stringFromFile);

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
