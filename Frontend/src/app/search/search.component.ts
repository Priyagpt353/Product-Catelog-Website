import { Component, OnInit } from '@angular/core';
import { DashboardService } from '../dashboard.service'
import { DashboardComponent } from '../dashboard/dashboard.component'
import { Router } from '@angular/router'
import { FormGroup,FormControl } from '@angular/forms'
import { NavbarComponent } from '../navbar/navbar.component'



@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  searchResult = new  FormGroup(
    {
      searched: new FormControl('')
      
    }
  )
  list: any[] = [];
  constructor(private router:Router,private service:DashboardService) {

    

   }

  ngOnInit(): void {
   
    this.service.getProductFromRemote(this.searchResult.value['searched']).subscribe((result)=>
    {
      //this.router.navigate(['../search'])
      this.list=result;
      return result;
      this.searchResult.reset()
    })
  }


}

