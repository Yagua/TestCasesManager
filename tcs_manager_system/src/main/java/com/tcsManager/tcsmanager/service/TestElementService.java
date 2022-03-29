package com.tcsManager.tcsmanager.service;

import java.util.List;
import java.util.Map;

import com.tcsManager.tcsmanager.entity.TestElement;
import com.tcsManager.tcsmanager.exception.TestCaseNotFoundException;
import com.tcsManager.tcsmanager.exception.TestElementNotFoundException;

import org.springframework.http.ResponseEntity;

/**
 * TestElementService
 */
public interface TestElementService {

    TestElement getTestElement(long testElementId)
            throws TestElementNotFoundException;

    TestElement createTestElement(TestElement testElement, long testCaseId)
            throws TestCaseNotFoundException;

    List<TestElement> getAllTestElements();

    List<TestElement> getTestElementsByTestCaseId(long testCaseId)
            throws TestCaseNotFoundException;

    TestElement updateTestElement(long testElementId, TestElement testElementUpdated)
            throws TestElementNotFoundException;

    TestElement partialUpdateTestElement(long testElementId,
            Map<Object, Object> fields) throws TestElementNotFoundException;

    ResponseEntity<String> deleteTestElement(long testElementId)
            throws TestElementNotFoundException;
}
