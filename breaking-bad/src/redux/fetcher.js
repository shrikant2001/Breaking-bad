import axios from "axios";

//Change api source here
const fetcher = axios.create({
    baseURL: "https://breakingbadapi.com/api/",
})

export default fetcher;