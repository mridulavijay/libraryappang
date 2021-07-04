import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BookserviceService } from '../bookservice.service';

@Component({
  selector: 'app-newbook',
  templateUrl: './newbook.component.html',
  styleUrls: ['./newbook.component.css']
})
export class NewbookComponent implements OnInit {
BookItem={
  title:"",
  author:"",
  genre:"",
  desc:"",
  image:""
}
  constructor(private bookservice:BookserviceService,private router:Router) { }

  ngOnInit(): void {
  }
AddBook(){
  this.bookservice.newBook(this.BookItem);
  alert("Book has been added");
  this.router.navigate(['books']);
}
}
