package com.proyectoIntegrador.proyecto_iv.service.impl;

import java.lang.reflect.Field;
import java.util.List;
import java.util.Map;

import com.proyectoIntegrador.proyecto_iv.entity.TestCase;
import com.proyectoIntegrador.proyecto_iv.entity.User;
import com.proyectoIntegrador.proyecto_iv.exception.UserNotFoundException;
import com.proyectoIntegrador.proyecto_iv.repository.UserRepository;
import com.proyectoIntegrador.proyecto_iv.service.UserService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.util.ReflectionUtils;

/**
 * UserServiceImpl
 */

@Service
public class UserServiceImpl implements UserService {

    @Autowired
    private UserRepository userRepository;

    @Override
    public User getUser(long id) throws UserNotFoundException {
        return userRepository.findById(id)
            .orElseThrow(() -> new UserNotFoundException(
                        String.format("User identified with ID::%d not found", id)));
    }

    @Override
    public User createUser(User user) {
        List<TestCase> testsCases = user.getTestCases();
        testsCases.forEach((testCase) -> {
            testCase.setUser(user);
        });
        return userRepository.save(user);
    }

    @Override
    public List<User> getAllUsers() {
        return userRepository.findAll();
    }

    @Override
    public User updateUser(long userId, User userUpdated)
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

        return userRepository.save(user);
    }

    @Override
    public User partialUpdateUser(long userId, Map<Object, Object> fields)
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

        return userRepository.save(user);
    }

    @Override
    public ResponseEntity<String> deleteUser(long id) throws UserNotFoundException {
        User user = userRepository.findById(id)
            .orElseThrow(() -> new UserNotFoundException(
                        String.format("User identified with ID::%d not found", id)));
        userRepository.delete(user);

        return new ResponseEntity<String>(
                String.format("User identified with ID::%d deleted successfully",
                    id), HttpStatus.OK);
    }
}
