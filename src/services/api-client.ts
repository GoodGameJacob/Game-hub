import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: 'db97e323c74a4c2ebed400bd7067e36c'
    }
})