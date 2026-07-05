<?php
header ("Access-Control-Allow-Origin: *");
header ("Access-Control-Allow-Methods: POST");      
header ("Access-Control-Allow-Headers: Content-Type");
if ($_SERVER['REQUEST_METHOD'] == 'OPTIONS') {
    http_response_code(200);
    exit();
}   
include 'connection.php';
$rawData = file_get_contents("php://input");
$data = json_decode($rawData, true);
if(isset($data['id'])) {
    $id = $data['id'];
    $sql = "DELETE FROM `products` WHERE `Sr.no` = '$id'";
    if(mysqli_query($conn, $sql)) {
        http_response_code(200);
        echo json_encode(array("success" => true, "message" => "Product deleted successfully."));
    } else {
        http_response_code(500);
        echo json_encode(array("success" => false, "message" => "Error: " . mysqli_error($conn)));
    }
}   
?>