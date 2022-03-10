package com.proyectoIntegrador.proyecto_iv.service.impl;

import java.util.List;

import com.proyectoIntegrador.proyecto_iv.entity.TestCase;
import com.proyectoIntegrador.proyecto_iv.entity.Tester;
import com.proyectoIntegrador.proyecto_iv.exception.TesterNotFoundException;
import com.proyectoIntegrador.proyecto_iv.repository.TesterRepository;
import com.proyectoIntegrador.proyecto_iv.service.TesterService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
 * TesterServiceImpl
 */
@Service
public class TesterServiceImpl implements TesterService {

    private TesterRepository testerRepository;

    @Autowired
    public TesterServiceImpl(TesterRepository testerRepository) {
        this.testerRepository = testerRepository;
    }

    @Override
    public Tester getTester(long testerId) throws TesterNotFoundException {
        return testerRepository.findById(testerId)
            .orElseThrow(() -> new TesterNotFoundException(String.format(
                            "Tester identified with ID::%d not found", testerId)));
    }

    @Override
    public Tester createTester(Tester tester) {
        return null;
    }

    @Override
    public List<Tester> getAllTesters() {
        return testerRepository.findAll();
    }

    @Override
    public Tester updateTester(long testerId, Tester testerUpdated) throws TesterNotFoundException {
        // TODO Auto-generated method stub
        return null;
    }

    @Override
    public void deleteTester(long testerId) throws TesterNotFoundException {
        Tester tester = testerRepository.findById(testerId)
            .orElseThrow(() -> new TesterNotFoundException(String.format(
                            "Tester identified with ID::%d not found", testerId)));

        testerRepository.delete(tester);
    }
}
