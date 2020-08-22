import axios from 'axios'
const baseUrl = '/users'

const register = async credentials => {
    const response = await axios.post(baseUrl, credentials)
    console.log('Regist response', response)
    return response.data
}

export default { register }