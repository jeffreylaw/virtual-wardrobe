import axios from 'axios'
const baseUrl = '/login'

const login = async credentials => {
    const config = {
        validateStatus: function (status) {
            return status >= 200 && status < 500;
        },
    }
    const response = await axios.post(baseUrl, credentials, config)
    console.log('Login response', response)
    return response.data
}

export default { login }