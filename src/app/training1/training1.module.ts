import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScheduleTrainingComponent } from '../training1/schedule-training/schedule-training.component';
import { SearchTrainingComponent } from '../training1/search-training/search-training.component';
import { AboutTrainingComponent } from '../training1/about-training/about-training.component';
import { Training1RoutingModule } from '../training1/training1-routing.module';
import {Training} from './training';
import {Trainer} from './trainer'
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here
import { BrowserModule } from '@angular/platform-browser';
import { TrainingService } from './training.service';

@NgModule({
  imports: [
    CommonModule,
    Training1RoutingModule,
    FormsModule,
    BrowserModule
  ],
  declarations: [ScheduleTrainingComponent, SearchTrainingComponent, AboutTrainingComponent],
  exports: [ScheduleTrainingComponent, SearchTrainingComponent, AboutTrainingComponent],
  
})
export class Training1Module { }
