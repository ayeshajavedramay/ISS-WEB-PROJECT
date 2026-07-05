<?php
$servername = "localhost";
$username = "root";
$password = "";
$database = "ISS";


$conn = mysqli_connect($servername, $username, $password);

if(!$conn) {
    die("Connection failed: " . mysqli_connect_error());
}



$sql = "CREATE DATABASE IF NOT EXISTS " . $database;
mysqli_query($conn, $sql);


mysqli_select_db($conn, $database);

// Create users table if not exists
$table_users = "CREATE TABLE IF NOT EXISTS `users` (
    `sr.no` INT AUTO_INCREMENT PRIMARY KEY,
    `fullName` VARCHAR(255) NOT NULL,
    `username` VARCHAR(255) NOT NULL,
    `email` VARCHAR(255) NOT NULL,
    `phone` VARCHAR(255) NOT NULL,
    `password` VARCHAR(255) NOT NULL,
    `cpassword` VARCHAR(255) NOT NULL,
    `dob` DATE NOT NULL,
    `gender` VARCHAR(50) NOT NULL,
    `address` TEXT NOT NULL,
    `city` VARCHAR(100) NOT NULL,
    `country` VARCHAR(100) NOT NULL
)";
mysqli_query($conn, $table_users);

// Create products table if not exists
$table_products = "CREATE TABLE IF NOT EXISTS `products` (
    `Sr.no` INT AUTO_INCREMENT PRIMARY KEY,
    `Product_name` VARCHAR(255) NOT NULL,
    `Product_category` VARCHAR(100) NOT NULL,
    `Product_price` VARCHAR(100) NOT NULL,
    `Product_stock` INT NOT NULL,
    `product_img` VARCHAR(500) NOT NULL,
    `product_desc` TEXT NOT NULL
)";
mysqli_query($conn, $table_products);
?>
