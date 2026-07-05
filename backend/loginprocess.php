<?php
include "connection.php";
$name = $_POST['phpname'];
$pass = $_POST['phppass'];
$query= "INSERT INTO `users` (`sr.no`, `user_name`, `password`) VALUES (NULL, '$name', '$pass')";
$result = mysqli_query($conn, $query);
if($result)
{
    echo "Data inserted successfully";
}
else
{
    echo "Error: " . $query . "<br>" . mysqli_error($conn);
}
?>