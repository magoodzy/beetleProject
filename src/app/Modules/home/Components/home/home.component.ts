import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SharedService } from '../../../../Shared/Services/shared.service';

@Component({
  selector: 'app-home',
  standalone:false,
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

/**
 *
 */
  constructor(public router:Router, public SharedService:SharedService) {
    
  }


  ngOnInit(): void {
    
  }


  routeToPage(url:string){
    this.router.navigate([url])
  }

}
