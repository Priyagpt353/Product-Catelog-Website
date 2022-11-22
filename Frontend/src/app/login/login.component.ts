import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { User } from '../model/user.model'
import {  LoginService} from '../login.service'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user = {
    password:"",
    //cpassword:"",
    emailId:""

  }
  message =""
  
  constructor(private loginservice:LoginService, private router : Router) { }

  ngOnInit(): void {
    this.loginservice.isLoggedIn();
  }

  loginUser() {
    console.log(this.user);
    this.loginservice.loginUserFromRemote(this.user).subscribe(data => {
      console.log(data);
      //this.loginservice.login(data.token, data.userName);
      this.router.navigate(["dashboard"])
    },
      error => {
        alert("Something went wrong")
        console.log("exception occur")
        console.log(error);
        this.message = "Bad Credential, please enter valid emailId and password"
      })
  }

}
