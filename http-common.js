import axios from 'axios'

export default axios.create({
    baseURL: 'https://localhost:3000/api',
    headers: {
        'content-type': 'application/json'
    }
})