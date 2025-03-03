import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { Users } from '../../../../Core/entities/users';
import { MatDialog } from '@angular/material/dialog';
import { EditUserComponent } from '../edit-user/edit-user.component';
import { SharedService } from '../../../../Shared/Services/shared.service';

@Component({
  selector: 'app-all-users',
  standalone: false,
  templateUrl: './all-users.component.html',
  styleUrl: './all-users.component.scss'
})
export class AllUsersComponent implements OnInit {
  usersJSON:string|any=localStorage.getItem("users")
  users=JSON.parse(this.usersJSON)

  


  myUserObj:string|any=localStorage.getItem("user")
  myUser=JSON.parse(this.myUserObj)

  filteredUsers: Users[] = [];
  sortedColumn: keyof Users | '' = '';
  sortDirection: 'asc' | 'desc' | '' = '';
  searchText: string = '';
  pageSize: number = 2;
  currentPage: number = 1;
  

  value:any;
  representatives:any;
  customers:any;
  loading:boolean=false


  /**
   *
   */
  constructor(private dialog:MatDialog,public SharedService:SharedService) {
    
  }

  ngOnInit(): void {
    this.filteredUsers = this.users;

  }


  applyFilter() {
    this.filteredUsers = this.users.filter((user:Users) =>
      Object.values(user).some((val) =>
        val.toString().toLowerCase().includes(this.searchText.toLowerCase())
      )
    );
    this.currentPage = 1;
  }

  sort(column: keyof Users) {
    if (this.sortedColumn === column) {
      this.sortDirection = this.sortDirection === 'asc' ? 'desc' : 'asc';
    } else {
      this.sortedColumn = column;
      this.sortDirection = 'asc';
    }

    this.filteredUsers.sort((a, b) => {
      const valueA = a[column];
      const valueB = b[column];

      if (valueA < valueB) {
        return this.sortDirection === 'asc' ? -1 : 1;
      }
      if (valueA > valueB) {
        return this.sortDirection === 'asc' ? 1 : -1;
      }
      return 0;
    });
  }

  get paginatedUsers(): Users[] {
    const startIndex = (this.currentPage - 1) * this.pageSize;
    return this.filteredUsers.slice(startIndex, startIndex + this.pageSize);
  }

  changePage(page: number) {
    this.currentPage = page;
  }

  get totalPages(): number {
    return Math.ceil(this.filteredUsers.length / this.pageSize);
  }


  changePageSize(page:string){
    this.pageSize=Number(page)
  }



  editItem(item:any){
    var dialogRef = this.dialog.open(EditUserComponent,{data:item,width:'600px',height:'650px'})

    dialogRef.afterClosed().subscribe(result => {

      var userObj:any=localStorage.getItem("users")
      
      this.users=JSON.parse(userObj);
      this.filteredUsers=this.users;
    });
  }
  deleteItem(item:any){
    this.users=this.users.filter((o:any)=>o.id != item.id)
    localStorage.removeItem("users")
    localStorage.setItem("users",JSON.stringify(this.users))

    this.filteredUsers=this.users
  }
}
