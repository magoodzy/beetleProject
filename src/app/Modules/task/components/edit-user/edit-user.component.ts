import { Component, Inject } from '@angular/core';
import { SharedService } from '../../../../Shared/Services/shared.service';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { AllUsersComponent } from '../all-users/all-users.component';
import { Users } from '../../../../Core/entities/users';

@Component({
  selector: 'app-edit-user',
  standalone: false,
  templateUrl: './edit-user.component.html',
  styleUrl: './edit-user.component.scss'
})
export class EditUserComponent {
  errMsg:string=''

  /**
   *
   */
  constructor(public SharedService:SharedService,public dialogRef: MatDialogRef<AllUsersComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Users ) {
    
  }


  editUser(code:HTMLInputElement,name:HTMLInputElement,phone:HTMLInputElement,email:HTMLInputElement,role:HTMLSelectElement,active:HTMLSelectElement){
    console.log(code.value,name.value,phone.value,email.value,role.value,active.value);

    var userJson:string|any=localStorage.getItem("users")
    var users = JSON.parse(userJson)

    var user = users.find((o:any)=>o.id==this.data.id)
    user.name=name.value;
    user.phone=phone.value;
    user.email=email.value;
    user.role=role.value;
    user.Status=active.value;

    localStorage.removeItem("users")
    localStorage.setItem("users",JSON.stringify(users))
    console.log(users);
    
    this.errMsg='تم التعديل بنجاح'
  }
}
