<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST');
header('Access-Control-Allow-Headers: Content-Type');
if($_SERVER['REQUEST_METHOD'] == 'OPTIONS'){
    http_response_code(200);
    exit();
}
include 'connection.php';  
$rawData = file_get_contents("php://input");
$data = json_decode($rawData, true);

if (isset($data['productId']) && isset($data['price']) && isset($data['stock'])) {
    $productId = $data['productId'];
    $price = $data['price'];
    $stock = $data['stock'];

    $sql = "UPDATE products SET Product_price = '$price', Product_stock = '$stock' WHERE `Sr.no` = '$productId'";
    if (mysqli_query($conn, $sql)) {
        http_response_code(200);
        echo json_encode(array("success" => true, "message" => "Product updated successfully."));
    } else {
        http_response_code(500);
        echo json_encode(array("success" => false, "message" => "Error: " . mysqli_error($conn)));
    }
} else {
    http_response_code(400);
    echo json_encode(array("message" => "Invalid input."));
}   
?>  