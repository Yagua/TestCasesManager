import axios from "axios";

const USER_BASE_API_URL = "http://localhost:8080/api/v1/users/"

class UserService {
    getAllUsers() {
        return axios.get(USER_BASE_API_URL)
            .then(response => response.data)
    }

    getUserById(userId) {
        return axios.get(USER_BASE_API_URL + `${userId}`)
            .then(response => response.data)
    }

    updateUser(userId, user) {
        return axios.put(USER_BASE_API_URL + `${userId}`, user)
            .then(response => response.data)
    }

    partialUpdate(userId, user) {
        return axios.patch(USER_BASE_API_URL + `${userId}`, user)
            .then(response => response.data)
    }

    createUser(user) {
        return axios.post(USER_BASE_API_URL, user)
            .then(response => response.data)
    }

    deleteUser(userId) {
        return axios.delete(USER_BASE_API_URL + `${userId}`)
            .then(response => response.data)
    }
}

export default new UserService()

