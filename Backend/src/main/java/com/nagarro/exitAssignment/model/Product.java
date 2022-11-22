package com.nagarro.exitAssignment.model;

import java.util.Set;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;

import org.hibernate.annotations.Type;

import javax.persistence.*;

@Entity
@Table(name = "product")
public class Product {
	
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	int id;
	
	@Column(name = "p_code")
	String p_code;
	
	@Column(name = "p_name")
	String p_name;
	
	@Column(name = "p_brand")
	String p_brand;
	
	@Column(name = "p_pincode")
	long p_pincode;
	
	@Column(name = "p_price")
	String p_price;
	
	@Column(name = "p_size")
	String p_size;
	
	@Column(name = "p_desc")
	String p_desc;
	
	@Basic(fetch = FetchType.LAZY)
	@Column(name = "Image", columnDefinition = "mediumblob",length=500000)
	private byte[] photo;
	
	@ManyToMany(fetch = FetchType.EAGER, cascade = CascadeType.ALL)
	@JoinTable(name = "product_images",
			joinColumns = {
					@JoinColumn(name="product_id")
			},
			inverseJoinColumns= {
					@JoinColumn(name="image_id")
			}
			)
	private Set<ImageModel> productImages;
	
	public Product() {
		
	}
	
	

	public Product(String p_code, String p_name, String p_brand, long p_pincode, String p_price, String p_size,
			String p_desc, byte[] photo, Set<ImageModel> productImages) {
		super();
		this.p_code = p_code;
		this.p_name = p_name;
		this.p_brand = p_brand;
		this.p_pincode = p_pincode;
		this.p_price = p_price;
		this.p_size = p_size;
		this.p_desc = p_desc;
		this.photo = photo;
		this.productImages = productImages;
	}



	public byte[] getPhoto() {
		return photo;
	}

	public void setPhoto(byte[] photo) {
		this.photo = photo;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getP_code() {
		return p_code;
	}

	public void setP_code(String p_code) {
		this.p_code = p_code;
	}

	public String getP_name() {
		return p_name;
	}

	public void setP_name(String p_name) {
		this.p_name = p_name;
	}

	public String getP_brand() {
		return p_brand;
	}

	public void setP_brand(String p_brand) {
		this.p_brand = p_brand;
	}

	public long getP_pincode() {
		return p_pincode;
	}

	public void setP_pincode(long p_pincode) {
		this.p_pincode = p_pincode;
	}

	public String getP_price() {
		return p_price;
	}

	public void setP_price(String p_price) {
		this.p_price = p_price;
	}

	public String getP_size() {
		return p_size;
	}

	public void setP_size(String p_size) {
		this.p_size = p_size;
	}

	public String getP_desc() {
		return p_desc;
	}

	public void setP_desc(String p_desc) {
		this.p_desc = p_desc;
	}
	
	public Set<ImageModel> getProductImages() {
		return productImages;
	}

	public void setProductImages(Set<ImageModel> productImages) {
		this.productImages = productImages;
	}

	
}
