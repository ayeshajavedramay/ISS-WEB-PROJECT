import axios from "axios";
export const addProduct = async (productData) => {
    return await axios.post("https://iss.site.je/Database/addproduct_process.php", productData);
}
