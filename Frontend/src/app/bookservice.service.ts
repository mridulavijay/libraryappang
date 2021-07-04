import { Injectable } from '@angular/core';
import{HttpClient,HttpResponse} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class BookserviceService {
  item={
    title:'',
    author:'',
    genre:'',
    image:'',
    desc:''
  }
  constructor(private http:HttpClient) { }
  getBooks(){
    return this.http.get("http://localhost:3000/userhome/books");
  }
  getBook(id:any){
    return this.http.get("http://localhost:3000/userhome/books/"+id);
  }
  newBook(item:any)
  {   
    return this.http.post("http://localhost:3000/adminhome/addbook/add",{"book":item})
    .subscribe(data =>{console.log(data)})
  }
  deleteBook(id:any)
  {

    return this.http.delete("http://localhost:3000/adminhome/adbooks/delete/"+id)

  }
  editBook(book:any)
  {
    console.log('client update')
    return this.http.put("http://localhost:3000/adminhome/adbooks/bupdate/",book)
    .subscribe(data =>{console.log(data)})
  }
}
