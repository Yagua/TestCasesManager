package com.tcsManager.tcsmanager.controller;

import java.util.List;
import java.util.Map;

import com.tcsManager.tcsmanager.entity.TestElement;
import com.tcsManager.tcsmanager.exception.TestCaseNotFoundException;
import com.tcsManager.tcsmanager.exception.TestElementNotFoundException;
import com.tcsManager.tcsmanager.service.TestElementService;

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
 * TestElementController
 */

@RestController
@RequestMapping("/api/v1/test-elements")
@CrossOrigin(origins = {"http://localhost:3000"})
public class TestElementController {

    private TestElementService testElementService;

    public TestElementController(TestElementService testElementService) {
        this.testElementService = testElementService;
    }

    @GetMapping
    public ResponseEntity<List<TestElement>> getAllTestElements() {
        return testElementService.getAllTestElements();
    }

    @GetMapping("/{testElementId}")
    public ResponseEntity<TestElement> getTestElement(@PathVariable long testElementId)
        throws TestElementNotFoundException {
        return testElementService.getTestElement(testElementId);
    }

    @GetMapping("/tc/{testCaseId}")
    public ResponseEntity<List<TestElement>> getTestElementsByTestCaseId(
            @PathVariable long testCaseId) throws TestCaseNotFoundException {
        return testElementService.getTestElementsByTestCaseId(testCaseId);
    }

    @PostMapping("/tc/{testCaseId}")
    @ResponseStatus(HttpStatus.CREATED)
    public ResponseEntity<TestElement> createTestElement(@RequestBody TestElement testElement,
            @PathVariable long testCaseId) throws TestCaseNotFoundException {
        return testElementService.createTestElement(testElement, testCaseId);
    }

    @PutMapping("/{testElementId}")
    public ResponseEntity<TestElement> updateTestElement(@PathVariable long testElementId,
            @RequestBody TestElement testElement) throws TestElementNotFoundException {
        return testElementService.updateTestElement(testElementId, testElement);
    }

    @PatchMapping("/{testElementId}")
    public ResponseEntity<TestElement> partialUpdateTestElement(@PathVariable long testElementId,
            @RequestBody Map<Object, Object> fields) throws TestElementNotFoundException {
        return testElementService.partialUpdateTestElement(testElementId, fields);
    }

    @DeleteMapping("/{testElementId}")
    public ResponseEntity<?> deleteTestElement(@PathVariable long testElementId)
        throws TestElementNotFoundException {
        return testElementService.deleteTestElement(testElementId);
    }
}
