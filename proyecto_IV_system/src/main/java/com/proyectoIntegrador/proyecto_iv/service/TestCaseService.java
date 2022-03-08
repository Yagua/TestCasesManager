package com.proyectoIntegrador.proyecto_iv.service;

import java.util.List;

import com.proyectoIntegrador.proyecto_iv.entity.TestCase;
import com.proyectoIntegrador.proyecto_iv.exception.TestCaseNotFoundException;
import com.proyectoIntegrador.proyecto_iv.repository.TestCaseRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
 * TestCaseService
 */
@Service
public class TestCaseService {

    @Autowired
    private TestCaseRepository testCaseRepository;

    public TestCase getTestCase(long id) throws TestCaseNotFoundException {
        return testCaseRepository.findById(id)
            .orElseThrow(() -> new TestCaseNotFoundException(
                        String.format(
                            "Test Case identify with ID::%d not found", id)));
    }

    public TestCase createTestCase(TestCase testCase) {
        return testCaseRepository.save(testCase);
    }

    public List<TestCase> getAllTestCases() {
        return testCaseRepository.findAll();
    }


    public TestCase updateTestCase(long testCaseId, TestCase testCaseUpdated)
            throws TestCaseNotFoundException {
        TestCase testCase = testCaseRepository.findById(testCaseId)
            .orElseThrow(() -> new TestCaseNotFoundException(
                        String.format(
                            "Test Case identify with ID::%d not found", testCaseId)));

        testCaseUpdated.setUser(testCase.getUser());
        testCaseUpdated.setTestCaseName(testCase.getTestCaseName());
        testCaseUpdated.setTestCaseVersion(testCase.getTestCaseVersion());
        testCaseUpdated.setExecutionDate(testCase.getExecutionDate());
        testCaseUpdated.setSystemModule(testCase.getSystemModule());
        testCaseUpdated.setTestCaseDescription(testCase.getTestCaseDescription());
        testCaseUpdated.setPreconditions(testCase.getPreconditions());
        testCaseUpdated.setTestSteps(testCase.getTestSteps());
        testCaseUpdated.setPostconditions(testCase.getPostconditions());
        testCaseUpdated.setDefectsAndDesviations(testCase.getDefectsAndDesviations());
        testCaseUpdated.setVeredict(testCase.getVeredict());
        testCaseUpdated.setObservations(testCase.getObservations());
        testCaseUpdated.setTesters(testCase.getTesters());
        testCaseUpdated.setTestElements(testCase.getTestElements());
        testCaseUpdated.setTimeStamp(testCase.getTimeStamp());

        return testCaseRepository.save(testCase);
    }

    public String deleteTestCase(long id) throws TestCaseNotFoundException {
        TestCase testCase = testCaseRepository.findById(id)
            .orElseThrow(() -> new TestCaseNotFoundException(
                        String.format(
                            "Test Case identify with ID::%d not found", id)));
        testCaseRepository.delete(testCase);
        return String.format("Test case identify with ID::%d deleted");
    }
}
