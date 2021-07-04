import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthserviceService } from '../authservice.service';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  User={email:"",
password:"",
user:"",
userCategory:"",
password2:""}

  constructor(private router:Router, private authService:AuthserviceService) { }
  
  ngOnInit(): void {

  }
 resp_data:any

signupVerify(signup:NgForm)
{
  if(this.User.password2==this.User.password){
   this.authService.addUser(this.User)
   .subscribe((data) =>{
    this.resp_data=JSON.parse(JSON.stringify(data)).message;
    if(this.resp_data!=""){
      alert(this.resp_data);
      signup.resetForm();
    }
    else{
      alert("User registered!!");
  this.router.navigate(['login']);
    } 
  
  
  })
 
 

  }
  
  else{
    alert("Both passwords must match!!");
    signup.resetForm();
  }
}
}
