
import axios from 'axios'

export const api = axios.create({
    // baseURL: 'https://notcodeapi.herokuapp.com/',
    baseURL: 'http://localhost:3010/',
})

export default api;