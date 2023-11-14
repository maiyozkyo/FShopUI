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
      sessionStorage.setItem('lgUser', JSON.stringify(user));
    }
  }

  getAuth(): User | null {
    let sUser = sessionStorage.getItem('lgUser');
    if (sUser && sUser != '') {
      let lgUser: User = JSON.parse(sUser);
      return lgUser;
    }
    return null;
  }

  isLogged(): boolean {
    return !!sessionStorage.getItem('lgUser');
  }

  logOut() {
    sessionStorage.removeItem('lgUser');
    this.router.navigate(['auth']);
  }
}
