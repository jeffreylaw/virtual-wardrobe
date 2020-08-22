import axios from './axiosInstance'
import tokenHelper from './tokenHelper'
const baseUrl = 'http://localhost:3001/outfits'

const getAll = async () => {
    const config = {
        headers: { Authorization: tokenHelper.getToken() },
    }
    const response = await axios.get(baseUrl, config)
    return response.data
}

const create = async newObject => {
    const config = {
        headers: { Authorization: tokenHelper.getToken() }
    }
    const response = await axios.post(baseUrl, newObject, config)
    return response.data
}

const update = async (id, newObject) => {
    const config = {
        headers: { Authorization: tokenHelper.getToken() }
    }
    const response = await axios.put(`${baseUrl}/${id}`, newObject, config)
    return response.data
}

const deleteOutfit = async (id) => {
    const config = {
        headers: { Authorization: tokenHelper.getToken() },
    }
    const response = await axios.delete(`${baseUrl}/${id}`, config)
    return response
}

export default {
    getAll,
    create,
    update,
    deleteOutfit
}