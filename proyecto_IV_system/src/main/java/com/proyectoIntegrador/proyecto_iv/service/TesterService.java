package com.proyectoIntegrador.proyecto_iv.service;

import java.util.List;

import com.proyectoIntegrador.proyecto_iv.entity.Tester;
import com.proyectoIntegrador.proyecto_iv.exception.TestCaseNotFoundException;
import com.proyectoIntegrador.proyecto_iv.exception.TesterNotFoundException;

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

    ResponseEntity<String> deleteTester(long testerId, long testCaseId)
            throws TesterNotFoundException, TestCaseNotFoundException;

}
