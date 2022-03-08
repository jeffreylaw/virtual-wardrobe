import axios from 'axios'
const baseUrl = '/api/users'

const register = async credentials => {
    console.log("Registering")
    const response = await axios.post(baseUrl, credentials)
    console.log('Register response', response)
    return response.data
}

export default { register }