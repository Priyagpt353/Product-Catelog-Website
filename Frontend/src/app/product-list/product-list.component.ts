import { Component, OnInit } from '@angular/core';
import { Product } from '../model/product.model'
import { DashboardService } from '../dashboard.service'

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  brand:any
  price:any

  filterList = {
    brand : ['Dressberry','her by invictus','Vishudh','Harvard','Puma', 'Roadster', 'All about You', 'Generic','SAAKAA','Dressberry'],
    price: ['500','1000', '1200', '1300','9000']
    //here you can add as many filters as you want.
    }; 

  list:any=[]
  constructor(private service:DashboardService) { 
    this.service.getProductList().subscribe(data=>this.list=data)
  }

  ngOnInit(): void {
    this.service.getProductList();
    this.service.getProductList().subscribe((data)=>{
      this.list=data;
      console.warn("list",this.list)
    })
    console.warn("here list",this.list)
  }

  copyData = this.list

  filterChange(appliedfilters:any){
    console.warn(appliedfilters)
    this.brand=appliedfilters.appliedFilterValues.brand;
    this.price=appliedfilters.appliedFilterValues.price;
    this.service.getProductList().subscribe((data)=>{
      this.list=data;
      if(this.brand){
        this.list = this.list.filter((list: { p_brand: any; }) => list.p_brand===this.brand)
      }

      if(this.price){
        this.list = this.list.filter((list: { p_price: any; }) => list.p_price===this.price)
      }
    

    })


  }

}

