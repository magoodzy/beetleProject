import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TaskRoutingModule } from './task-routing.module';
import { AddNewUserComponent } from './components/add-new-user/add-new-user.component';
import { AllUsersComponent } from './components/all-users/all-users.component';


@NgModule({
  declarations: [
    ...TaskRoutingModule.components
  ],
  imports: [
    CommonModule,
    TaskRoutingModule
  ]
})
export class TaskModule { 
  
}
