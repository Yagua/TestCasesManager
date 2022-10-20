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

    ResponseEntity<TestElement> getTestElement(long testElementId) throws TestElementNotFoundException;

    ResponseEntity<TestElement> createTestElement(TestElement testElement, long testCaseId)
            throws TestCaseNotFoundException;

    ResponseEntity<List<TestElement>> getAllTestElements();

    ResponseEntity<List<TestElement>> getTestElementsByTestCaseId(long testCaseId) throws TestCaseNotFoundException;

    ResponseEntity<TestElement> updateTestElement(long testElementId, TestElement testElementUpdated)
            throws TestElementNotFoundException;

    ResponseEntity<TestElement> partialUpdateTestElement(long testElementId, Map<Object, Object> fields)
            throws TestElementNotFoundException;

    ResponseEntity<?> deleteTestElement(long testElementId) throws TestElementNotFoundException;
}
