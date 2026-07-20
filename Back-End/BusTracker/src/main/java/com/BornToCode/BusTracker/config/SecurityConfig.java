package com.BornToCode.BusTracker.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.Customizer;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.web.SecurityFilterChain;

///  This is one time setup so do this 20 July 2026

@Configuration     // spring get know that this is class where it has to config the security
@EnableWebSecurity  //  it enables the spring security
public class SecurityConfig {

    @Bean  // spring handles the object creation and all
    public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception{ // SecurityFilterChain it contains rules of security int obj format

        ///  this is using builder and lambda
        return http
                .csrf(customizer -> customizer.disable())
                .authorizeHttpRequests(request -> request.anyRequest().authenticated())
                .httpBasic(Customizer.withDefaults())
                .sessionManagement(session -> session.sessionCreationPolicy(SessionCreationPolicy.STATELESS))
                .build();

        //        http.formLogin(Customizer.withDefaults());      // gives default form for login


        /// This below code can be reduced by using builder
/*
        http.csrf(customizer -> customizer.disable()); // it disables the csrf token
        http.authorizeHttpRequests(request -> request.anyRequest().authenticated());  // it authorizes every request
        http.formLogin(Customizer.withDefaults());      // gives default form for login
        http.httpBasic(Customizer.withDefaults());      // enables basic login authentication from spring
        http.sessionManagement(session -> session.sessionCreationPolicy(SessionCreationPolicy.STATELESS));  // it don't store the session id on browser every time new authentication
        return http.build(); // hey spring now build security according to my configuration
 */

    }
}
