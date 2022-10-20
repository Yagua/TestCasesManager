package com.tcsManager.tcsmanager.service;

import java.util.List;
import java.util.Map;

import com.tcsManager.tcsmanager.entity.Tester;
import com.tcsManager.tcsmanager.exception.TestCaseNotFoundException;
import com.tcsManager.tcsmanager.exception.TesterNotFoundException;

import org.springframework.http.ResponseEntity;

/**
 * TesterService
 */
public interface TesterService {

    ResponseEntity<Tester> getTester(long testerId) throws TesterNotFoundException;

    ResponseEntity<Tester> createTester(Tester tester, long testCaseId) throws TestCaseNotFoundException;

    ResponseEntity<List<Tester>> getAllTesters();

    ResponseEntity<Tester> updateTester(long testerId, Tester testerUpdated) throws TesterNotFoundException;

    ResponseEntity<Tester> partialUpdateTester(long testerId, Map<Object, Object> fields)
            throws TesterNotFoundException;

    ResponseEntity<?> deleteTester(long testerId, long testCaseId)
            throws TesterNotFoundException, TestCaseNotFoundException;

}
