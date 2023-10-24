import { Component, OnInit } from '@angular/core';
import { User } from '../models/user.model';
import { AuthService } from 'projects/auth/src/public-api';
import { Router } from '@angular/router';

@Component({
  selector: 'lib-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  constructor(private authService: AuthService, private router: Router) {
    this.user = this.authService.getAuth();
  }

  //LoginUser
  user!: User | null;
  ngOnInit(): void {}

  logOut() {
    this.authService.logOut();
  }
}
