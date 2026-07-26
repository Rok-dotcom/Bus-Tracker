package com.BornToCode.BusTracker.service;

import com.BornToCode.BusTracker.model.UserFeedback;
import com.BornToCode.BusTracker.repository.UserFeedbackRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserFeedbackService {

    @Autowired
    private UserFeedbackRepo userFeedbackRepo;


    public void addSuggestion(UserFeedback sugg) {
        UserFeedback suggestion = new UserFeedback();
        suggestion.setSuggestion(sugg.getSuggestion());
        userFeedbackRepo.save(suggestion);
    }

    public void addFeedback(UserFeedback feed) {
        UserFeedback feedback = new UserFeedback();
        feedback.setFeedback(feed.getFeedback());
        userFeedbackRepo.save(feedback);
    }
}
