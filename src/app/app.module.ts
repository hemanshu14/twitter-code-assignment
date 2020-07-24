import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import TwitterComponent from './TwitterComponent/twitter.component';
import {AppRoutingModule} from './app-routing.module';
import LeftNavComponent from './LeftNav/left-nav.component';
import TweetComponent from './TweetComponent/tweet.component';
import {HttpClientModule} from "@angular/common/http";
import {FilterPipe} from "./Filter/filter.pipe";

@NgModule({
  declarations: [
    AppComponent,
    TwitterComponent,
    LeftNavComponent,
    TweetComponent,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
