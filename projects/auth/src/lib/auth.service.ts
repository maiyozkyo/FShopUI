import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'projects/share/src/lib/models/user.model';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private router: Router) {}

  setAuth(user: User) {
    if (user?.token) {
      localStorage.setItem('lgUser', JSON.stringify(user));
    }
  }

  getAuth(): User | null {
    let sUser = localStorage.getItem('lgUser');
    if (sUser && sUser != '') {
      let lgUser: User = JSON.parse(sUser);
      return lgUser;
    }
    return null;
  }

  isLogged(): boolean {
    return !!localStorage.getItem('lgUser');
  }

  logOut() {
    localStorage.removeItem('lgUser');
    this.router.navigate(['auth']);
  }
}
