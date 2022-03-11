package com.proyectoIntegrador.proyecto_iv.service;

import java.util.List;
import java.util.Map;

import com.proyectoIntegrador.proyecto_iv.entity.TestElement;
import com.proyectoIntegrador.proyecto_iv.exception.TestCaseNotFoundException;
import com.proyectoIntegrador.proyecto_iv.exception.TestElementNotFoundException;

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

    TestElement updateTestElement(long testElementId, TestElement testElementUpdated)
            throws TestElementNotFoundException;

    TestElement partialUpdateTestElement(long testElementId,
            Map<Object, Object> fields) throws TestElementNotFoundException;

    ResponseEntity<String> deleteTestElement(long testElementId)
            throws TestElementNotFoundException;
}
