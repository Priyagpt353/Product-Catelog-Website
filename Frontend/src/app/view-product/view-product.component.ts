import { Component, OnInit } from '@angular/core';
import{ ActivatedRoute } from '@angular/router'
//import { DashboardService } from '../dashboard.service'
import { ProductService } from '../product.service'
//import { Product } from '../model/product.model'
//import { ReactiveFormsModule} from '@angular/forms'
import { FormGroup,FormControl } from '@angular/forms'


@Component({
  selector: 'app-view-product',
  templateUrl: './view-product.component.html',
  styleUrls: ['./view-product.component.css']
})
export class ViewProductComponent implements OnInit {


  list: any=[
    {
      p_code:"",
      p_name:"",
      p_brand:"",
      p_pincode:0,
      p_price:"",
      p_size:"",
      p_desc:""
    }
  ]
  deliveryDetails = { pincode: '', days: '' };
  condition:boolean=false
  searchResult = new FormGroup(
    {
      pincode: new FormControl()
      
    }
  )

  constructor(private service:ProductService,private router:ActivatedRoute) { }

  ngOnInit(): void {
    this.service.getCurrentProduct(this.router.snapshot.params['id']).subscribe((result=>this.list=result
    ))

    this.service.getCurrentProduct(this.router.snapshot.params['id']).subscribe((result)=>{
      console.warn("result",result)
    })
  }

  search(){
    console.warn(this.searchResult.value)
    console.warn(this.list.p_pincode)

    if(this.searchResult.value===this.list.p_pincode){
      alert("Sorry!! We are unable to delivery at this pincode")
      this.searchResult.reset()
    }
    else if(this.searchResult.value!=this.list.p_pincode){
      //alert("Sorry!! We are unable to delivery at this pincode")
      alert("This product is availabe at this pincode")
      this.searchResult.reset()
      this.condition=true
    }
  }

  search1(){
    this.service.getServiceability(this.searchResult.value.pincode || '').subscribe((data)=>{
      //this.searchResult.value.pincode=data;
      console.log(data);
      if(!data){
        alert("Serviceablity is not availabe")   
      }
      Object.assign(this.deliveryDetails,data)
      console.log("delivery details",this.deliveryDetails)
      this.condition=true
      
    },
    (error)=>{
      if(error.status==404){
        alert("The Product is not deliverable at this pincode")
      }
      if(error.status==400){
        alert("Input cannot be blank!!,Please enter pincode to check")
      }
    }
    )
  }

}


