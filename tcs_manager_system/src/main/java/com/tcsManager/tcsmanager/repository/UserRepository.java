package com.tcsManager.tcsmanager.repository;

import com.tcsManager.tcsmanager.entity.User;

import org.springframework.data.jpa.repository.JpaRepository;

/**
 * UserRepository
 */
public interface UserRepository extends JpaRepository<User, Long> {

}
