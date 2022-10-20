package com.tcsManager.tcsmanager.service.impl;

import java.lang.reflect.Field;
import java.util.List;
import java.util.Map;

import com.tcsManager.tcsmanager.entity.TestCase;
import com.tcsManager.tcsmanager.entity.TestElement;
import com.tcsManager.tcsmanager.exception.TestCaseNotFoundException;
import com.tcsManager.tcsmanager.exception.TestElementNotFoundException;
import com.tcsManager.tcsmanager.repository.TestCaseRepository;
import com.tcsManager.tcsmanager.repository.TestElementRepository;
import com.tcsManager.tcsmanager.service.TestElementService;

import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.util.ReflectionUtils;

/**
 * TestElementServiceImpl
 */
@Service
public class TestElementServiceImpl implements TestElementService {

    private TestElementRepository testElementRepository;
    private TestCaseRepository testCaseRepository;

    public TestElementServiceImpl(TestElementRepository testElementRepository,
            TestCaseRepository testCaseRepository) {
        this.testElementRepository = testElementRepository;
        this.testCaseRepository = testCaseRepository;
    }

    @Override
    public ResponseEntity<TestElement> getTestElement(long testElementId)
        throws TestElementNotFoundException {

        TestElement testElement = testElementRepository.findById(testElementId)
            .orElseThrow(() -> new TestElementNotFoundException(
                        String.format(
                            "Test Element identified with ID::%d not found",
                            testElementId)));

        return ResponseEntity.ok(testElement);
    }

    @Override
    public ResponseEntity<TestElement> createTestElement(TestElement testElement, long testCaseId)
        throws TestCaseNotFoundException {

        TestCase testCase = testCaseRepository.findById(testCaseId)
            .orElseThrow(() -> new TestCaseNotFoundException (
                        String.format(
                            "Test Case identified with ID::%d not found",
                            testCaseId)));

        testElement.setTestCase(testCase);
        testCase.getTestElements().add(testElement);

        TestElement newTestElement = testElementRepository.save(testElement);

        return ResponseEntity.ok(newTestElement);
    }

    @Override
    public ResponseEntity<List<TestElement>> getAllTestElements() {
        List<TestElement> testElements = testElementRepository.findAll();
        return ResponseEntity.ok(testElements);
    }

    @Override
    public ResponseEntity<List<TestElement>> getTestElementsByTestCaseId(long testCaseId)
        throws TestCaseNotFoundException {
        TestCase testCase = testCaseRepository.findById(testCaseId)
            .orElseThrow(() -> new TestCaseNotFoundException(String.format(
                            "Test Case identified with ID::%d not found",
                            testCaseId)));
        List<TestElement> testElements = testCase.getTestElements();
        return ResponseEntity.ok(testElements);
    }

    @Override
    public ResponseEntity<TestElement> updateTestElement(long testElementId, TestElement testElementUpdated)
            throws TestElementNotFoundException {

        TestElement testElement = testElementRepository.findById(testElementId)
            .orElseThrow(() -> new TestElementNotFoundException(
                        String.format(
                            "Test Element identified with ID::%d not found",
                            testElementId)));

        testElement.setField(testElementUpdated.getField());
        testElement.setValue(testElementUpdated.getValue());
        testElement.setScenario(testElementUpdated.getScenario());
        testElement.setExpectedResponse(testElementUpdated.getExpectedResponse());
        testElement.setMatching(testElementUpdated.isMatching());
        testElement.setSystemResponse(testElementUpdated.getSystemResponse());

        TestElement savedTestElement = testElementRepository.save(testElement);

        return ResponseEntity.ok(savedTestElement);
    }

    @Override
    public ResponseEntity<TestElement> partialUpdateTestElement(long testElementId,
            Map<Object, Object> fields) throws TestElementNotFoundException {

        TestElement testElement = testElementRepository.findById(testElementId)
            .orElseThrow(() -> new TestElementNotFoundException(
                        String.format(
                            "Test Element identified with ID::%d not found",
                            testElementId)));

        fields.forEach((key, value) -> {
            Field field = ReflectionUtils.findField(TestElement.class, (String) key);
            field.setAccessible(true);
            ReflectionUtils.setField(field, testElement, value);
        });

        TestElement updatedTestElement = testElementRepository.save(testElement);

        return ResponseEntity.ok(updatedTestElement);
    }

    @Override
    public ResponseEntity<?> deleteTestElement(long testElementId)
        throws TestElementNotFoundException {

        TestElement testElement = testElementRepository.findById(testElementId)
            .orElseThrow(() -> new TestElementNotFoundException(
                        String.format(
                            "Test Element identified with ID::%d not found",
                            testElementId)));
        testElementRepository.delete(testElement);
        return ResponseEntity.noContent().build();
    }

}
