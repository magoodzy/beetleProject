export class Content{
    homePage:{id:number,name:string,redirectTo:string}[]=[];
    dir:string="ltr";
    langName:string="English";
    lang:string="en";
    logout:string="Log out"
    loginPage:{title:string,codeTitle:string,passwordTitle:string,showPass:string,button:string,validationMsg:string}=
    {title:'Login',codeTitle:'Code',passwordTitle:'Password',showPass:"Show Password",button:"Submit",validationMsg:"Invalid code or password"}

    addNewUser:{title:string,codeTitle:string,nameTitle:string,phoneTitle:string,emailTitle:string,roleTitle:string,activeTitle:string,button:string}=
    {title:"Add New User",codeTitle:"Code",nameTitle:"Name",phoneTitle:"Phone",emailTitle:"Email",roleTitle:"Choose Role",activeTitle:"Is User Active?",button:"Submit"}
}