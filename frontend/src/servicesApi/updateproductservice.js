import axios from "axios";
export const updateProduct = async (productData) => {
    return await axios.post("http://localhost/Database/updateproduct_process.php", productData);
}