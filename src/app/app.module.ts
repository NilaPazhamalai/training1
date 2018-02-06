import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { Training1Module } from './training1/training1.module';
import { AppRoutingModule } from './/app-routing.module';
import { TrainingService } from './training1/training.service';
import { HttpClientModule }    from '@angular/common/http';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    Training1Module
  ],
  providers:[TrainingService],
  bootstrap: [AppComponent]
})

export class AppModule { }
