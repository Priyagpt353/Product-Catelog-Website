import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Product } from './model/product.model'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  url:any
  link = "http://localhost:8080/api/v1";
  constructor(private http:HttpClient) { }

  getCurrentProduct(id:any){
   // let baseUrl = "http://localhost:8080/api/v1/product-view/"
      return this.http.get(this.link+'/product-view/'+id)
  }

  getServiceability(pincode: string) {
    return this.http.post(this.link+ '/is-serviceable', pincode);
  }
}
