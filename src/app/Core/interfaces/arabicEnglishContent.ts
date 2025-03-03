import { Content } from "./Content"

export class ArabicEnglishContent {
    ContentEnglish:Content=
    {
        homePage:[
            {id:1,name:'Add New User',redirectTo:'/task/addnew'},
            {id:2,name:'All Users',redirectTo:'/task/allusers'}

        ],
        dir:"ltr",
        lang:"en",
        langName:"English",
        logout:'Log out',
        addNewUser:    {title:"Add New User",codeTitle:"Code",nameTitle:"Name",phoneTitle:"Phone",emailTitle:"Email",roleTitle:"Choose Role",activeTitle:"Is User Active?",button:"Submit"},
        loginPage:{title:'Login',codeTitle:'Code',passwordTitle:'Password',showPass:"Show Password",button:"Submit",validationMsg:"Invalid code or password"}
    }

    ContentArabic:Content=
    {
        homePage:[
            {id:1,name:'إضافة موظف جديد',redirectTo:'/task/addnew'},
            {id:2,name:'سجل الموظفين',redirectTo:'/task/allusers'}
        ],
        dir:"rtl",
        lang:"ar",
        langName:"Arabic",
        logout:"تسجيل الخروج",
        loginPage:{title:'تسجيل الدخول',codeTitle:'كود الموظف',passwordTitle:'كلمة السر',showPass:"إظهار كلمة السر",button:"تسجيل",validationMsg:"كلمة سر أو كود غير صحيحين"},
        addNewUser:    {title:"إضافة موظف جديد",codeTitle:"كود",nameTitle:"اسم",phoneTitle:"رقم تليفون",emailTitle:"بريد الكتروني",roleTitle:"اختار مستوى الدخول",activeTitle:"هل الموظف يعمل الان بالشركة؟",button:"اضافة"},


    }
}