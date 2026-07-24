package com.BornToCode.BusTracker.controller;

import com.BornToCode.BusTracker.model.Bus;
import com.BornToCode.BusTracker.service.BusService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/bus")
@CrossOrigin(origins = "http://localhost:5173")
public class BusInfoController {

    @Autowired
    private BusService busService;

    // will get the bus Info all
    @GetMapping("/busInfo")
    public List<Bus> getBusInfo(){
        return busService.getBusInfo(); // here I have to send by route but now using id
    }

    // get bus id
    @GetMapping("/getById/{id}")
    public Bus getBusById(@PathVariable int id){
        return busService.getBusById(id);
    }

    // return by route
    @GetMapping("/getByRoute/{keyword}")
    public List<Bus> searchRoute(@PathVariable String keyword){
        return busService.searchRoute(keyword);
    }

    // it will add the bus
    @PostMapping("/addBus")
    public Bus addBus(@RequestBody Bus bus){
       return busService.addBus(bus);
    }

    // it updates the bus details
    @PutMapping("/updateBusInfo/{id}")
    public void updateBusInfo(@RequestBody Bus bus,@PathVariable int id){
        busService.updateBusInfoById(bus,id);
    }

    // Delete the bus
    @DeleteMapping("/deleteBus/{id}")
    public void deleteBus(@PathVariable int id){
        busService.deleteBus(id);
    }

}
