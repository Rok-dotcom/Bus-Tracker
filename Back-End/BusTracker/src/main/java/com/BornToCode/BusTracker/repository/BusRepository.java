package com.BornToCode.BusTracker.repository;

import com.BornToCode.BusTracker.model.Bus;
import org.springframework.data.jpa.repository.JpaRepository;

public interface BusRepository extends JpaRepository<Bus,Integer> {

}
