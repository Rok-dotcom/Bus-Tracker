package com.BornToCode.BusTracker.controller;

import com.BornToCode.BusTracker.model.Users;
import com.BornToCode.BusTracker.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/user")
public class UserController {

    @Autowired
    private UserService userService;

    // user get register
    @PostMapping("/register")
    public Users register(@RequestBody Users user){
        System.out.println("I'm in controller register");
        return userService.register(user);
    }

    // get the all users
    @GetMapping("/getAllUser")
    public List<Users> getUsers(){
        return userService.getUsers();
    }

    // show users by id
    @GetMapping("/getUser/{id}")
    public Users getUser(@PathVariable int id){
        Users user1 = userService.getUser(id);
        System.out.println(user1.getPassWord());
        return user1;
    }

    // delete the user by id
    @DeleteMapping("/removeUser/{id}")
    public void remove(@PathVariable int id){
        userService.removeUserById(id);
    }

    // update the user
    @PutMapping("/updateUser/{id}")
    public Users update(@PathVariable int id, @RequestBody Users user ){
        return userService.updateUser(id,user);
    }

}
