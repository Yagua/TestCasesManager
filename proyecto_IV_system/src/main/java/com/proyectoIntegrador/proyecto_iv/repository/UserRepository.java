package com.proyectoIntegrador.proyecto_iv.repository;

import com.proyectoIntegrador.proyecto_iv.entity.User;

import org.springframework.data.jpa.repository.JpaRepository;

/**
 * UserRepository
 */
public interface UserRepository extends JpaRepository<User, Long> {

}
