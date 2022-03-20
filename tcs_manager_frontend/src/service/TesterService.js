import axios from "axios";

const TESTER_BASE_API_URL = "http://localhost:8080/api/v1/testers/";

class TesterService {

    getAllTesters() {
        return axios.get(TESTER_BASE_API_URL)
            .then(response => response.data)
    }

    getTester(testerId) {
        return axios.get(TESTER_BASE_API_URL + `${testerId}`)
            .then(response => response.data)
    }

    createTester(testCaseId, tester) {
        return axios.post(TESTER_BASE_API_URL + `tc/${testCaseId}`, tester)
            .then(response => response.data)
    }

    updateTester(testerId) {
        return axios.put(TESTER_BASE_API_URL + `${testerId}`)
            .then(response => response.data)
    }

    partialUpdateTester(testerId, tester) {
        return axios.patch(TESTER_BASE_API_URL + `${testerId}`, tester)
            .then(response => response.data)
    }

    deleteTester(testerId, testCaseId) {
        return axios.delete(TESTER_BASE_API_URL + `${testerId}/tc/${testCaseId}`)
            .then(response => response.data)
    }
}

export default new TesterService();
