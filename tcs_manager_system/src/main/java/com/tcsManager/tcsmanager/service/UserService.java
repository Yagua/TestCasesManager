package com.tcsManager.tcsmanager.service;

import java.util.List;
import java.util.Map;

import com.tcsManager.tcsmanager.entity.User;
import com.tcsManager.tcsmanager.exception.UserNotFoundException;

import org.springframework.http.ResponseEntity;

/**
 * UserService
 */
public interface UserService {

    ResponseEntity<User> getUserById(long id) throws UserNotFoundException;

    ResponseEntity<User> loginUser(String userName, String userPassword) throws UserNotFoundException;

    ResponseEntity<User> createUser(User user);

    ResponseEntity<List<User>> getAllUsers();

    ResponseEntity<User> updateUser(long userId, User userUpdated) throws UserNotFoundException;

    ResponseEntity<User> partialUpdateUser(long userId, Map<Object, Object> fields) throws UserNotFoundException;

    ResponseEntity<?> deleteUser(long id) throws UserNotFoundException;

    // temporal, just for testing
    ResponseEntity<User> updatePassword(String userName, String userPassword) throws UserNotFoundException;
}
