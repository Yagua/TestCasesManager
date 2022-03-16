package com.tcsManager.tcsmanager.controller;

import java.util.List;
import java.util.Map;

import com.tcsManager.tcsmanager.entity.User;
import com.tcsManager.tcsmanager.exception.UserNotFoundException;
import com.tcsManager.tcsmanager.service.UserService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
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
@RequestMapping("/api/v1/users")
@CrossOrigin(origins = {"http://localhost:3000"})
public class UserController {

    @Autowired
    private UserService userService;

    @GetMapping
    public List<User> getAllUsers() {
        return userService.getAllUsers();
    }

    @GetMapping("/{userId}")
    public User getUser(@PathVariable long userId) throws UserNotFoundException {
        return userService.getUser(userId);
    }

    @PostMapping("/")
    public User createUser(@RequestBody User newUser) {
        return userService.createUser(newUser);
    }

    @PutMapping("/{userId}")
    public User updateUser(@PathVariable long userId, @RequestBody User userUpdated)
        throws UserNotFoundException {
        return userService.updateUser(userId, userUpdated);
    }

    @PatchMapping("/{userId}")
    public User partialUpdateUser(@PathVariable long userId,
            @RequestBody Map<Object, Object> fields) throws UserNotFoundException {
        return userService.partialUpdateUser(userId, fields);
    }

    @DeleteMapping("/{userId}")
    public ResponseEntity<String> deleteUser(@PathVariable long userId)
        throws UserNotFoundException {
        return userService.deleteUser(userId);
    }
}
