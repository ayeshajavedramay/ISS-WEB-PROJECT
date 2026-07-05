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
if(isset($data['name']) && isset($data['category']) && isset($data['price']) && isset($data['stock'])) {
    $name = $data['name'];
    $category = $data['category'];
    $price = $data['price'];
    $stock = $data['stock'];
    $imageUrl = isset($data['imageUrl']) ? $data['imageUrl'] : 'https://images.unsplash.com/photo-1599566150163-29194dcaad36?auto=format&fit=crop&w=400&q=80';
    $description = isset($data['description']) ? $data['description'] : 'Quick added safety product';

    $sql = "INSERT INTO `products` (`Sr.no`, `Product_name`, `Product_category`, `Product_price`, `Product_stock`, `product_img`, `product_desc`) VALUES (NULL, '$name', '$category', '$price', '$stock', '$imageUrl', '$description')";
    if(mysqli_query($conn, $sql)) {
        http_response_code(200);
        echo json_encode(array("message" => "Product added successfully."));
    } else {
        http_response_code(500);
        echo json_encode(array("message" => "Error: " . mysqli_error($conn)));
    }
}
?>