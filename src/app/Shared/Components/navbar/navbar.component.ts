import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subject, takeWhile } from 'rxjs';
import { LoadingService } from '../../Services/loading.service';
import { ApiRequestService } from '../../../Core/http/api-request.service';

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

  constructor(public loading:LoadingService,public router:Router,public apiService:ApiRequestService) {
    this.isLoading=this.loading.isLoading;
    console.log(this.router.url);

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
    localStorage.clear();
    window.location.replace("/login");
  }

  collapse(){
    const navCollapse = document.getElementsByClassName('navbar-collapse');
    console.log(navCollapse[0].classList.remove('show'));
  }


  openPageInNewTab(url:string){
    this.router.navigate([]).then((result:any) => {
      window.open(url, '_blank');
    });
  }







}
