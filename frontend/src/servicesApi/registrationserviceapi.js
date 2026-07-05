import axios from "axios";
export const registerUsers = async (userData) => {
    return await axios.post("http://localhost/Database/register_process.php", userData);
}