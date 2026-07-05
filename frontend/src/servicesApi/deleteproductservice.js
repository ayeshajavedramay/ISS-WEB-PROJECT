import axios from "axios";
export const deleteProduct = async (productId) => {
    return await axios.post("http://localhost/Database/deleteproduct_process.php", { id: productId });
}