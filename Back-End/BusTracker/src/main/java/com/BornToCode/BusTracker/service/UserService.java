package com.BornToCode.BusTracker.service;

import com.BornToCode.BusTracker.model.Users;
import com.BornToCode.BusTracker.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserService {

    @Autowired
    private UserRepository userRepo;

    private BCryptPasswordEncoder encoder = new BCryptPasswordEncoder(12);

    public Users register(Users user){
        user.setPassWord(encoder.encode(user.getPassWord()));
        return userRepo.save(user);
    }

    public List<Users> getUsers() {
        return userRepo.findAll();
    }

    public Users getUser(int id) {
        return userRepo.findById(id)
                .orElseThrow(()-> new RuntimeException("User not found"));  // since java 8 it's returning the optional
    }                                                                  // we need to handle it. if user is not found in database

    public void removeUserById(int id) {
        userRepo.deleteById(id);
    }

    public Users updateUser(int id, Users user) {

        Users existingUser = userRepo.findById(id)
                .orElseThrow(() -> new RuntimeException("user not found"));


        ///  let's work on password saving

        ///  if password is changed then only encode the pass and store
            // how to check is pass is changed or not
            // I have existingUser so I can get password from it and crossCheck it

        ///  if is not changed then don't update the password

        boolean isPassChange = encoder.matches(user.getPassWord(), existingUser.getPassWord());

        if(user.getPassWord() != null && !user.getPassWord().isBlank()){
            if(!isPassChange){ // pass is changed so update the pass
                existingUser.setPassWord(encoder.encode(user.getPassWord()));
            }
        }

        // existingUser.setId(user.getId());                // will it generate id by own or not: It will not conflict with @GeneratedValue with PUT http method
           existingUser.setUserName(user.getUserName());
        // existingUser.setPassWord(user.getPassWord());        // will it store in hashcode or original password

        return userRepo.save(existingUser);
    }
}
