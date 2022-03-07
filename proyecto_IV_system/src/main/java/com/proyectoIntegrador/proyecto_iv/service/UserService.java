package com.proyectoIntegrador.proyecto_iv.service;

import java.util.List;

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

        user.setFirstName(userUpdated.getFirstName());
        user.setSecondtName(userUpdated.getSecondtName());
        user.setPaternalLastName(userUpdated.getPaternalLastName());
        user.setMaternalLastName(userUpdated.getMaternalLastName());
        user.setUserName(userUpdated.getUserName());
        user.setPassword(userUpdated.getPassword());
        user.setTimeStamp(userUpdated.getTimeStamp());

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
