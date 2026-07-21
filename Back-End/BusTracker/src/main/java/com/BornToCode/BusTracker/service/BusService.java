package com.BornToCode.BusTracker.service;

import com.BornToCode.BusTracker.model.Bus;
import com.BornToCode.BusTracker.repository.BusRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.time.ZoneId;
import java.util.List;

@Service
public class BusService {

    @Autowired
    private BusRepository busRepo;

    LocalDateTime time = LocalDateTime.now(ZoneId.of("Asia/Kolkata"));


    // shows all Buses
    public List<Bus> getBusInfo() {
        return busRepo.findAll();
    }

    // Adds bus
    public void addBus(Bus bus) {
        bus.setMsg(bus.getMsg()+time);
        busRepo.save(bus);
    }

    // updates bus
    public void updateBusInfoById(Bus bus,int id) {
        Bus existingBus = busRepo.findById(id)
                .orElseThrow(() -> new RuntimeException("Bus not exist"));

        existingBus.setRoute(bus.getRoute());
        existingBus.setBusNo(bus.getRoute());
        existingBus.setCurrentlocation(bus.getCurrentlocation());
        existingBus.setMsg(bus.getMsg()+time);
    }

    // deletes bus
    public void deleteBus(int id) {
        busRepo.deleteById(id);
    }
}
