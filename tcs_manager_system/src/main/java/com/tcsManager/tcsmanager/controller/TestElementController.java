package com.tcsManager.tcsmanager.controller;

import java.util.List;
import java.util.Map;

import com.tcsManager.tcsmanager.entity.TestElement;
import com.tcsManager.tcsmanager.exception.TestCaseNotFoundException;
import com.tcsManager.tcsmanager.exception.TestElementNotFoundException;
import com.tcsManager.tcsmanager.service.TestElementService;

import org.springframework.beans.factory.annotation.Autowired;
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
import org.springframework.web.bind.annotation.RestController;

/**
 * TestElementController
 */
@RestController
@RequestMapping("/api/v1/test-elements")
@CrossOrigin(origins = {"http://localhost:3000"})
public class TestElementController {

    @Autowired
    private TestElementService testElementService;

    @GetMapping
    public List<TestElement> getAllTestElements() {
        return testElementService.getAllTestElements();
    }

    @GetMapping("/{testElementId}")
    public TestElement getTestElement(@PathVariable long testElementId)
        throws TestElementNotFoundException {
        return testElementService.getTestElement(testElementId);
    }

    @PostMapping("/tc/{testCaseId}/add")
    public TestElement createTestElement(@RequestBody TestElement testElement,
            @PathVariable long testCaseId) throws TestCaseNotFoundException {
        return testElementService.createTestElement(testElement, testCaseId);
    }

    @PutMapping("/update/{testElementId}")
    public TestElement updateTestElement(@PathVariable long testElementId,
            @RequestBody TestElement testElement) throws TestElementNotFoundException {
        return testElementService.updateTestElement(testElementId, testElement);
    }

    @PatchMapping("/update/{testElementId}")
    public TestElement partialUpdateTestElement(@PathVariable long testElementId,
            @RequestBody Map<Object, Object> fields) throws TestElementNotFoundException {
        return testElementService.partialUpdateTestElement(testElementId, fields);
    }

    @DeleteMapping("/delete/{testElementId}")
    public ResponseEntity<String> deleteTestElement(@PathVariable long testElementId)
        throws TestElementNotFoundException {
        return testElementService.deleteTestElement(testElementId);
    }
}