import { Component, OnInit } from '@angular/core';
import { AuthorsserviceService } from '../authorsservice.service';

@Component({
  selector: 'app-author',
  templateUrl: './author.component.html',
  styleUrls: ['./author.component.css']
})
export class AuthorComponent implements OnInit {
author={
  author:'',
  book:'',
  genre:'',
  desc:'',
  image:''
}
  constructor(private authorService:AuthorsserviceService) { }

  ngOnInit(): void {
    let AuthorId = localStorage.getItem("getAuthorId");
    this.authorService.getAuthor(AuthorId).subscribe((data)=>{
      this.author=JSON.parse(JSON.stringify(data));
  })
  }

}
