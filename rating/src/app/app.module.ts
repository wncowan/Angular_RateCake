import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {HttpService} from './http.service';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { RatingdetailsComponent } from './ratingdetails/ratingdetails.component';
import { DessertsComponent } from './desserts/desserts.component';

@NgModule({
  declarations: [
    AppComponent,
    RatingdetailsComponent,
    DessertsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
