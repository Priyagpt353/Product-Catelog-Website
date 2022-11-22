package com.nagarro.exitAssignment.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.nagarro.exitAssignment.model.User;;

@Repository
public interface RegistrationRepository extends JpaRepository<User,Integer> {
	
	public User findByEmailId(String emailId);
    public User findByEmailIdAndPassword(String emailId,String password);

}
