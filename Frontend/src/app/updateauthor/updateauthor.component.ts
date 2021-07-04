import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthorsserviceService } from '../authorsservice.service';

@Component({
  selector: 'app-updateauthor',
  templateUrl: './updateauthor.component.html',
  styleUrls: ['./updateauthor.component.css']
})
export class UpdateauthorComponent implements OnInit {
AuthorItem={
  author:'',
  book:'',
  genre:'',
  desc:'',
  image:''
}
  constructor(private authorService:AuthorsserviceService,private router:Router) { }

  ngOnInit(): void {
    let AuthorId = localStorage.getItem("editAuthorId");
    this.authorService.getAuthor(AuthorId).subscribe((data)=>{
      this.AuthorItem=JSON.parse(JSON.stringify(data));
  })
  }
  editAuthor()
  {    
    this.authorService.editAuthor(this.AuthorItem);   
    alert("Author has been updated");
    this.router.navigate(['authors']);
  }
}
