package com.proyectoIntegrador.proyecto_iv.service;

import java.util.List;

import com.proyectoIntegrador.proyecto_iv.entity.TestCase;
import com.proyectoIntegrador.proyecto_iv.entity.TestElement;
import com.proyectoIntegrador.proyecto_iv.entity.Tester;
import com.proyectoIntegrador.proyecto_iv.entity.User;
import com.proyectoIntegrador.proyecto_iv.exception.UserNotFoundException;
import com.proyectoIntegrador.proyecto_iv.repository.UserRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
 * UserServiceImpl
 */
@Service
public class UserService {

    @Autowired
    private UserRepository userRepository;

    public User getUser(long id) throws UserNotFoundException {
        return userRepository.findById(id)
            .orElseThrow(() -> new UserNotFoundException(
                        String.format("User identify with ID::%d not found", id)));
    }

    public User createUser(User user) {
        List<TestCase> testsCases = user.getTestCases();

        for(TestCase testCase: testsCases) {
            testCase.setUser(user);
        }
        return userRepository.save(user);
    }

    public List<User> getAllUsers() {
        return userRepository.findAll();
    }

    public User updateUser(long userId, User userUpdated)
            throws UserNotFoundException {
        User user = userRepository.findById(userId)
            .orElseThrow(() -> new UserNotFoundException(
                        String.format("User identify with ID::%d not found",
                            userId)));

        userUpdated.setFirstName(user.getFirstName());
        userUpdated.setSecondName(user.getSecondName());
        userUpdated.setPaternalLastName(user.getPaternalLastName());
        userUpdated.setMaternalLastName(user.getMaternalLastName());
        userUpdated.setUserName(user.getUserName());
        userUpdated.setPassword(user.getPassword());
        userUpdated.setTimeStamp(user.getTimeStamp());
        userUpdated.setTestCases(user.getTestCases());

        return userRepository.save(user);
    }

    public String deleteUser(long id) throws UserNotFoundException {
        User user = userRepository.findById(id)
            .orElseThrow(() -> new UserNotFoundException(
                        String.format("User identify with ID::%d not found", id)));
        userRepository.delete(user);
        return String.format("User identify with ID::%d deleted");
    }
}
