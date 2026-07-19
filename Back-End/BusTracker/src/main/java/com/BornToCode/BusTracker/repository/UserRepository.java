package com.BornToCode.BusTracker.repository;

import com.BornToCode.BusTracker.model.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User,Integer> {

}
