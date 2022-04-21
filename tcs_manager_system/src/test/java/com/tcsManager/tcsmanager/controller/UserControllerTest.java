package com.tcsManager.tcsmanager.controller;

import static org.hamcrest.CoreMatchers.is;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.BDDMockito.given;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.result.MockMvcResultHandlers.print;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.jsonPath;

import java.util.ArrayList;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.tcsManager.tcsmanager.entity.User;
import com.tcsManager.tcsmanager.service.UserService;

import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.http.MediaType;
import org.springframework.test.context.junit.jupiter.SpringExtension;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.ResultActions;

@ExtendWith(SpringExtension.class)
@SpringBootTest
@AutoConfigureMockMvc
public class UserControllerTest {

    @Autowired
    private MockMvc mockMvc;

    @MockBean
    private UserService userService;

    @Autowired
    private ObjectMapper objectMapper;

    @Test
    public void givenUserObject_whenCreateUser_thenReturnsCreatedUser()
        throws Exception {
        //given
        User userTest = User.builder()
            .firstName("Dilan")
            .secondName("Andres")
            .paternalLastName("Baron")
            .maternalLastName("Murcia")
            .userName("yagua")
            .password("foobar")
            .testCases(new ArrayList<>()).build();
        given(userService.createUser(any(User.class)))
            .willAnswer((invocation) -> invocation.getArgument(0));

        //when
        ResultActions response = mockMvc.perform(post("/api/v1/users/")
                .contentType(MediaType.APPLICATION_JSON)
                .content(objectMapper.writeValueAsString(userTest))
                );

        //then
        response.andDo(print())
            .andExpect(jsonPath("$.firstName", is(userTest.getFirstName())))
            .andExpect(jsonPath("$.secondName", is(userTest.getSecondName())))
            .andExpect(jsonPath("$.paternalLastName", is(userTest.getPaternalLastName())))
            .andExpect(jsonPath("$.maternalLastName", is(userTest.getMaternalLastName())))
            .andExpect(jsonPath("$.password", is(userTest.getPassword())))
            .andExpect(jsonPath("$.userName", is(userTest.getUserName())))
            .andExpect(jsonPath("$.testCases", is(userTest.getTestCases())));
    }
}
