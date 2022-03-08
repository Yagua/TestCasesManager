package com.proyectoIntegrador.proyecto_iv.service;

import java.util.List;

import com.proyectoIntegrador.proyecto_iv.entity.TestCase;
import com.proyectoIntegrador.proyecto_iv.exception.TestCaseNotFoundException;

/**
 * TestCaseService
 */
public interface TestCaseService {

    TestCase getTestCase(long id) throws TestCaseNotFoundException;

    TestCase createTestCase(TestCase testCase);

    List<TestCase> getAllTestCases();

    TestCase updateTestCase(long testCaseId, TestCase testCaseUpdated)
            throws TestCaseNotFoundException;

    String deleteTestCase(long id) throws TestCaseNotFoundException;
}
