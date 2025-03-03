import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule } from '@angular/forms';
import { AuthenticationRoutingModule } from './authentication-routing.module';


@NgModule({
  declarations: [
    ...AuthenticationRoutingModule.components,

  ],
  imports: [
    CommonModule,
    AuthenticationRoutingModule,
    FormsModule,
  ]
})
export class AuthenticationModule { 
  
}
