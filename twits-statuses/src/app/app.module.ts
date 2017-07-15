import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { FixColumnComponent } from './fix-column/fix-column.component';
import { HpMainColumnComponent } from './hp-main-column/hp-main-column.component';
import { LoginComponent } from './login/login.component';
import { SingleStatusComponent } from './single-status/single-status.component';

import { UsersService } from './services/users.service';
import { StatusesService } from './services/statuses.service';
import { PostService } from './services/posts.service';

import { StatusComponent } from './status/status.component';

import { AppRoutingModule } from './app-routing.module';
import { MyProfileComponent } from './my-profile/my-profile.component';
import { ProfileComponent } from './profile/profile.component';
import { PostsComponent } from './posts/posts.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    FixColumnComponent,
    HpMainColumnComponent,
    LoginComponent,
    SingleStatusComponent,
    StatusComponent,
    MyProfileComponent,
    ProfileComponent,
    PostsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [UsersService, StatusesService, PostService],
  bootstrap: [AppComponent]
})
export class AppModule { }
