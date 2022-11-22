package com.nagarro.exitAssignment.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.nagarro.exitAssignment.model.PinCode;
//import com.nagarro.exitAssignment.model.Product;
import com.nagarro.exitAssignment.service.ServiceabilityService;

@RestController
@CrossOrigin(origins = "*", allowedHeaders = "*")
@RequestMapping("/api/v1/") 
public class ServiceabilityController {
	
	@Autowired
	private ServiceabilityService service;
	
	
	@GetMapping("/pincodes")
	public List<PinCode> gebypincode() {
		return service.getPincodes();
		
	}
	
	@PostMapping("/pincodes")
	public PinCode addNewProduct(@RequestBody PinCode pin){
		return service.addPincoode(pin);
	}
	
	@PostMapping("/is-serviceable")
	public ResponseEntity<PinCode> isServiceable(@RequestBody String pincode){
		if(pincode == null || pincode =="") {
			return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
		}
		PinCode address = service.getDeliveryTime(pincode);
		if(address==null) {
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
		 return new ResponseEntity<>(address, HttpStatus.OK);
		
	}
		
	

}
