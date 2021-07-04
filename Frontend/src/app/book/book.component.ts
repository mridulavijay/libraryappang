import { Component, OnInit } from '@angular/core';
import { BookserviceService } from '../bookservice.service';
@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {
  book={
    title:'',
      author:'',
      genre:'',
      image:'',
      desc:''
  }
  constructor(private bookService:BookserviceService) { }

  ngOnInit(): void {
    let BookId = localStorage.getItem("getBookId");
    this.bookService.getBook(BookId).subscribe((data)=>{
      this.book=JSON.parse(JSON.stringify(data));
  })
  }

}
