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


  addNewUser(code:string,name:string,phone:string,email:string,role:string,active:string){
    this.isSpinner=true
    var usersJson:string|any=localStorage.getItem("users")
    var users=JSON.parse(usersJson)

    var user=new Users()

    user.id=Number(code)
    user.Status=active
    user.email=email
    user.phone=phone
    user.name=name
    user.role=role

    users.push(user)

    localStorage.removeItem("users")
    localStorage.setItem("users",JSON.stringify(users))
    this.isSpinner=false
    this.errMsg='User added successfully!'
  }
}
