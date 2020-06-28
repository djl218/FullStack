import axios from 'axios'
const baseURL = 'http://localhost:4001/persons'

const getAll = () => {
    const request = axios.get(baseURL)
    return request.then(response => response.data)
}

const create = newPerson => {
    const request = axios.post(baseURL, newPerson)
    return request.then(response => response.data)
}

const update = (id, newPerson) => {
    const request = axios.put(`${baseURL}/${id}`, newPerson)
    return request.then(response =>response.data)
}

export default { getAll, create, update }