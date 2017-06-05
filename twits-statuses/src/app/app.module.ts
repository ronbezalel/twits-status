import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { FixColumnComponent } from './fix-column/fix-column.component';
import { HpMainColumnComponent } from './hp-main-column/hp-main-column.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    FixColumnComponent,
    HpMainColumnComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
