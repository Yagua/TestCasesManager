import axios from "axios";

const TEST_ELEMENT_BASE_API_URL = "http://localhost:8080/api/v1/test-elements/";

class TestElementService {

    getAllTestElements() {
        return axios.get(TEST_ELEMENT_BASE_API_URL)
            .then(response => response.data)
    }

    getTestElement(testElementId) {
        return axios.get(TEST_ELEMENT_BASE_API_URL + `${testElementId}`)
            .then(response => response.data)
    }

    getTestElementsByTestCaseId(testCaseId) {
        return axios.get(TEST_ELEMENT_BASE_API_URL + `tc/${testCaseId}`)
            .then(response => response.data)
    }

    createTestElement(testCaseId, testElement) {
        return axios.post(TEST_ELEMENT_BASE_API_URL + `tc/${testCaseId}`, testElement)
            .then(response => response.data)
    }

    updateTestElement(testElementId) {
        return axios.put(TEST_ELEMENT_BASE_API_URL + `${testElementId}`)
            .then(response => response.data)
    }

    partialUpdateTestElement(testElementId, testElement) {
        return axios.patch(TEST_ELEMENT_BASE_API_URL + `${testElementId}`, testElement)
            .then(response => response.data)
    }

    deleteTestElement(testElementId) {
        return axios.delete(TEST_ELEMENT_BASE_API_URL + `${testElementId}`)
            .then(response => response.data)
    }
}

export default new TestElementService();
