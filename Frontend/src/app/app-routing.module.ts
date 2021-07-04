import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminhomeComponent } from './adminhome/adminhome.component';
import { AuthorComponent } from './author/author.component';
import { AuthorsComponent } from './authors/authors.component';
import { BookComponent } from './book/book.component';
import { BooksComponent } from './books/books.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { NewauthorComponent } from './newauthor/newauthor.component';
import { NewbookComponent } from './newbook/newbook.component';
import { SignupComponent } from './signup/signup.component';
import { UpdateauthorComponent } from './updateauthor/updateauthor.component';
import { UpdatebookComponent } from './updatebook/updatebook.component';
import { UserhomeComponent } from './userhome/userhome.component';

const routes: Routes = [{path:'login',component:LoginComponent},{path:'signup',component:SignupComponent},{path:'addbook',component:NewbookComponent},
{path:'addauthor',component:NewauthorComponent},{path:'books',component:BooksComponent},{path:'authors',component:AuthorsComponent},{path:'update',component:UpdatebookComponent},
{path:'book',component:BookComponent},{path:'author',component:AuthorComponent},{path:'updateauthor',component:UpdateauthorComponent},{path:'userhome',component:UserhomeComponent},
{path:'adminhome',component:AdminhomeComponent},{path:'',component:HomeComponent}]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
