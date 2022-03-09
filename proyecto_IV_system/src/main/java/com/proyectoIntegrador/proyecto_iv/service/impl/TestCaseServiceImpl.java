package com.proyectoIntegrador.proyecto_iv.service.impl;

import java.util.List;

import com.proyectoIntegrador.proyecto_iv.entity.TestCase;
import com.proyectoIntegrador.proyecto_iv.entity.User;
import com.proyectoIntegrador.proyecto_iv.exception.TestCaseNotFoundException;
import com.proyectoIntegrador.proyecto_iv.exception.UserNotFoundException;
import com.proyectoIntegrador.proyecto_iv.repository.TestCaseRepository;
import com.proyectoIntegrador.proyecto_iv.repository.UserRepository;
import com.proyectoIntegrador.proyecto_iv.service.TestCaseService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
 * TestCaseService
 */
@Service
public class TestCaseServiceImpl implements TestCaseService {

    private TestCaseRepository testCaseRepository;
    private UserRepository userRepository;

    @Autowired
    public TestCaseServiceImpl(TestCaseRepository testCaseRepository,
            UserRepository userRepository){
        this.testCaseRepository = testCaseRepository;
        this.userRepository = userRepository;
    }

    @Override
    public TestCase getTestCase(long id) throws TestCaseNotFoundException {
        return testCaseRepository.findById(id)
            .orElseThrow(() -> new TestCaseNotFoundException(
                        String.format(
                            "Test Case identified with ID::%d not found", id)));
    }

    @Override
    public TestCase createTestCase(TestCase testCase, long userId)
        throws UserNotFoundException {
        User user = userRepository.findById(userId)
            .orElseThrow(() -> new UserNotFoundException(
                        String.format("User identified with ID::%d not found", userId)));
        testCase.setUser(user);
        user.getTestCases().add(testCase);
        return testCaseRepository.save(testCase);
    }

    @Override
    public List<TestCase> getAllTestCases() {
        return testCaseRepository.findAll();
    }

    @Override
    public TestCase updateTestCase(long testCaseId, TestCase testCaseUpdated)
            throws TestCaseNotFoundException {

        TestCase testCase = testCaseRepository.findById(testCaseId)
            .orElseThrow(() -> new TestCaseNotFoundException(
                        String.format(
                            "Test Case identified with ID::%d not found", testCaseId)));

        // is not necessary to reasing the user
        // testCase.setUser(testCaseUpdated.getUser());
        testCase.setTestCaseName(testCaseUpdated.getTestCaseName());
        testCase.setTestCaseVersion(testCaseUpdated.getTestCaseVersion());
        testCase.setExecutionDate(testCaseUpdated.getExecutionDate());
        testCase.setSystemModule(testCaseUpdated.getSystemModule());
        testCase.setTestCaseDescription(testCaseUpdated.getTestCaseDescription());
        testCase.setPreconditions(testCaseUpdated.getPreconditions());
        testCase.setTestSteps(testCaseUpdated.getTestSteps());
        testCase.setPostconditions(testCaseUpdated.getPostconditions());
        testCase.setDefectsAndDesviations(testCaseUpdated.getDefectsAndDesviations());
        testCase.setVeredict(testCaseUpdated.getVeredict());
        testCase.setObservations(testCaseUpdated.getObservations());
        testCase.setTesters(testCaseUpdated.getTesters());
        testCase.setTestElements(testCaseUpdated.getTestElements());
        testCase.setTimeStamp(testCaseUpdated.getTimeStamp());

        return testCaseRepository.save(testCase);
    }

    @Override
    public void deleteTestCase(long testCaseId) throws TestCaseNotFoundException {
        TestCase testCase = testCaseRepository.findById(testCaseId)
            .orElseThrow(() -> new TestCaseNotFoundException(
                        String.format(
                            "Test Case identified with ID::%d not found", testCaseId)));
        testCaseRepository.delete(testCase);
    }
}
