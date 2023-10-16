import axios from "axios";
import dotenv from "dotenv";
dotenv.config();

const { API_BASE_URL } = process.env;

export async function getPeople(req, res) {
    try {
        const { data } = await axios.get(`${API_BASE_URL}/users`)
        res.render("people", { people : data })
    } catch (error) {
        console.log(error);
        res.json({ message: "Internal Error." })
    }
}