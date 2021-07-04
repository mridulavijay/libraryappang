import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { BooksComponent } from './books/books.component';
import { AuthorsComponent } from './authors/authors.component';
import { NewbookComponent } from './newbook/newbook.component';
import { NewauthorComponent } from './newauthor/newauthor.component';
import { TokenInterceptorService } from './token-interceptor.service';
import { BookserviceService } from './bookservice.service';
import { UpdatebookComponent } from './updatebook/updatebook.component';
import { BookComponent } from './book/book.component';
import { AuthserviceService } from './authservice.service';
import { AuthorsserviceService } from './authorsservice.service';
import { AuthorComponent } from './author/author.component';
import { UpdateauthorComponent } from './updateauthor/updateauthor.component';
import { UserhomeComponent } from './userhome/userhome.component';
import { AdminhomeComponent } from './adminhome/adminhome.component';
import { HomeComponent } from './home/home.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    SignupComponent,
    BooksComponent,
    AuthorsComponent,
    NewbookComponent,
    NewauthorComponent,
    UpdatebookComponent,
    BookComponent,
    AuthorComponent,
    UpdateauthorComponent,
    UserhomeComponent,
    AdminhomeComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [BookserviceService,AuthserviceService,AuthorsserviceService, {
    provide: HTTP_INTERCEPTORS,
    useClass: TokenInterceptorService,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
