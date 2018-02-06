import { Component, OnInit, NgModule, Input } from '@angular/core';
import { Trainer } from '../trainer';
import { Training } from '../training';
import { TrainingService } from '../training.service';
import { ScheduleTraining } from '../ScheduleTraining';



@Component({
  selector: 'app-schedule-training',
  templateUrl: './schedule-training.component.html',
  styleUrls: ['./schedule-training.component.css']
})
export class ScheduleTrainingComponent implements OnInit {
  
  scheduleTraining : ScheduleTraining;
  domains = [];
  durations = [];
  submitted = false;
  constructor(
    private trainingService: TrainingService
  ) { }

  ngOnInit() {
    
    this.scheduleTraining = new ScheduleTraining; 
    this.scheduleTraining.trainer = new Trainer; 
    this.scheduleTraining.trainingList = new Array<Training>();
    this.scheduleTraining.trainingList.push(new Training);
    this.scheduleTraining.trainingList.push(new Training);
    this.domains = ["angular","java",".net"];
    this.durations = [45,56,88,120];
    this.submitted = false;
  }

  onSubmit(){
    this.submitted=true;
  }

  addTraining(){
      this.trainingService.addTraining(this.scheduleTraining)
      .subscribe(submitted => this.submitted = submitted);
      if(this.submitted){
        this.ngOnInit();
      }else{
        alert('Internal Server error. Try again later');
      }
  }

}
