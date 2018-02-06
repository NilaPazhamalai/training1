import { NgModule } from '@angular/core';


import { RouterModule, Routes} from '@angular/router'
import { ScheduleTrainingComponent } from './training1/schedule-training/schedule-training.component';
import { SearchTrainingComponent } from './training1/search-training/search-training.component';
import { AboutTrainingComponent } from './training1/about-training/about-training.component';

const routes: Routes=[
  {path: '', redirectTo:'/search',pathMatch:'full'}
  ]
@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
 
})
export class AppRoutingModule { }
