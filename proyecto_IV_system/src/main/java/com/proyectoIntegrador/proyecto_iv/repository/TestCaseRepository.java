package com.proyectoIntegrador.proyecto_iv.repository;

import java.util.List;

import com.proyectoIntegrador.proyecto_iv.entity.TestCase;

import org.springframework.data.jpa.repository.JpaRepository;

/**
 * TestCaseRepository
 */
public interface TestCaseRepository extends JpaRepository<TestCase, Long> {
    List<TestCase> findByUser(long userId);
}
