package com.BornToCode.BusTracker.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController("/")
public class AppController {

    @GetMapping("/greet")
    public String greet(){
        return "Miss you ";
    }
}
