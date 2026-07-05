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
$sql = "SELECT `Sr.no` as id, `Product_name` as name, `Product_category` as category, `Product_price` as price, `Product_stock` as stock, `product_img` as img FROM `products`";
$result = mysqli_query($conn, $sql);
if(mysqli_num_rows($result) > 0) {
    $products = array();
    while($row = mysqli_fetch_assoc($result)) {
        $products[] = $row;
    }
    http_response_code(200);
    echo json_encode($products);
} else {
    http_response_code(404);
    echo json_encode(array("message" => "No products found."));
}

?>