import axios from './axiosInstance'
const baseUrl = '/login'

const login = async (credentials) => {
    const response = await axios.post(baseUrl, credentials)
    return response
}

export default { login }