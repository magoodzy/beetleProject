import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subject, takeWhile } from 'rxjs';
import { LoadingService } from '../../Services/loading.service';
import { ApiRequestService } from '../../../Core/http/api-request.service';
import { SharedService } from '../../Services/shared.service';
import { ArabicEnglishContent } from '../../../Core/interfaces/arabicEnglishContent';

@Component({
  selector: 'app-navbar',
  standalone:false,
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  showDropdown:boolean=false;

  

  isHome:boolean=false;
  isLoading: Subject<boolean>;

  Contents = new ArabicEnglishContent()

  constructor(public sharedService:SharedService,public loading:LoadingService,public router:Router) {
    this.isLoading=this.loading.isLoading;
    this.router.events.subscribe((val:any)=>{
      this.router.url.includes('home')? this.isHome=true:this.isHome=false;
  })
  }

  ngOnInit(): void {
  }

  backHistory(){
    history.back();
  }

  logout(){
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    window.location.replace("/login");
  }

  collapse(){
    const navCollapse = document.getElementsByClassName('navbar-collapse');
  }


  openPageInNewTab(url:string){
    this.router.navigate([]).then((result:any) => {
      window.open(url, '_blank');
    });
  }



  changeLanguage(){
    var lang:string|any=localStorage.getItem("language")

    if (lang=="en"){
      localStorage.removeItem("language")
      localStorage.setItem("language","ar")
      this.sharedService.Content=this.Contents.ContentArabic
    } else {
      localStorage.removeItem("language")
      localStorage.setItem("language","en")
      this.sharedService.Content=this.Contents.ContentEnglish
    }

  }







}
