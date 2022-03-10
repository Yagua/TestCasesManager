package com.proyectoIntegrador.proyecto_iv.service;

import java.util.List;

import com.proyectoIntegrador.proyecto_iv.entity.User;
import com.proyectoIntegrador.proyecto_iv.exception.UserNotFoundException;

import org.springframework.http.ResponseEntity;

/**
 * UserService
 */
public interface UserService {

    User getUser(long id) throws UserNotFoundException;

    User createUser(User user);

    List<User> getAllUsers();

    User updateUser(long userId, User userUpdated) throws UserNotFoundException;

    ResponseEntity<String> deleteUser(long id) throws UserNotFoundException;
}
