import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthorsserviceService } from '../authorsservice.service';

@Component({
  selector: 'app-newauthor',
  templateUrl: './newauthor.component.html',
  styleUrls: ['./newauthor.component.css']
})
export class NewauthorComponent implements OnInit {
AuthorItem={
  author:"",
  book:"",
  genre:"",
  desc:"",
  image:""
}
  constructor(private authorService:AuthorsserviceService,private router:Router) { }

  ngOnInit(): void {
  }
  AddAuthor(){
    this.authorService.newAuthor(this.AuthorItem);
    alert("Author has been added");
    this.router.navigate(['authors']);
  }
}
