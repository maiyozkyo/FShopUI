import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root',
})
export class APIService {
  constructor(private http: HttpClient) {}

  call(business: string, method: string, params: any[]) {
    let formData = new FormData();
    formData.append('Method', method);
    formData.append('Params', JSON.stringify(params));
    return this.http.post(environment.apiUrl, formData);
  }
}