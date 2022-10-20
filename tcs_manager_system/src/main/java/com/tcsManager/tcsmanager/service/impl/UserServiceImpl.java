package com.tcsManager.tcsmanager.service.impl;

import java.lang.reflect.Field;
import java.util.List;
import java.util.Map;

import com.tcsManager.tcsmanager.entity.TestCase;
import com.tcsManager.tcsmanager.entity.User;
import com.tcsManager.tcsmanager.exception.UserNotFoundException;
import com.tcsManager.tcsmanager.repository.UserRepository;
import com.tcsManager.tcsmanager.service.UserService;

import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.util.ReflectionUtils;

/**
 * UserServiceImpl
 */

@Service
public class UserServiceImpl implements UserService {

    private UserRepository userRepository;

    public UserServiceImpl(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    @Override
    public ResponseEntity<User> getUserById(long userId) throws UserNotFoundException {
        User user = userRepository.findById(userId)
            .orElseThrow(() -> new UserNotFoundException(
                        String.format("User identified with ID::%d not found", userId)));

        return ResponseEntity.ok(user);
    }

    @Override
    public ResponseEntity<User> createUser(User user) {
        List<TestCase> testsCases = user.getTestCases();
        testsCases.forEach((testCase) -> {
            testCase.setUser(user);

            testCase.getTestElements().forEach((testElement) -> {
                testElement.setTestCase(testCase);
            });
        });

        User newUser = userRepository.save(user);

        return ResponseEntity.ok(newUser);
    }

    @Override
    public ResponseEntity<List<User>> getAllUsers() {
        List<User> users = userRepository.findAll();
        return ResponseEntity.ok(users);
    }

    @Override
    public ResponseEntity<User> updateUser(long userId, User userUpdated)
            throws UserNotFoundException {
        User user = userRepository.findById(userId)
            .orElseThrow(() -> new UserNotFoundException(
                        String.format("User identified with ID::%d not found",
                            userId)));

        List<TestCase> testCases = userUpdated.getTestCases();
        testCases.forEach((testCase) -> {
            testCase.setUser(user);
        });

        user.setFirstName(userUpdated.getFirstName());
        user.setSecondName(userUpdated.getSecondName());
        user.setPaternalLastName(userUpdated.getPaternalLastName());
        user.setMaternalLastName(userUpdated.getMaternalLastName());
        user.setUserName(userUpdated.getUserName());
        user.setPassword(userUpdated.getPassword());
        user.setTimeStamp(userUpdated.getTimeStamp());
        user.setTestCases(userUpdated.getTestCases());

        User savedUser = userRepository.save(user);

        return ResponseEntity.ok(savedUser);
    }

    @Override
    public ResponseEntity<User> partialUpdateUser(long userId, Map<Object, Object> fields)
        throws UserNotFoundException {
        User user = userRepository.findById(userId)
            .orElseThrow(() -> new UserNotFoundException(
                        String.format("User identified with ID::%d not found",
                            userId)));

        fields.forEach((key, value) -> {
            Field field = ReflectionUtils.findField(User.class, (String) key);
            field.setAccessible(true);
            ReflectionUtils.setField(field, user, value);
        });

        User updateUser = userRepository.save(user);

        return ResponseEntity.ok(updateUser);
    }

    @Override
    public ResponseEntity<?> deleteUser(long id) throws UserNotFoundException {
        User user = userRepository.findById(id)
            .orElseThrow(() -> new UserNotFoundException(
                        String.format("User identified with ID::%d not found", id)));
        userRepository.delete(user);

        return ResponseEntity.noContent().build();
    }

    @Override
    public ResponseEntity<User> loginUser(String userName, String userPassword)
        throws UserNotFoundException {
        User user = userRepository.findByUserNameAndPassword(userName, userPassword)
            .orElseThrow(() -> new UserNotFoundException(
                String.format("User Not found")));

        return ResponseEntity.ok(user);
    }

    @Override
    public ResponseEntity<User> updatePassword(String userName, String userPassword)
            throws UserNotFoundException {
            User user = userRepository.findByUserName(userName)
                .orElseThrow(() -> new UserNotFoundException(String.format(
                            "User indentified with user name %s does not exists",
                            userName)));
            user.setPassword(userPassword);

            User savedUser = userRepository.save(user);

            return ResponseEntity.ok(savedUser);
    }
}
