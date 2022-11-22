import { Component, OnInit } from '@angular/core';
import { DashboardService } from '../dashboard.service'
import { Router } from '@angular/router'
import { FormGroup,FormControl } from '@angular/forms'

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  brand:any

  filterList = {
    brand : ['Dressberry','her by invictus','Vishudh','Harvard','Puma', 'Roadster', 'All about You', 'Generic','SAAKAA','Dressberry']
    }; 

  list:any=[]

  searchResult = new  FormGroup(
    {
      searched: new FormControl('')
      
    }
  )
  //list: any[] = [];
  constructor(private router:Router,private service:DashboardService) { 
    
  }

  condition:boolean=false
  condition1:boolean=false
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
    this.service.getProductList().subscribe((data)=>{
      this.list=data;
      if(this.brand){
        this.list = this.list.filter((list: { p_brand: any; }) => list.p_brand===this.brand)
      }

    })

}
}
