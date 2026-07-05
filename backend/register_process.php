<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Allow-Headers: Content-Type");
if($_SERVER['REQUEST_METHOD']== 'OPTIONS') {
    http_response_code(200);
    exit();
}
include 'connection.php';

$rawData = file_get_contents("php://input");
$data = json_decode($rawData, true);
if(isset($data['fullName']) && isset($data['username']) && isset($data['email']) && isset($data['phone']) && isset($data['password'])) {
    $fullName = $data['fullName'];
    $username = $data['username'];
    $email = $data['email'];
    $phone = $data['phone'];
    $password = $data['password'];
    $confirmPassword = $data['confirmPassword'];
    $dob = $data['dob'];
    $gender = $data['gender'];
    $address = $data['address'];
    $city = $data['city'];
    $country = $data['country'];


    $sql = "INSERT INTO `users` (`sr.no`, `fullName`, `username`, `email`, `phone`, `password`, `cpassword`, `dob`, `gender`, `address`, `city`, `country`) VALUES (NULL, '$fullName', '$username', '$email', '$phone', '$password', '$confirmPassword', '$dob', '$gender', '$address', '$city', '$country')";
    if(mysqli_query($conn, $sql)) {
        http_response_code(200);
        echo json_encode(array("message" => "User registered successfully."));
    } else {
        http_response_code(500);
        echo json_encode(array("message" => "Error: " . mysqli_error($conn)));
    }
} else {
    http_response_code(400);
    echo json_encode(array("message" => "Invalid input."));
}
?>
