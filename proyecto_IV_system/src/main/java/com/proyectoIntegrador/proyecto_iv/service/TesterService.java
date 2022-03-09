package com.proyectoIntegrador.proyecto_iv.service;

import java.util.List;

import com.proyectoIntegrador.proyecto_iv.entity.Tester;
import com.proyectoIntegrador.proyecto_iv.exception.TesterNotFoundException;

/**
 * TesterService
 */
public interface TesterService {

    Tester getTester(long testerId) throws TesterNotFoundException;

    Tester createTester(Tester tester);

    List<Tester> getAllTesters();

    Tester updateTester(long testerId, Tester testerUpdated)
            throws TesterNotFoundException;

    void deleteTester(long testerId) throws TesterNotFoundException;

}
