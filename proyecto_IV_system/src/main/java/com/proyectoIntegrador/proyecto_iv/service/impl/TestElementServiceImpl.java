package com.proyectoIntegrador.proyecto_iv.service.impl;

import java.lang.reflect.Field;
import java.util.List;
import java.util.Map;

import com.proyectoIntegrador.proyecto_iv.entity.TestCase;
import com.proyectoIntegrador.proyecto_iv.entity.TestElement;
import com.proyectoIntegrador.proyecto_iv.exception.TestCaseNotFoundException;
import com.proyectoIntegrador.proyecto_iv.exception.TestElementNotFoundException;
import com.proyectoIntegrador.proyecto_iv.repository.TestCaseRepository;
import com.proyectoIntegrador.proyecto_iv.repository.TestElementRepository;
import com.proyectoIntegrador.proyecto_iv.service.TestElementService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.util.ReflectionUtils;

/**
 * TestElementService
 */
@Service
public class TestElementServiceImpl implements TestElementService {

    private TestElementRepository testElementRepository;
    private TestCaseRepository testCaseRepository;

    @Autowired
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

        testCase.getTestElements().add(testElement);
        return testElementRepository.save(testElement);
    }

    @Override
    public List<TestElement> getAllTestElements() {
        return testElementRepository.findAll();
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
