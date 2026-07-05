import axios from "axios";
export const registerUsers = async (userData) => {
    return await axios.post("https://iss.site.je/Database/register_process.php", userData);
}