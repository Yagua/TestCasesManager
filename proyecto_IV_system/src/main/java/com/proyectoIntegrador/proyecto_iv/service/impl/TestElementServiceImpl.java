package com.proyectoIntegrador.proyecto_iv.service.impl;

import java.util.List;

import com.proyectoIntegrador.proyecto_iv.entity.TestElement;
import com.proyectoIntegrador.proyecto_iv.exception.TestElementNotFoundException;
import com.proyectoIntegrador.proyecto_iv.service.TestElementService;

import org.springframework.stereotype.Service;

/**
 * TestElementService
 */
@Service
public class TestElementServiceImpl implements TestElementService {

    @Override
    public TestElement getTestElement(long testElementId) throws TestElementNotFoundException {
        // TODO Auto-generated method stub
        return null;
    }

    @Override
    public TestElement createTestElement(TestElement testElement) {
        // TODO Auto-generated method stub
        return null;
    }

    @Override
    public List<TestElement> getAllTestElements() {
        // TODO Auto-generated method stub
        return null;
    }

    @Override
    public TestElement updateTestElement(long testElementId, TestElement testElementUpdated)
            throws TestElementNotFoundException {
        // TODO Auto-generated method stub
        return null;
    }

    @Override
    public void deleteTestElement(long testElementId) throws TestElementNotFoundException {
        // TODO Auto-generated method stub
    }

}
