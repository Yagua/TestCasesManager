// package com.tcsManager.tcsmanager.config;
//
// import com.tcsManager.tcsmanager.service.UserService;
//
// import org.springframework.context.annotation.Bean;
// import org.springframework.context.annotation.Configuration;
// import org.springframework.security.authentication.dao.DaoAuthenticationProvider;
// import org.springframework.security.config.annotation.web.builders.HttpSecurity;
// import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
// import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
// import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
// import org.springframework.security.web.util.matcher.AntPathRequestMatcher;
//
// /**
//  * SecurityConfig
//  */
// @Configuration
// @EnableWebSecurity
// public class SecurityConfig extends WebSecurityConfigurerAdapter {
//
//     private UserService userService;
//     public SecurityConfig(UserService userService) {
//         this.userService = userService;
//     }
//
//     @Override
//     protected void configure(HttpSecurity http) throws Exception {
//         http.authorizeRequests().antMatchers( "/users/**")
//             .permitAll()
//             .anyRequest().authenticated()
//             .and()
//             .formLogin()
//             .loginPage("http://localhost:3000/login")
//             .permitAll()
//             .and()
//             .logout()
//             .invalidateHttpSession(true)
//             .clearAuthentication(true)
//             .logoutRequestMatcher(new AntPathRequestMatcher("/logout"))
//             .logoutSuccessUrl("/login?logout")
//             .permitAll();
//     }
//
//     @Bean
//     public BCryptPasswordEncoder passwordEncoder() {
//         BCryptPasswordEncoder passwordEncoder = new BCryptPasswordEncoder();
//         return passwordEncoder;
//     }
//
//     @Bean
//     public DaoAuthenticationProvider authenticationProvider() {
//         DaoAuthenticationProvider auth = new DaoAuthenticationProvider();
//         auth.setUserDetailsService(userService);
//         auth.setPasswordEncoder(passwordEncoder());
//         return auth;
//     }
// }
