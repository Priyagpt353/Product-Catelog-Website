package com.nagarro.exitAssignment.controller;

//import java.util.HashMap;
import java.util.List;
//import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.nagarro.exitAssignment.model.User;
import com.nagarro.exitAssignment.repository.RegistrationRepository;
//import com.nagarro.exitAssignment.service.RegistrationService;

@RestController
@CrossOrigin(origins = "*", allowedHeaders = "*")
@RequestMapping("/api/v1/") 
public class RegistrationController {
	
	@Autowired
	private RegistrationRepository registrationRepo;
	
	public User fetchUserByEmailId(String emailId) {
		return registrationRepo.findByEmailId(emailId);
	}
	
	public Long countAllRegistrated() {
		return registrationRepo.count();
	}
	
	@PostMapping("/user")
	public ResponseEntity<User> registerUser(@RequestBody User user) throws Exception {
		String tempEmailId = user.getEmailId();
		
		if(tempEmailId!=null && !"".equals(tempEmailId))
		{
			User newUser = this.fetchUserByEmailId(tempEmailId);
			if(newUser!=null)
			 {
				 throw new Exception("User with " +tempEmailId+ " is already exist"); 
			 }
		}
		
		return ResponseEntity.ok(registrationRepo.save(user));	
	}
	
	//login authentication
	@PostMapping("/login")
	public ResponseEntity<User> loginUser(@RequestBody User user){
		User us = registrationRepo.findByEmailId(user.getEmailId());
		if(us == null) {
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
		if(us.getPassword().equals(user.getPassword())) {
			User newUser = new User();
			newUser.setFirstName(us.getFirstName());
			newUser.setLastName(us.getLastName());
			newUser.setEmailId(us.getEmailId());
			return new ResponseEntity<>(newUser, HttpStatus.OK);
		}
		else {
			return new ResponseEntity<>(HttpStatus.UNAUTHORIZED);
		}
		
	}
		
	@GetMapping("/user")
	public List<User> getUser(){		
		return registrationRepo.findAll();				
	}
	
	
}
