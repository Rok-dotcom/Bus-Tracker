package com.BornToCode.BusTracker.service;

import com.BornToCode.BusTracker.model.Bus;
import com.BornToCode.BusTracker.repository.BusRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;

import java.time.format.DateTimeFormatter;

@Service
public class BusService {

    @Autowired
    private BusRepository busRepo;

    DateTimeFormatter formatter =
            DateTimeFormatter.ofPattern("hh:mm a , dd MMM yyyy");


    // shows all Buses
    public List<Bus> getBusInfo() {
        return busRepo.findAll();
    }

    // Adds bus
    public Bus addBus(Bus bus) {
        String formattedTime = LocalDateTime.now().format(formatter);
        bus.setPostTime(formattedTime);
        return busRepo.save(bus);
    }

    // updates bus
    public Bus updateBusInfoById(Bus bus,int id) {
        Bus existingBus = busRepo.findById(id)
                .orElseThrow(() -> new RuntimeException("Bus not exist"));
        if(!bus.getRoute().isEmpty()){
            existingBus.setRoute(bus.getRoute());
        }
        if(!bus.getBusNo().isEmpty()){
            existingBus.setBusNo(bus.getBusNo());
        }
        if(!bus.getCurrentlocation().isEmpty()){
            existingBus.setCurrentlocation(bus.getCurrentlocation());
        }
        if(!bus.getMsg().isEmpty()){
            existingBus.setMsg(bus.getMsg());
        }
        String formattedTime = LocalDateTime.now().format(formatter);

        existingBus.setPostTime(formattedTime);

        return busRepo.save(existingBus);
    }

    // deletes bus
    public void deleteBus(int id) {
        busRepo.deleteById(id);
    }

    // return bus by its id
    public Bus getBusById(int id) {
        return busRepo.findById(id)
                .orElseThrow(() -> new RuntimeException("User not found"));
    }

    public List<Bus> searchRoute(String keyword) {
        return busRepo.findByRoute(keyword);
    }
}
