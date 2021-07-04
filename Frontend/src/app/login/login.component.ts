import { Component, OnInit } from '@angular/core';
import { FormControl,FormGroup, NgForm } from '@angular/forms';
import { Router } from '@angular/router';

import { AuthserviceService } from '../authservice.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
   User={username:"",
  password:""};


  constructor(private authService:AuthserviceService,private router:Router) { }

  ngOnInit(): void {
  }
  userVerify(login:NgForm){ 
   this.authService.loginUser(this.User)
  .subscribe(
    res => {
      localStorage.setItem('token', res.tok);
      localStorage.setItem('user_cat', res.usercategory);
      
      if(this.User.username!="admin")
      {this.router.navigate(['userhome']);}
      else{
        this.router.navigate(['adminhome']);
      }
    },
    err => {
      console.log(err);
      alert(err.error);
      login.resetForm();
    }
  ) 
}
}
