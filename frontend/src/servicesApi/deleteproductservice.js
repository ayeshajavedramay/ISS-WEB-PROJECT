import axios from "axios";
export const deleteProduct = async (productId) => {
    return await axios.post("https://iss.site.je/Database/deleteproduct_process.php", { id: productId });
}