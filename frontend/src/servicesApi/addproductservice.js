import axios from "axios";
export const addProduct = async (productData) => {
    return await axios.post("http://localhost/Database/addproduct_process.php", productData);
}
