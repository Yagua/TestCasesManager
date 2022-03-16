import axios from 'axios'

const LOGIN_BASE_URL = "http://localhost:8080/api/v1/auth"

class AuthService {
    loginUser(userName, userPassword) {
        const userCredentials = {
            userName: userName,
            userPassword: userPassword
        }
        return axios.post(LOGIN_BASE_URL + "/login", userCredentials)
            .then(user => user.data)
    }
}

export default new AuthService()
