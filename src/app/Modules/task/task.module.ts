import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TaskRoutingModule } from './task-routing.module';
import { FormsModule } from '@angular/forms';
import { RangePipe } from "../../Core/pipes/range";
import { MatDialogModule } from '@angular/material/dialog';
import { EditUserComponent } from './components/edit-user/edit-user.component'; // استيراد MatDialogModule


@NgModule({
  declarations: [
    ...TaskRoutingModule.components,
    EditUserComponent
  ],
  imports: [
    CommonModule,
    TaskRoutingModule,
    FormsModule,
    RangePipe,
    MatDialogModule
],
  providers:[Range]
})
export class TaskModule { 
  
}
