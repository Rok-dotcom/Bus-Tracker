package com.BornToCode.BusTracker.repository;

import com.BornToCode.BusTracker.model.Bus;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface BusRepository extends JpaRepository<Bus,Integer> {

    @Query("""
    SELECT DISTINCT p.route
    FROM Bus p
    WHERE LOWER(p.route) LIKE LOWER(CONCAT('%', :keyword, '%'))
    """)
    List<String> searchBus(@Param("keyword") String keyword);

    List<Bus> findByRoute(String keyword);
}
