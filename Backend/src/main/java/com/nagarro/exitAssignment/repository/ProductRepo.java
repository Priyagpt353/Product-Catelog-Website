package com.nagarro.exitAssignment.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.nagarro.exitAssignment.model.*;

@Repository
public interface ProductRepo extends JpaRepository<Product,Integer> {

}
