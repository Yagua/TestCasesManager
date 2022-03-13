import axios from "axios";

const USER_BASE_API_URL = "http://localhost:8080/api/v1/test-cases/";

class TestCaseService {
    getAllTestCases() {
        return axios.get(USER_BASE_API_URL)
            .then(response => response.data)
    }
}

export default new TestCaseService();
