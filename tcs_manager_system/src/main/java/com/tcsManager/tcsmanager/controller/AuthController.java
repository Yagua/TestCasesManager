package com.tcsManager.tcsmanager.controller;

import com.tcsManager.tcsmanager.entity.User;
import com.tcsManager.tcsmanager.exception.UserNotFoundException;
import com.tcsManager.tcsmanager.playload.LoginDTO;
import com.tcsManager.tcsmanager.service.UserService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RequestMapping("/api/v1/auth")
@RestController
@CrossOrigin(origins = {"http://localhost:3000"})
public class AuthController {
    @Autowired
    private UserService userService;

    @PostMapping("/login")
    public User loginUser(@RequestBody LoginDTO loginDTO)
        throws UserNotFoundException {
        return userService.loginUser(loginDTO.getUserName(),
                loginDTO.getUserPassword());
    }
}