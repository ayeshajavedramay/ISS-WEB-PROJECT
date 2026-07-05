import axios from "axios";
export const updateProduct = async (productData) => {
    return await axios.post("https://iss.site.je/Database/updateproduct_process.php", productData);
}