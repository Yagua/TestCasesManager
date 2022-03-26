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

    User getUserById(long id) throws UserNotFoundException;

    User loginUser(String userName, String userPassword)
                throws UserNotFoundException;

    User createUser(User user);

    List<User> getAllUsers();

    User updateUser(long userId, User userUpdated) throws UserNotFoundException;

    User partialUpdateUser(long userId, Map<Object, Object> fields)
            throws UserNotFoundException;

    ResponseEntity<String> deleteUser(long id) throws UserNotFoundException;

    // temporal, just for testing
    User updatePassword(String userName, String userPassword)
            throws UserNotFoundException;
}
