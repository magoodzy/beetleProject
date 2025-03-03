import { Injectable } from '@angular/core';
import { Content } from '../../Core/interfaces/Content';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  Content:Content={
    dir:"ltr",
    homePage:[],
    lang:"en",
    langName:"English",
    logout:"Log out",
    addNewUser:    {title:"Add New User",codeTitle:"Code",nameTitle:"Name",phoneTitle:"Phone",emailTitle:"Email",roleTitle:"Choose Role",activeTitle:"Is User Active?",button:"Submit"},
    loginPage:{title:'Login',codeTitle:'Code',passwordTitle:'Password',showPass:"Show Password",button:"Submit",validationMsg:"Invalid code or password"}
  }
  constructor() { }
}
