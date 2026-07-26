package com.BornToCode.BusTracker.repository;

import com.BornToCode.BusTracker.model.UserFeedback;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserFeedbackRepo extends JpaRepository<UserFeedback,Integer> {
}
