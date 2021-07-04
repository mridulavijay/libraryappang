import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BookserviceService } from '../bookservice.service';

@Component({
  selector: 'app-updatebook',
  templateUrl: './updatebook.component.html',
  styleUrls: ['./updatebook.component.css']
})
export class UpdatebookComponent implements OnInit {
 BookItem={
  title:'',
  author:'',
  genre:'',
  image:'',
  desc:''
 }
  constructor(private bookService:BookserviceService,private router:Router) { }

  ngOnInit(): void {
    let BookId = localStorage.getItem("editBookId");
    this.bookService.getBook(BookId).subscribe((data)=>{
      this.BookItem=JSON.parse(JSON.stringify(data));
  })
  }
  editBook()
  {    
    this.bookService.editBook(this.BookItem);   
    alert("Book has been updated");
    this.router.navigate(['books']);
  }
  

}
