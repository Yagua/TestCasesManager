package com.proyectoIntegrador.proyecto_iv.service.impl;

import java.util.List;

import com.proyectoIntegrador.proyecto_iv.entity.Tester;
import com.proyectoIntegrador.proyecto_iv.exception.TesterNotFoundException;
import com.proyectoIntegrador.proyecto_iv.service.TesterService;

import org.springframework.stereotype.Service;

/**
 * TesterServiceImpl
 */
@Service
public class TesterServiceImpl implements TesterService {

    @Override
    public Tester getTester(long testerId) throws TesterNotFoundException {
        // TODO Auto-generated method stub
        return null;
    }

    @Override
    public Tester createTester(Tester tester) {
        // TODO Auto-generated method stub
        return null;
    }

    @Override
    public List<Tester> getAllTesters() {
        // TODO Auto-generated method stub
        return null;
    }

    @Override
    public Tester updateTester(long testerId, Tester testerUpdated) throws TesterNotFoundException {
        // TODO Auto-generated method stub
        return null;
    }

    @Override
    public void deleteTester(long testerId) throws TesterNotFoundException {
        // TODO Auto-generated method stub
    }

}
