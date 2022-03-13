import axios from "axios";

const USER_API_URL = "http://localhost:8080/api/v1/users/"

class UserService {
    getAllUsers() {
        return axios.get(USER_API_URL)
            .then(response => response.data)
    }
}

export default new UserService()

