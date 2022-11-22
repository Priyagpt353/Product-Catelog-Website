package com.nagarro.exitAssignment.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.nagarro.exitAssignment.service.SearchProductService;
import com.nagarro.exitAssignment.model.Product;

@RestController
@CrossOrigin(origins = "*", allowedHeaders = "*")
@RequestMapping("/api/v1/") 
public class SearchProductorController {
	
	@Autowired
	private SearchProductService service;
	
	@GetMapping("/product/{productSearch}")
	 public List<Product> getProductListBySearch(@PathVariable("productSearch")String productSearch) throws Exception {
		productSearch=productSearch.replaceAll(" ","");
		List<Product> productList;
		try {
		productList=service.getProductListBySearch(productSearch);
		}
		catch(Exception e)
		{
			throw new Exception(e.getMessage());
		}
		return productList;
	 }
	

}
