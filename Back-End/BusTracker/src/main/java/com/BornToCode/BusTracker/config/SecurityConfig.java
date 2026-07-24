package com.BornToCode.BusTracker.config;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.authentication.AuthenticationProvider;
import org.springframework.security.authentication.dao.DaoAuthenticationProvider;
import org.springframework.security.config.Customizer;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;

///  This is one time setup so do this. 20 July 2026

@Configuration     // spring get know that this is class where it has to config the security
@EnableWebSecurity  //  it enables the spring security
public class SecurityConfig {

    @Autowired
    private UserDetailsService userDetailsService;

    @Bean  // spring handles the object creation and all
    public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception{ // SecurityFilterChain it contains rules of security int obj format

        ///  this is using builder and lambda
        return http
                .cors(Customizer.withDefaults())
                .csrf(customizer -> customizer.disable())
                .authorizeHttpRequests(request -> request
                        .requestMatchers("/user/register").permitAll()
                        .requestMatchers("/login").permitAll()
                        .anyRequest().permitAll())
                .formLogin(Customizer.withDefaults())
                .httpBasic(Customizer.withDefaults())
                .sessionManagement(session -> session.sessionCreationPolicy(SessionCreationPolicy.STATELESS))
                .build();

//        http.formLogin(Customizer.withDefaults());

        //              // gives default form for login

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


    @Bean
    public AuthenticationProvider authenticationProvider(){
        DaoAuthenticationProvider provider = new DaoAuthenticationProvider(userDetailsService);
        provider.setPasswordEncoder(new BCryptPasswordEncoder(12));  // passwordEncoder()
        return provider;
    }


    @Bean
    public PasswordEncoder passwordEncoder() {
        return new BCryptPasswordEncoder();
    }



        ///  this below method is deprecated and these are hardcoded values
/*
    @Bean
    public UserDetailsService userDetailsService(){

        UserDetails user1 = User
                .withDefaultPasswordEncoder()
                .username("rahul")
                .password("r@123")
                .roles("admin")
                .build();

        UserDetails user2 = User
                .withDefaultPasswordEncoder()
                .username("kunal")
                .password("k@123")
                .roles("Engineer")
                .build();

        return new InMemoryUserDetailsManager(user1,user2);
    }

 */

}
