package com.tcsManager.tcsmanager.repository;

import java.util.List;

import com.tcsManager.tcsmanager.entity.TestCase;

import org.springframework.data.jpa.repository.JpaRepository;

/**
 * TestCaseRepository
 */
public interface TestCaseRepository extends JpaRepository<TestCase, Long> {
    List<TestCase> findByUser(long userId);
}
