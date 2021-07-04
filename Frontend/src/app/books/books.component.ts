import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BookserviceService } from '../bookservice.service';
@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {
books=[{
  title:'',
    author:'',
    genre:'',
    image:'',
    desc:''
}]
  constructor(private bookService:BookserviceService,private router:Router) { }

  ngOnInit(): void {
    this.bookService.getBooks().subscribe((data)=>{
      this.books=JSON.parse(JSON.stringify(data));
  })
  }
  getBook(book:any){
    localStorage.setItem("getBookId", book._id.toString());
    this.bookService.getBook(book._id)
    .subscribe((data)=>{
      this.books=JSON.parse(JSON.stringify(data));
  })
  this.router.navigate(['book']);
}
  editBook(book:any)
  {
    localStorage.setItem("editBookId", book._id.toString());
    this.router.navigate(['update']);

  }
  deleteBook(book:any)
  {
    this.bookService.deleteBook(book._id)
      .subscribe((data) => {
        this.books = this.books.filter(b => b!== book);
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
