import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SharedService } from '../../../../Shared/Services/shared.service';

@Component({
  selector: 'app-login',
  standalone:false,
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  errMsg:string='';
  userToken:any;
  equip:string='sadasdasd'
  isSpinner:boolean = false;
  alive:boolean=true;
  passVisible:boolean=false;

  hideValidation:boolean=true



  empData:any;
  constructor(public router:Router,public sharedService:SharedService) { }

  ngOnInit(): void {
  }

  showPassword(){
    console.log();
    this.passVisible=!this.passVisible;
  }
//;l
  login(form:any){
    this.errMsg=''
    this.isSpinner = true

    if (!form.value.subCode){
      this.isSpinner = false
      return this.hideValidation=false
    }
   
   
     var usersJson:string|any = localStorage.getItem("users")
     var users = JSON.parse(usersJson)
     var user = users.find((o:any)=>o.id==form.value.subCode)

     if (user){
      localStorage.setItem("token","token")
      localStorage.setItem("user",JSON.stringify(user))
      window.location.replace("/home")
     }else{
      this.isSpinner = false
      return this.hideValidation=true
     }

 

    return this.hideValidation=true
  }


}
