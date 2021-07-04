import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthorsserviceService } from '../authorsservice.service';
@Component({
  selector: 'app-authors',
  templateUrl: './authors.component.html',
  styleUrls: ['./authors.component.css']
})
export class AuthorsComponent implements OnInit {
authors=[{
  author:"",
  book:"",
  genre:"",
  image:"",
  desc:""
}]
  constructor(private authorService:AuthorsserviceService,private router:Router) { }

  ngOnInit(): void {
    this.authorService.getAuthors().subscribe((data)=>{
      this.authors=JSON.parse(JSON.stringify(data));
  })
  
  }
  getAuthor(author:any){
    localStorage.setItem("getAuthorId", author._id.toString());
    this.authorService.getAuthor(author._id)
    .subscribe((data)=>{
      this.authors=JSON.parse(JSON.stringify(data));
  })
  this.router.navigate(['author']);
}
  editAuthor(author:any)
  {
    localStorage.setItem("editAuthorId", author._id.toString());
    this.router.navigate(['updateauthor']);

  }
  deleteAuthor(author:any)
  {
    this.authorService.deleteAuthor(author._id)
      .subscribe((data) => {
        this.authors = this.authors.filter(a => a!== author);
      })
  

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
