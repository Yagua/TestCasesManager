package com.proyectoIntegrador.proyecto_iv.service;

import java.util.List;
import java.util.Map;

import com.proyectoIntegrador.proyecto_iv.entity.TestCase;
import com.proyectoIntegrador.proyecto_iv.exception.TestCaseNotFoundException;
import com.proyectoIntegrador.proyecto_iv.exception.UserNotFoundException;

import org.springframework.http.ResponseEntity;

/**
 * TestCaseService
 */
public interface TestCaseService {

    TestCase getTestCase(long testCaseId) throws TestCaseNotFoundException;

    TestCase createTestCase(TestCase testCase, long userId) throws UserNotFoundException;

    List<TestCase> getAllTestCases();

    List<TestCase> getTestCasesByUserId(long userId) throws UserNotFoundException;

    TestCase updateTestCase(long testCaseId, TestCase testCaseUpdated)
            throws TestCaseNotFoundException;

    TestCase partialUpdateTestCase(long testCaseId,
            Map<Object, Object> fields) throws TestCaseNotFoundException;

    ResponseEntity<String> deleteTestCase(long testCaseId)
            throws TestCaseNotFoundException;
}
