package com.tcsManager.tcsmanager.service.impl;

import java.lang.reflect.Field;
import java.sql.Date;
import java.util.List;
import java.util.Map;

import com.tcsManager.tcsmanager.entity.TestCase;
import com.tcsManager.tcsmanager.entity.TestElement;
import com.tcsManager.tcsmanager.entity.User;
import com.tcsManager.tcsmanager.exception.TestCaseNotFoundException;
import com.tcsManager.tcsmanager.exception.UserNotFoundException;
import com.tcsManager.tcsmanager.repository.TestCaseRepository;
import com.tcsManager.tcsmanager.repository.UserRepository;
import com.tcsManager.tcsmanager.service.TestCaseService;

import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.util.ReflectionUtils;

/**
 * TestCaseServiceImpl
 */
@Service
public class TestCaseServiceImpl implements TestCaseService {

    private TestCaseRepository testCaseRepository;
    private UserRepository userRepository;

    public TestCaseServiceImpl(TestCaseRepository testCaseRepository,
            UserRepository userRepository){
        this.testCaseRepository = testCaseRepository;
        this.userRepository = userRepository;
    }

    @Override
    public ResponseEntity<TestCase> getTestCase(long id) throws TestCaseNotFoundException {
        TestCase testCase =  testCaseRepository.findById(id)
            .orElseThrow(() -> new TestCaseNotFoundException(
                        String.format(
                            "Test Case identified with ID::%d not found", id)));
        return ResponseEntity.ok(testCase);
    }

    @Override
    public ResponseEntity<TestCase> createTestCase(TestCase testCase, long userId)
        throws UserNotFoundException {
        User user = userRepository.findById(userId)
            .orElseThrow(() -> new UserNotFoundException(
                        String.format("User identified with ID::%d not found", userId)));

        List<TestElement> testElements = testCase.getTestElements();
        testElements.forEach((element) -> element.setTestCase(testCase));

        testCase.setUser(user);
        user.getTestCases().add(testCase);
        TestCase newTestCase = testCaseRepository.save(testCase);

        return ResponseEntity.ok(newTestCase);
    }

    @Override
    public ResponseEntity<List<TestCase>> getAllTestCases() {
        List<TestCase> testCases = testCaseRepository.findAll();
        return ResponseEntity.ok(testCases);
    }

    @Override
    public ResponseEntity<List<TestCase>> getTestCasesByUserId(long userId)
        throws UserNotFoundException {
        User user = userRepository.findById(userId)
            .orElseThrow(() -> new UserNotFoundException(
                        String.format("User identified with ID::%d not found", userId)));
        List<TestCase> testCases = user.getTestCases();
        return ResponseEntity.ok(testCases);
    }

    @Override
    public ResponseEntity<TestCase> updateTestCase(long testCaseId, TestCase testCaseUpdated)
            throws TestCaseNotFoundException {

        TestCase testCase = testCaseRepository.findById(testCaseId)
            .orElseThrow(() -> new TestCaseNotFoundException(
                        String.format(
                            "Test Case identified with ID::%d not found", testCaseId)));

        List<TestElement> testElements = testCaseUpdated.getTestElements();
        testElements.forEach((testElement) -> {
            testElement.setTestCase(testCase);
        });

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

        TestCase savedTestCase = testCaseRepository.save(testCase);

        return ResponseEntity.ok(savedTestCase);
    }

    @Override
    public ResponseEntity<TestCase> partialUpdateTestCase(long testCaseId, Map<Object, Object> fields)
            throws TestCaseNotFoundException {

        // TODO: improve the parcial change implementation
        TestCase testCase = testCaseRepository.findById(testCaseId)
            .orElseThrow(() -> new TestCaseNotFoundException(
                        String.format(
                            "Test Case identified with ID::%d not found", testCaseId)));
        fields.forEach((key, value) -> {
            Field field = ReflectionUtils.findField(TestCase.class, (String) key);
            field.setAccessible(true);
            if(key.equals("executionDate")) value = Date.valueOf((String) value);
            ReflectionUtils.setField(field, testCase, value);
        });

        TestCase updatedTestCase = testCaseRepository.save(testCase);

        return ResponseEntity.ok(updatedTestCase);
    }

    @Override
    public ResponseEntity<?> deleteTestCase(long testCaseId) throws TestCaseNotFoundException {
        TestCase testCase = testCaseRepository.findById(testCaseId)
            .orElseThrow(() -> new TestCaseNotFoundException(
                        String.format(
                            "Test Case identified with ID::%d not found", testCaseId)));
        testCaseRepository.delete(testCase);
        return ResponseEntity.noContent().build();
    }
}
