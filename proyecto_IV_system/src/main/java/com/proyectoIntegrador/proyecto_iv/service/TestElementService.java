package com.proyectoIntegrador.proyecto_iv.service;

import java.util.List;

import com.proyectoIntegrador.proyecto_iv.entity.TestElement;
import com.proyectoIntegrador.proyecto_iv.exception.TestElementNotFoundException;

import org.springframework.http.ResponseEntity;

/**
 * TestElementService
 */
public interface TestElementService {

    TestElement getTestElement(long testElementId) throws TestElementNotFoundException;

    TestElement createTestElement(TestElement testElement);

    List<TestElement> getAllTestElements();

    TestElement updateTestElement(long testElementId, TestElement testElementUpdated)
            throws TestElementNotFoundException;

    ResponseEntity<String> deleteTestElement(long testElementId)
            throws TestElementNotFoundException;
}
