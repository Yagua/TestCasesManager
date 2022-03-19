import axios from "axios";

const TEST_CASE_BASE_API_URL = "http://localhost:8080/api/v1/test-cases/";

class TestCaseService {
    getAllTestCases() {
        return axios.get(TEST_CASE_BASE_API_URL)
            .then(response => response.data)
    }
    getTestCase(testCaseId) {
        return axios.get(TEST_CASE_BASE_API_URL + `${testCaseId}`)
            .then(response => response.data)
    }

    getTestCasesByUserId(userId) {
        return axios.get(TEST_CASE_BASE_API_URL + `u/${userId}`)
            .then(response => response.data)
    }

    createTestCase(userId, testCase) {
        return axios.post(TEST_CASE_BASE_API_URL + `u/${userId}`, testCase)
            .then(response => response.data)
    }

    updateTestCase(testCaseId) {
        return axios.put(TEST_CASE_BASE_API_URL + `${testCaseId}`)
            .then(response => response.data)
    }

    partialUpdateTestCase(testCaseId, testCase) {
        return axios.patch(TEST_CASE_BASE_API_URL + `${testCaseId}`, testCase)
            .then(response => response.data)
    }

    deleteTestCase(testCaseId) {
        return axios.delete(TEST_CASE_BASE_API_URL + `${testCaseId}`)
            .then(response => response.data)
    }
}

export default new TestCaseService();
