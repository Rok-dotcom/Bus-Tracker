package com.BornToCode.BusTracker.service;

import com.BornToCode.BusTracker.model.Bus;
import com.BornToCode.BusTracker.repository.BusRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class BusService {

    @Autowired
    private BusRepository busRepo;

    public List<Bus> getBusInfo() {
        return busRepo.findAll();
    }
}
