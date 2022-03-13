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

    Tester getTester(long testerId) throws TesterNotFoundException;

    Tester createTester(Tester tester, long testCaseId)
            throws TestCaseNotFoundException;

    List<Tester> getAllTesters();

    Tester updateTester(long testerId, Tester testerUpdated)
            throws TesterNotFoundException;

    Tester partialUpdateTester(long testerId, Map<Object, Object> fields)
            throws TesterNotFoundException;

    ResponseEntity<String> deleteTester(long testerId, long testCaseId)
            throws TesterNotFoundException, TestCaseNotFoundException;

}
