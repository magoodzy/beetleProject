import { Component, OnInit } from '@angular/core';
import { SharedService } from '../../../../Shared/Services/shared.service';
import { Users } from '../../../../Core/entities/users';

@Component({
  selector: 'app-add-new-user',
  standalone: false,
  templateUrl: './add-new-user.component.html',
  styleUrl: './add-new-user.component.scss'
})
export class AddNewUserComponent implements OnInit {
  isSpinner:boolean=false

  errMsg:string=''
 
  constructor(public SharedService:SharedService) {
    
  }


  ngOnInit(): void {
    
  }


  addNewUser(code:HTMLInputElement,name:HTMLInputElement,phone:HTMLInputElement,email:HTMLInputElement,role:HTMLSelectElement,active:HTMLSelectElement){
    this.isSpinner=true;
    this.errMsg=""
    var usersJson:string|any=localStorage.getItem("users")
    var users=JSON.parse(usersJson)

    var user=new Users()

    user.id=Number(code.value)
    user.Status=active.value
    user.email=email.value
    user.phone=phone.value
    user.name=name.value
    user.role=role.value

    users.push(user)

    localStorage.removeItem("users")
    localStorage.setItem("users",JSON.stringify(users))
    this.isSpinner=false
    this.errMsg='User added successfully!'


    code.value=""
    active.value=""
    email.value=""
    phone.value=""
    name.value=""
    role.value=""

  }
}
