package com.proyectoIntegrador.proyecto_iv.service;

import java.util.List;

import com.proyectoIntegrador.proyecto_iv.entity.TestCase;
import com.proyectoIntegrador.proyecto_iv.exception.TestCaseNotFoundException;
import com.proyectoIntegrador.proyecto_iv.exception.UserNotFoundException;

/**
 * TestCaseService
 */
public interface TestCaseService {

    TestCase getTestCase(long testCaseId) throws TestCaseNotFoundException;

    TestCase createTestCase(TestCase testCase, long userId) throws UserNotFoundException;

    List<TestCase> getAllTestCases();

    TestCase updateTestCase(long testCaseId, TestCase testCaseUpdated)
            throws TestCaseNotFoundException;

    void deleteTestCase(long testCaseId) throws TestCaseNotFoundException;
}
