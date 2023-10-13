import axios from "axios";

export async function getPeople(req, res) {
    const { data } = await axios.get("https://jsonplaceholder.typicode.com/users")
    res.json(data);
}