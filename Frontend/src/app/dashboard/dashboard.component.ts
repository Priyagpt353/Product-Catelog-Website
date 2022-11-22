import { Component, OnInit } from '@angular/core';
import { DashboardService } from '../dashboard.service'
import { Router } from '@angular/router'
import { FormGroup,FormControl } from '@angular/forms'
import { SearchComponent } from '../search/search.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  brand:any
  price:any

  filterList = {
    brand : ['Dressberry','her by invictus','Vishudh','Harvard','Puma', 'Roadster', 'All about You', 'Generic','SAAKAA','Dressberry'],
    price: ['500','1000', '1200', '1300','9000']
    //here you can add as many filters as you want.
    };
  condition:boolean=false
  condition1:boolean=false
  searchResult = new  FormGroup(
    {
      searched: new FormControl('')
      
    }
  )
  list:any=[]
  constructor(private router:Router,private service:DashboardService) { }

  ngOnInit(): void {
  }
  searchProduct(){
    
    this.service.getProductFromRemote(this.searchResult.value['searched']).subscribe((result)=>
    {
      this.list=result;
      if(this.list.length==0){
        this.condition1=true
        this.searchResult.reset()
       }
       else{
        //this.list=result;
        this.condition=true
         this.searchResult.reset()
       }
    })
    
  }
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
