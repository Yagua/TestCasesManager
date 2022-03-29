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

import org.springframework.http.HttpStatus;
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
    public TestElement getTestElement(long testElementId)
        throws TestElementNotFoundException {

        return testElementRepository.findById(testElementId)
            .orElseThrow(() -> new TestElementNotFoundException(
                        String.format(
                            "Test Element identified with ID::%d not found",
                            testElementId)));
    }

    @Override
    public TestElement createTestElement(TestElement testElement, long testCaseId)
        throws TestCaseNotFoundException {

        TestCase testCase = testCaseRepository.findById(testCaseId)
            .orElseThrow(() -> new TestCaseNotFoundException (
                        String.format(
                            "Test Case identified with ID::%d not found",
                            testCaseId)));

        testElement.setTestCase(testCase);
        testCase.getTestElements().add(testElement);

        return testElementRepository.save(testElement);
    }

    @Override
    public List<TestElement> getAllTestElements() {
        return testElementRepository.findAll();
    }

    @Override
    public List<TestElement> getTestElementsByTestCaseId(long testCaseId)
        throws TestCaseNotFoundException {
        TestCase testCase = testCaseRepository.findById(testCaseId)
            .orElseThrow(() -> new TestCaseNotFoundException(String.format(
                            "Test Case identified with ID::%d not found",
                            testCaseId)));
        return testCase.getTestElements();
    }

    @Override
    public TestElement updateTestElement(long testElementId, TestElement testElementUpdated)
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

        return testElementRepository.save(testElement);
    }

    @Override
    public TestElement partialUpdateTestElement(long testElementId,
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

        return testElementRepository.save(testElement);
    }

    @Override
    public ResponseEntity<String> deleteTestElement(long testElementId)
        throws TestElementNotFoundException {

        TestElement testElement = testElementRepository.findById(testElementId)
            .orElseThrow(() -> new TestElementNotFoundException(
                        String.format(
                            "Test Element identified with ID::%d not found",
                            testElementId)));
        testElementRepository.delete(testElement);
        return new ResponseEntity<String>(
                String.format("Test Element identified with ID::%d deleted successfully",
                    testElementId), HttpStatus.OK);
    }

}
