package com.proyectoIntegrador.proyecto_iv.controller;

import java.util.List;

import com.proyectoIntegrador.proyecto_iv.entity.User;
import com.proyectoIntegrador.proyecto_iv.exception.UserNotFoundException;
import com.proyectoIntegrador.proyecto_iv.service.UserService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 * UserController
 */
@RestController
@RequestMapping("/api/v1/user")
public class UserController {

    @Autowired
    private UserService userService;

    @GetMapping("/")
    public List<User> getAllUsers() {
        return userService.getAllUsers();
    }

    @GetMapping("/{userId}")
    public User getUserById(@PathVariable long id) throws UserNotFoundException {
        return userService.getUser(id);
    }

    @PostMapping("/add")
    public User addNewUser(@RequestBody User newUser) {
        return userService.createUser(newUser);
    }

    @PutMapping("/{userId}")
    public User updateUser(@PathVariable long userId, @RequestBody User userUpdated)
        throws UserNotFoundException {
        return userService.updateUser(userId, userUpdated);
    }

    @DeleteMapping("/{userId}")
    public String deleteUser(@PathVariable long userId) throws UserNotFoundException {
        return userService.deleteUser(userId);
    }
}
