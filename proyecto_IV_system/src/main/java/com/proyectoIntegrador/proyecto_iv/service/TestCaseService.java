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

    public List<TestCase> getAllTestCase() {
        return testCaseRepository.findAll();
    }


    public TestCase updateUser(TestCase testCaseUpdated) {
        //     throws TestCaseNotFoundException {
        // long testCaseId = testCaseUpdated.getId();
        // TestCase testCase = testCaseRepository.findById(testCaseId)
        //     .orElseThrow(() -> new TestCaseNotFoundException(
        //                 String.format(
        //                     "Test Case identify with ID::%d not found", testCaseId)));
        // return testCaseRepository.save(testCase);
        return null;
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
