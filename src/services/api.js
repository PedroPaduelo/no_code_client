
import axios from 'axios'

export const api = axios.create({
    baseURL: 'https://notcodeapi.herokuapp.com/',
})

export default api;