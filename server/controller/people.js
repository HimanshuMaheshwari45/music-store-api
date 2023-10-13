import axios from "axios";

export async function getPeople(req, res) {
    try {
        const { data } = await axios.get("https://jsonplaceholder.typicode.com/users")
        res.json(data);
    } catch (error) {
        res.json({ message: "Internal Error." })
    }
}