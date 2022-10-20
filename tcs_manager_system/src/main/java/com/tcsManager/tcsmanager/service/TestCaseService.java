package com.tcsManager.tcsmanager.service;

import java.util.List;
import java.util.Map;

import com.tcsManager.tcsmanager.entity.TestCase;
import com.tcsManager.tcsmanager.exception.TestCaseNotFoundException;
import com.tcsManager.tcsmanager.exception.UserNotFoundException;

import org.springframework.http.ResponseEntity;

/**
 * TestCaseService
 */
public interface TestCaseService {

    ResponseEntity<TestCase> getTestCase(long testCaseId) throws TestCaseNotFoundException;

    ResponseEntity<TestCase> createTestCase(TestCase testCase, long userId) throws UserNotFoundException;

    ResponseEntity<List<TestCase>> getAllTestCases();

    ResponseEntity<List<TestCase>> getTestCasesByUserId(long userId) throws UserNotFoundException;

    ResponseEntity<TestCase> updateTestCase(long testCaseId, TestCase testCaseUpdated) throws TestCaseNotFoundException;

    ResponseEntity<TestCase> partialUpdateTestCase(long testCaseId, Map<Object, Object> fields)
            throws TestCaseNotFoundException;

    ResponseEntity<?> deleteTestCase(long testCaseId) throws TestCaseNotFoundException;
}
