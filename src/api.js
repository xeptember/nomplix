import axios from "axios";

const api = axios.create({
    baseURL: "https://api.themoviedb.org/3/",
    params: {
        api_key: "6110de46475c95df6435e74fbf28566c",
        language: "en-US"
    }
})

export default api;