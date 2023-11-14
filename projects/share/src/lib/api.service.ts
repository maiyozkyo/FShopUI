import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { User } from './models/user.model';
import { AuthService } from 'projects/auth/src/public-api';

@Injectable({
  providedIn: 'root',
})
export class APIService {
  constructor(private http: HttpClient, private authService: AuthService) {
    this.user = this.authService.getAuth();
  }

  //cur login user
  user: User | null = null;

  call(business: string, method: string, params: any[]): Observable<any> {
    params = params.map((value) => JSON.stringify(value));
    let formData = new FormData();
    formData.append('Method', method);
    formData.append('Params', JSON.stringify(params));
    let url = environment.apiUrl.replace('{business}', business);

    //header
    let headers = new HttpHeaders();
    //set token
    if (this.user?.token) {
      headers = headers.append('Authorization', `Bearer ${this.user.token}`);
    }
    if (method == 'LoginAsync') {
      url += '/' + method;
    }
    return this.http.post(url, formData, {
      headers,
      withCredentials: true,
    });
  }
}
