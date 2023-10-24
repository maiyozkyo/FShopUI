import { Injectable } from '@angular/core';
import { User } from 'projects/share/src/lib/models/user.model';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor() {}

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
}
