import { Component, OnInit } from '@angular/core';
import {User} from "../modules/user/user";
import {UserServiceService} from "../service/user-service.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.css']
})
export class UserInfoComponent implements OnInit {
users: User[]=[] ;
  user: User;
  constructor(private userService: UserServiceService, private route: ActivatedRoute,
              private router: Router) {
    this.user = new User();
  }

  ngOnInit(): any
  {
    this.userService.findAll().subscribe(data => {
      this.users = data;
    });
  }

}
