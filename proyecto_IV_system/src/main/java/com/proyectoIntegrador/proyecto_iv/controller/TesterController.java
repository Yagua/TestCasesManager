package com.proyectoIntegrador.proyecto_iv.controller;

import java.util.List;

import com.proyectoIntegrador.proyecto_iv.entity.Tester;
import com.proyectoIntegrador.proyecto_iv.exception.TestCaseNotFoundException;
import com.proyectoIntegrador.proyecto_iv.exception.TesterNotFoundException;
import com.proyectoIntegrador.proyecto_iv.service.TesterService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
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
@RequestMapping("/api/v1/tester")
@CrossOrigin("*")
public class TesterController {

    @Autowired
    TesterService testerService;

    @GetMapping("/")
    public List<Tester> getAllTesters() {
        return testerService.getAllTesters();
    }

    @GetMapping("/{testerId}")
    public Tester getTester(@PathVariable long testerId)
        throws TesterNotFoundException {
        return testerService.getTester(testerId);
    }

    @PostMapping("/tc/{testCaseId}/add")
    public Tester createTester(@RequestBody Tester tester,
            @PathVariable long testCaseId) throws TestCaseNotFoundException {
        return testerService.createTester(tester, testCaseId);
    }

    @PutMapping("/update/{testerId}")
    public Tester updateTester( @PathVariable long testerId,
            @RequestBody Tester tester) throws TesterNotFoundException {
        return testerService.updateTester(testerId, tester);
    }

    @DeleteMapping("/tc/{testCaseId}/delete/{testerId}")
    public ResponseEntity<String> deleteTester(@PathVariable long testerId,
            @PathVariable long testCaseId) throws TesterNotFoundException,
            TestCaseNotFoundException {
        return testerService.deleteTester(testerId, testCaseId);
    }
}
