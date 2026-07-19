package com.BornToCode.BusTracker.controller;

import com.BornToCode.BusTracker.model.Bus;
import com.BornToCode.BusTracker.service.BusService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController("/")
public class BusInfoController {

    @Autowired
    private BusService busService;

    @GetMapping("/busInfo")
    public List<Bus> getBusInfo(){
        return busService.getBusInfo(); // here I have to send by route but now using id
    }
}
