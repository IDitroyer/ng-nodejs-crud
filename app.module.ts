import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms'

import { AppComponent } from './app.component';
import { AprendicesComponent } from './aprendices/aprendices.component';
import {AprendicesService} from "./servicios/aprendices.service";
@NgModule({
  declarations: [
    AppComponent,
    AprendicesComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [AprendicesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
