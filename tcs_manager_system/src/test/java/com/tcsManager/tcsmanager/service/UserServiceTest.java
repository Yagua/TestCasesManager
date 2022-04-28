package com.tcsManager.tcsmanager.service;

import static org.junit.jupiter.api.Assertions.assertThrows;
import static org.mockito.BDDMockito.*;

import java.util.ArrayList;

import com.tcsManager.tcsmanager.entity.User;
import com.tcsManager.tcsmanager.exception.UserNotFoundException;
import com.tcsManager.tcsmanager.repository.UserRepository;
import com.tcsManager.tcsmanager.service.impl.UserServiceImpl;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;

@ExtendWith(MockitoExtension.class)
public class UserServiceTest {

    @Mock
    private UserRepository userRepository;

    @InjectMocks
    private UserServiceImpl userService;

    private User userTest;

    @BeforeEach
    public void initUserServiceTest() {
        userTest = User.builder()
                       .firstName("dilan")
                       .secondName("andres")
                       .paternalLastName("baron")
                       .maternalLastName("murcia")
                       .userName("yagua")
                       .password("holamundo")
                       .testCases(new ArrayList<>())
                       .build();
    }

    // @Test
    // public void givenUserObject_whenSaveUser_thenReturnsSavedUser() throws UserNotFoundException {
    //     //given
    //     given(userService.getUserById(0))
    //         .willThrow(UserNotFoundException.class)
    //         .willReturn(null);
    //
    //     //when
    //     when(userService.createUser(userTest)).thenReturn(userTest);
    //
    //     //then
    // }
}
