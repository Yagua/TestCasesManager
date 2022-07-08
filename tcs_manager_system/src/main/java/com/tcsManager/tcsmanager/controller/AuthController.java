package com.tcsManager.tcsmanager.controller;

import com.tcsManager.tcsmanager.entity.User;
import com.tcsManager.tcsmanager.exception.UserNotFoundException;
import com.tcsManager.tcsmanager.payload.UserDTO;
import com.tcsManager.tcsmanager.service.UserService;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 * AuthController
 */

@RequestMapping("/api/v1/auth")
@RestController
@CrossOrigin(origins = {"http://localhost:3000"})
public class AuthController {

    private UserService userService;

    public AuthController(UserService userService) {
        this.userService = userService;
    }

    @PostMapping("/login")
    public User loginUser(@RequestBody UserDTO loginDTO)
        throws UserNotFoundException {
        return userService.loginUser(loginDTO.getUserName(),
                loginDTO.getUserPassword());
    }

    @PatchMapping("/update-password")
    public User changePassword(@RequestBody UserDTO user)
        throws UserNotFoundException {
        return userService.updatePassword(
                user.getUserName(), user.getUserPassword());
    }
}
