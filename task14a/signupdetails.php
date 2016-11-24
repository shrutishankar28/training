<?php
$servername = "localhost";
$username = "root";
$password = "goldtree9";
$dbname= "shruti";

// Create connection
$conn = new mysqli($servername, $username, $password,$dbname);

// Check connection
if ($conn->connect_error) {
   die("Connection failed: " . $conn->connect_error);
}
//echo "Connected successfully";

$name=$_POST['name'];
$email =$_POST['email'];
$pwd =$_POST['pwd'];

$sql = "INSERT INTO users1 (name,email,password) VALUES (name,email,pwd);";

if ($conn->query($sql) === TRUE) {
    echo "New record created successfully";
} else {
    echo "Error: " . $sql . "<br>" . $conn->error;
}

$conn->close();
?>
