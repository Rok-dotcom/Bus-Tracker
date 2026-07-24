package com.BornToCode.BusTracker.repository;

import com.BornToCode.BusTracker.model.Bus;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface BusRepository extends JpaRepository<Bus,Integer> {

//    @Query("SELECT p FROM Bus WHERE"+
//    "LOWER(p.route) LIKE LOWER(CONCAT('%' :keyword, '%'))")
//    List<Bus> searchBus(String keyword);

    List<Bus> findByRoute(String keyword);
}
