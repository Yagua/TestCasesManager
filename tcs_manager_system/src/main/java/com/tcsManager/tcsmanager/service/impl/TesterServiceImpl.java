package com.tcsManager.tcsmanager.service.impl;

import java.lang.reflect.Field;
import java.util.List;
import java.util.Map;

import com.tcsManager.tcsmanager.entity.TestCase;
import com.tcsManager.tcsmanager.entity.Tester;
import com.tcsManager.tcsmanager.exception.TestCaseNotFoundException;
import com.tcsManager.tcsmanager.exception.TesterNotFoundException;
import com.tcsManager.tcsmanager.repository.TestCaseRepository;
import com.tcsManager.tcsmanager.repository.TesterRepository;
import com.tcsManager.tcsmanager.service.TesterService;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.util.ReflectionUtils;

/**
 * TesterServiceImpl
 */
@Service
public class TesterServiceImpl implements TesterService {

    private TesterRepository testerRepository;
    private TestCaseRepository testCaseRepository;

    public TesterServiceImpl(TesterRepository testerRepository,
            TestCaseRepository testCaseRepository) {
        this.testerRepository = testerRepository;
        this.testCaseRepository = testCaseRepository;
    }

    @Override
    public Tester getTester(long testerId) throws TesterNotFoundException {
        return testerRepository.findById(testerId)
            .orElseThrow(() -> new TesterNotFoundException(String.format(
                            "Tester identified with ID::%d not found", testerId)));
    }

    @Override
    public Tester createTester(Tester tester, long testCaseId)
        throws TestCaseNotFoundException {

        TestCase testCase = testCaseRepository.findById(testCaseId)
            .orElseThrow(() -> new TestCaseNotFoundException(String.format(
                        "TestCase identified with ID::%d not found", testCaseId)));
        testCase.getTesters().add(tester);
        return testerRepository.save(tester);
    }

    @Override
    public List<Tester> getAllTesters() {
        return testerRepository.findAll();
    }

    @Override
    public Tester updateTester(long testerId, Tester testerUpdated)
        throws TesterNotFoundException {

        Tester tester = testerRepository.findById(testerId)
            .orElseThrow(() -> new TesterNotFoundException(String.format(
                            "Tester identified with ID::%d not found", testerId)));

        tester.setFirstName(testerUpdated.getFirstName());
        tester.setSecondName(testerUpdated.getSecondName());
        tester.setPaternalLastName(testerUpdated.getPaternalLastName());
        tester.setMaternalLastName(testerUpdated.getMaternalLastName());
        tester.setSing(testerUpdated.getSing());

        return testerRepository.save(tester);
    }

    @Override
    public Tester partialUpdateTester(long testerId, Map<Object, Object> fields)
        throws TesterNotFoundException {
        Tester tester = testerRepository.findById(testerId)
            .orElseThrow(() -> new TesterNotFoundException(String.format(
                            "Tester identified with ID::%d not found", testerId)));

        fields.forEach((key, value) -> {
            Field field = ReflectionUtils.findField(Tester.class, (String) key);
            field.setAccessible(true);
            ReflectionUtils.setField(field, tester, value);
        });
        return testerRepository.save(tester);
    }

    @Override
    public ResponseEntity<String> deleteTester(long testerId, long testCaseId)
        throws TesterNotFoundException, TestCaseNotFoundException {

        Tester tester = testerRepository.findById(testerId)
            .orElseThrow(() -> new TesterNotFoundException(String.format(
                            "Tester identified with ID::%d not found", testerId)));

        TestCase testCase = testCaseRepository.findById(testCaseId)
            .orElseThrow(() -> new TestCaseNotFoundException(String.format(
                        "TestCase identified with ID::%d not found", testCaseId)));

        testCase.getTesters().remove(tester);
        testerRepository.delete(tester);

        return new ResponseEntity<String>(
                String.format("Tester identified with ID::%d deleted successfully",
                    testCaseId), HttpStatus.OK);
    }
}
