import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class AuthorsserviceService {

  constructor(private http:HttpClient) { }
  getAuthors(){
    return this.http.get("http://localhost:3000/userhome/authors");
  }
  getAuthor(id:any){
    return this.http.get("http://localhost:3000/userhome/authors/"+id);
  }
  newAuthor(item:any)
  {   
    return this.http.post("http://localhost:3000/adminhome/addauthor/add",{"author":item})
    .subscribe(data =>{console.log(data)})
  }
  deleteAuthor(id:any)
  {

    return this.http.delete("http://localhost:3000/adminhome/adauthors/delete/"+id)

  }
  editAuthor(author:any)
  {
    console.log('client update')
    return this.http.put("http://localhost:3000/adminhome/adauthors/aupdate/",author)
    .subscribe(data =>{console.log(data)})
  }
}
