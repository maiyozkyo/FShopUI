import { Component, OnInit } from '@angular/core';
import { User } from '../models/user.model';

@Component({
  selector: 'lib-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  constructor() {}

  //LoginUser
  user!: User;
  ngOnInit(): void {
    // this.user = new User();
    // this.user.userName = 'Test';
  }
}
