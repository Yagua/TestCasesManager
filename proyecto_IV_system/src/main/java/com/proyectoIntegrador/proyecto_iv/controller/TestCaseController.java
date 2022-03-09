package com.proyectoIntegrador.proyecto_iv.controller;

import java.util.List;

import com.proyectoIntegrador.proyecto_iv.entity.TestCase;
import com.proyectoIntegrador.proyecto_iv.exception.TestCaseNotFoundException;
import com.proyectoIntegrador.proyecto_iv.exception.UserNotFoundException;
import com.proyectoIntegrador.proyecto_iv.service.TestCaseService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/v1/testcase")
public class TestCaseController {

    @Autowired
    private TestCaseService testCaseService;

    @GetMapping("/")
    public List<TestCase> getAllTestCases() {
        return testCaseService.getAllTestCases();
    }

    @GetMapping("/{testCaseId}")
    public TestCase getTestCase(@PathVariable long testCaseId)
        throws TestCaseNotFoundException {
        return testCaseService.getTestCase(testCaseId);
    }

    @PostMapping("/u/{userId}/add")
    public TestCase createTestCase(@RequestBody TestCase newTestCase,
            @PathVariable long userId) throws UserNotFoundException {
        return testCaseService.createTestCase(newTestCase, userId);
    }

    @PutMapping("/update/{testCaseId}")
    public TestCase updateTestCase(
            @PathVariable long testCaseId,
            @RequestBody TestCase TestCaseUpdated)
            throws TestCaseNotFoundException {

        return testCaseService.updateTestCase(testCaseId, TestCaseUpdated);
    }

    @DeleteMapping("/delete/{testCaseId}")
    public void deleteTestCase(@PathVariable long testCaseId)
        throws TestCaseNotFoundException {
        testCaseService.deleteTestCase(testCaseId);
    }
}
