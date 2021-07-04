import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthserviceService {
  item={
    user:'',
    email:'',
    password:'',
    password2:'',
    userCategory:''
    
  }
 userCheck={
   username:'',
   password:''
 }
  constructor(private http:HttpClient) { }
  addUser(item:any){
    return this.http.post("http://localhost:3000/signup/add",{"User":item});
  }
  loginUser(userCheck:any)
  {
    return this.http.post<any>("http://localhost:3000/login", userCheck);
  }
  loggedIn()
  {
    return !!localStorage.getItem('token');
  }
  getToken()
  {
    return localStorage.getItem('token');
  }
}
