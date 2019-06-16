import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { BlogComponent } from './components/blog/blog.component';
import { QuizComponent } from './components/quiz/quiz.component';
import { ContactComponent } from './components/contact/contact.component';
import { NavbarComponent } from './navbar/navbar.component';
import { BlogItemComponent } from './components/blog-item/blog-item.component';
import { BlogItemTextComponent } from './components/blog-item-text/blog-item-text.component';
import { BlogItemImageComponent } from './components/blog-item-image/blog-item-image.component';
import { BlogItemDetailsComponent } from './components/blog-item-details/blog-item-details.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { DataService } from './services/data.service';
import { SummaryPipe } from './pipes/summary.pipe';
import { SearchBarComponent } from './shared/search-bar/search-bar.component';
import { FormsModule } from '@angular/forms';
import { BlogHomeComponent } from './components/blog-home/blog-home.component';
import { FilterPipe } from './pipes/filter.pipe';
import { SelectizeComponent } from './components/selectize/selectize.component';
import { AddPostComponent } from './components/add-post/add-post.component';
import {AuthenticationService} from './services/authentication.service';
import {InterceptorAuthService} from './services/interceptor-auth.service';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BlogComponent,
    QuizComponent,
    ContactComponent,
    NavbarComponent,
    BlogItemComponent,
    BlogItemTextComponent,
    BlogItemImageComponent,
    BlogItemDetailsComponent,
    SummaryPipe,
    SearchBarComponent,
    BlogHomeComponent,
    FilterPipe,
    SelectizeComponent,
    AddPostComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    DataService,
    AuthenticationService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: InterceptorAuthService,
      multi: true
    },
    ],
  
  bootstrap: [AppComponent]
})
export class AppModule { }
