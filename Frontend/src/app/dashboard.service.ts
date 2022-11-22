import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Product } from './model/product.model'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  baseUrl = "http://localhost:8080/api/v1/product/"
  constructor(private http:HttpClient) { }

  getProductList(){
   // console.warn("Some data here")
    return this.http.get(this.baseUrl)
  }

  public getProductFromRemote(code: String): Observable<any> {
    return this.http.get<any>(this.baseUrl + code);
  }





  /*getCurrentProduct(id:any){
    let baseUrl = "http://localhost:8080/api/v1/product-view/"
      return this.http.get(this.baseUrl+id)
  }*/
}
