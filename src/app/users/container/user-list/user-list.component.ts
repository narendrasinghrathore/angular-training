import { Component, OnInit, ViewChild, OnDestroy } from '@angular/core';
import { MatPaginator, MatTableDataSource } from '@angular/material';
import { UserObject } from '../../model/user';
import { UserService } from '../../services/user.service';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit, OnDestroy {

  ob1: Subscription;
  constructor(private userService: UserService, private router: Router) { }

  displayedColumns: string[] = ['id', 'name', 'email', 'phone'];
  dataSource = new MatTableDataSource<UserObject>();

  selectedRow: UserObject = null;

  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngOnInit() {
    this.dataSource.paginator = this.paginator;

    this.ob1 = this.userService.userList$.subscribe(data => {
      this.dataSource.data = data;
    });

    const ob2 = this.userService.getUsersList().subscribe();

    this.ob1.add(ob2);

  }

  selectedRowEvent(row: UserObject) {
    // if (this.selectedRow !== null && this.selectedRow.id === row.id ) {
    //   this.selectedRow = null;
    //   return;
    // }
    this.selectedRow = row;
    this.router.navigate(['users/detail', row.id]);
  }

  ngOnDestroy(): void {
    this.ob1.unsubscribe();
  }

}
