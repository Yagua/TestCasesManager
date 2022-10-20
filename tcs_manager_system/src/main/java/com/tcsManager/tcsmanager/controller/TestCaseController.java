package com.tcsManager.tcsmanager.controller;

import java.util.List;
import java.util.Map;

import com.tcsManager.tcsmanager.entity.TestCase;
import com.tcsManager.tcsmanager.exception.TestCaseNotFoundException;
import com.tcsManager.tcsmanager.exception.UserNotFoundException;
import com.tcsManager.tcsmanager.service.TestCaseService;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

/**
 * TestCaseController
 */

@RestController
@RequestMapping("/api/v1/test-cases")
@CrossOrigin(origins = {"http://localhost:3000"})
public class TestCaseController {

    private TestCaseService testCaseService;

    public TestCaseController(TestCaseService testCaseService) {
        this.testCaseService = testCaseService;
    }

    @GetMapping
    public ResponseEntity<List<TestCase>> getAllTestCases() {
        return testCaseService.getAllTestCases();
    }

    @GetMapping("/u/{userId}")
    public ResponseEntity<List<TestCase>> getTestCasesByUserId(@PathVariable long userId)
        throws UserNotFoundException {
        return testCaseService.getTestCasesByUserId(userId);
    }

    @GetMapping("/{testCaseId}")
    public ResponseEntity<TestCase> getTestCase(@PathVariable long testCaseId)
        throws TestCaseNotFoundException {
        return testCaseService.getTestCase(testCaseId);
    }

    @PostMapping("/u/{userId}")
    @ResponseStatus(HttpStatus.CREATED)
    public ResponseEntity<TestCase> createTestCase(@RequestBody TestCase newTestCase,
            @PathVariable long userId) throws UserNotFoundException {
        return testCaseService.createTestCase(newTestCase, userId);
    }

    @PutMapping("/{testCaseId}")
    public ResponseEntity<TestCase> updateTestCase(
            @PathVariable long testCaseId,
            @RequestBody TestCase TestCaseUpdated)
            throws TestCaseNotFoundException {

        return testCaseService.updateTestCase(testCaseId, TestCaseUpdated);
    }

    @PatchMapping("/{testCaseId}")
    public ResponseEntity<TestCase> partialUpdateTestCase(
            @PathVariable long testCaseId,
            @RequestBody Map<Object, Object> fields)
            throws TestCaseNotFoundException {

        return testCaseService.partialUpdateTestCase(testCaseId, fields);
    }

    @DeleteMapping("/{testCaseId}")
    public ResponseEntity<?> deleteTestCase(@PathVariable long testCaseId)
        throws TestCaseNotFoundException {
        return testCaseService.deleteTestCase(testCaseId);
    }
}
