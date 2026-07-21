package com.BornToCode.BusTracker.controller;

import com.BornToCode.BusTracker.model.Bus;
import com.BornToCode.BusTracker.service.BusService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/bus")
public class BusInfoController {

    @Autowired
    private BusService busService;

    // will get the bus Info
    @GetMapping("/busInfo")
    public List<Bus> getBusInfo(){
        return busService.getBusInfo(); // here I have to send by route but now using id
    }

    // it will add the bus
    @PostMapping("/addBus")
    public void addBus(@RequestBody Bus bus){
        busService.addBus(bus);
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
