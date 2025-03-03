import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Users } from './Core/entities/users';
import { ArabicEnglishContent } from './Core/interfaces/arabicEnglishContent';
import { SharedService } from './Shared/Services/shared.service';

@Component({
  selector: 'app-root',
  standalone:false,
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'beetleProject';

  LanguageContent = new ArabicEnglishContent();
  ListOfUsers:Users[]=[
    {id:1,name:"ahmed",email:"a@test.com",phone:"4353453543",Status:"Active",role:"Admin"},
    {id:2,name:"omar",email:"b@test.com",phone:"372636722",Status:"Active",role:"Basic"},
    {id:3,name:"ali",email:"c@test.com",phone:"82736",Status:"Soft_deleted",role:"Basic"},
  ]

  constructor(public SharedService:SharedService) {
      this.getSetLocalStorage()
      this.getSetLanguage()
  }


  getSetLocalStorage(){
    if (!localStorage.getItem("users")){
      localStorage.setItem("users",JSON.stringify(this.ListOfUsers))
    }
    var users:string|any = localStorage.getItem("users")
    this.ListOfUsers=JSON.parse(users)
  }


  getSetLanguage(){
    if (!localStorage.getItem("language")){
      localStorage.setItem("language","en")
      this.SharedService.Content=this.LanguageContent.ContentEnglish;
      return this.SharedService.Content;
    }

    if (localStorage.getItem("language")=="en"){
      this.SharedService.Content=this.LanguageContent.ContentEnglish;
    }else{
      this.SharedService.Content=this.LanguageContent.ContentArabic;
    }

    return this.SharedService.Content;
  }
}
