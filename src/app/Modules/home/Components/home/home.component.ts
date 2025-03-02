import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone:false,
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  System=localStorage.getItem('System');

  PageNumber:number=0
/**
 *
 */
constructor(public router:Router) {
  
}


ngOnInit(): void {
  
}

openSystem(type:string){
  localStorage.removeItem('System');
  localStorage.setItem('System',type);
  window.location.reload();
}

}
