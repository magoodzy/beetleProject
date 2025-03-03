import { Component } from '@angular/core';

@Component({
  selector: 'app-all-users',
  standalone: false,
  templateUrl: './all-users.component.html',
  styleUrl: './all-users.component.scss'
})
export class AllUsersComponent {
  usersJSON:string|any=localStorage.getItem("users")
  users=JSON.parse(this.usersJSON)
}
