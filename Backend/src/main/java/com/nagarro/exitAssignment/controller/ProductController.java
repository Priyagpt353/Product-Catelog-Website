package com.nagarro.exitAssignment.controller;

import java.io.IOException;
import java.util.HashSet;
import java.util.List;
import java.util.Optional;
import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestPart;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.nagarro.exitAssignment.model.ImageModel;
import com.nagarro.exitAssignment.model.Product;
import com.nagarro.exitAssignment.service.ProductService;

@RestController
@CrossOrigin(origins = "*", allowedHeaders = "*")
@RequestMapping("/api/v1/") 
public class ProductController {
	
	@Autowired
	private ProductService productService;
	
	/*@PostMapping(value = {"/product"}, consumes = {MediaType.MULTIPART_FORM_DATA_VALUE})
	public Product addNewProduct(@RequestPart("product") Product product, @RequestPart("imageFile") MultipartFile[] file) {
		try {
			Set<ImageModel> images = uploadImage(file);
			product.setProductImages(images);
			return productService.addNewProduct(product);
			
		}catch(Exception e) {
			System.out.println(e.getMessage());
			return null;
			
		}
		
	}
	
	public Set<ImageModel> uploadImage(MultipartFile[] multipartFiles) throws IOException{
		Set<ImageModel> imageModels = new HashSet<ImageModel>();
		
		for(MultipartFile file:multipartFiles) {
			ImageModel imageModel = new ImageModel(
					file.getOriginalFilename(),
					file.getContentType(),
					file.getBytes()
					);
			imageModels.add(imageModel);
		}
		return imageModels;
		
	}*/
	
	@GetMapping("/product")
	public List<Product> getProduct(){
		return productService.getProduct();
	}
	
	@PostMapping("/product")
	public Product addNewProduct(@RequestBody Product product){
		return productService.addNewProduct(product);
	}
	
	@GetMapping("/product-view/{id}")
	public Optional<Product> getProductbyId(@PathVariable Integer id) {
		return productService.findbyId(id);
	}
	
	

}
