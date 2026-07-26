package com.BornToCode.BusTracker.controller;

import com.BornToCode.BusTracker.model.UserFeedback;
import com.BornToCode.BusTracker.service.UserFeedbackService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/userHelp")
@CrossOrigin(origins = "http://localhost:5173")
public class UserFeedbackController {

    @Autowired
    private UserFeedbackService feedbackService;

    @PostMapping("/suggestion")
    public void suggestion(@RequestBody UserFeedback sug){
        feedbackService.addSuggestion(sug);
    }

    @PostMapping("/feedback")
    public void feedback(@RequestBody UserFeedback feed){
        feedbackService.addFeedback(feed);
    }
}
