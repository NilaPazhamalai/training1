import { Component, OnInit } from '@angular/core';
import { Training } from '../training';
import { TrainingService } from '../training.service';

@Component({
  selector: 'app-search-training',
  templateUrl: './search-training.component.html',
  styleUrls: ['./search-training.component.css']
})
export class SearchTrainingComponent implements OnInit {

  trainingList: Training[];
  date: Date;

  constructor(
    private trainingService: TrainingService
  ) { }

  ngOnInit() {
  }

  search(): void {
    
    this.trainingService.searchTraining(this.date)
    .subscribe(trainingList => this.trainingList = trainingList);
  }

}
