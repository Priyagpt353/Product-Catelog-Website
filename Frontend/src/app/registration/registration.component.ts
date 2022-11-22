import { Component, OnInit } from '@angular/core';
import { User } from '../model/user.model'
import { Router } from '@angular/router'
import { RegistrationService } from '../registration.service'

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  user:User ={

    //id:0,
    firstName:"",
    lastName:"",
    password:"",
    cpassword:"",
    emailId:""

  }
  constructor( private service: RegistrationService, private router: Router) { }

  ngOnInit(): void {
  }

  userSignup(){
    if((this.user.emailId=="")&&(this.user.firstName=="")&&(this.user.lastName=="")&&(this.user.password=="")&&(this.user.cpassword=="")){
      alert("All input fields are required")
    }
    else if(this.user.cpassword != this.user.password){
      alert("Password Must be same")
    }
    else{
      console.warn(this.user)
    this.service.signupUser(this.user).subscribe((data)=>{
      console.warn("Data is ",data)
      alert("User Register Sucessfully!!")
      this.router.navigate(['../login'])
    }),
      (    error: any)=>{
      console.warn(error,"Error occure")
    }
    }
  }

}
