<?php
//mysql-database bewerken m.b.v. mysqli
require "db/dbmysqli.php";
$conn = new mysqli($host, $user, $pass,$dbn);
if(isset($_POST['submit']))
{
  $name = $_POST['name'];
  $email = $_POST['email'];
  $mobile = $_POST['mobile'];
  $sql = "INSERT INTO users (name,email,mobile) VALUES ('$name','$email','$mobile')";
if (mysqli_query($conn, $sql)) {
echo "New record has been added successfully !";
} 
else {
echo "Error: " . $sql . ":-" . mysqli_error($conn);
}
mysqli_close($conn);
}
//mysql-database bevragen m.b.v. PDO
require "db/dbconnection.class.php";
$dbconnect = new dbconnection();
$sql = "SELECT * FROM users ";
$query = $dbconnect -> prepare($sql);
$query -> execute() ;
$recset = $query -> fetchAll(PDO::FETCH_ASSOC);
echo "<pre>";
print_r($recset);
echo "</pre>";
?>