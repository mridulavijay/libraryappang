import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthserviceService } from '../authservice.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(public authService:AuthserviceService,private router:Router) { }

  ngOnInit(): void {
  }
  logoutUser()
  {
  localStorage.removeItem('token')
  localStorage.removeItem('user_cat')
  this.router.navigate(['login'])
  }
  userCat(){
   let category=localStorage.getItem('user_cat');
   if(category=='admin'){
     return true
   }
   else{
     return false
   }
  }
  
}
