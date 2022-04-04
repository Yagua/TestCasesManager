package com.tcsManager.tcsmanager.controller;

import java.util.List;
import java.util.Map;

import com.tcsManager.tcsmanager.entity.Tester;
import com.tcsManager.tcsmanager.exception.TestCaseNotFoundException;
import com.tcsManager.tcsmanager.exception.TesterNotFoundException;
import com.tcsManager.tcsmanager.service.TesterService;

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
 * TesterController
 */

@RestController
@RequestMapping("/api/v1/testers")
@CrossOrigin(origins = {"http://localhost:3000"})
public class TesterController {

    private TesterService testerService;

    public TesterController(TesterService testerService) {
        this.testerService = testerService;
    }

    @GetMapping
    public List<Tester> getAllTesters() {
        return testerService.getAllTesters();
    }

    @GetMapping("/{testerId}")
    public Tester getTester(@PathVariable long testerId)
        throws TesterNotFoundException {
        return testerService.getTester(testerId);
    }

    @PostMapping("/tc/{testCaseId}")
    public Tester createTester(@RequestBody Tester tester,
            @PathVariable long testCaseId) throws TestCaseNotFoundException {
        return testerService.createTester(tester, testCaseId);
    }

    @PutMapping("/{testerId}")
    public Tester updateTester( @PathVariable long testerId,
            @RequestBody Tester tester) throws TesterNotFoundException {
        return testerService.updateTester(testerId, tester);
    }

    @PatchMapping("/{testerId}")
    public Tester partialUpdateTester( @PathVariable long testerId,
            @RequestBody Map<Object, Object> fields) throws TesterNotFoundException {
        return testerService.partialUpdateTester(testerId, fields);
    }

    @DeleteMapping("/{testerId}/tc/{testCaseId}")
    public ResponseEntity<String> deleteTester(@PathVariable long testerId,
            @PathVariable long testCaseId) throws TesterNotFoundException,
            TestCaseNotFoundException {
        return testerService.deleteTester(testerId, testCaseId);
    }
}
