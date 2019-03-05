import { Component, OnInit } from '@angular/core';
import { ActivationEnd, ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { UserService } from '../../services/user.service';
import { Observable } from 'rxjs';
import { UserObject } from '../../model/user';
@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss']
})
export class UserDetailComponent implements OnInit {

  constructor(private route: ActivatedRoute, private userService: UserService) { }

  userId: number;
  user$: Observable<UserObject>;

  ngOnInit(): void {
    this.user$ = this.route.paramMap.pipe(
      switchMap((params: ParamMap) => {
        this.userId = +params.get('id');
        return this.userService.getUserDetail(this.userId);
      })
    );
  }

}
