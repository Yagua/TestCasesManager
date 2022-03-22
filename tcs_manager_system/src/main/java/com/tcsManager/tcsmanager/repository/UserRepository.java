package com.tcsManager.tcsmanager.repository;

import java.util.Optional;

import com.tcsManager.tcsmanager.entity.User;

import org.springframework.data.jpa.repository.JpaRepository;

/**
 * UserRepository
 */
public interface UserRepository extends JpaRepository<User, Long> {
    Optional<User> findByUserNameAndPassword(String userName, String password);
    Optional<User> findByUserName(String userName);
}
