import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class APIService {
  constructor(private http: HttpClient) {}

  call(business: string, method: string, params: any[]): Observable<any> {
    params = params.map((value) => JSON.stringify(value));
    let formData = new FormData();
    formData.append('Method', method);
    formData.append('Params', JSON.stringify(params));
    return this.http.post(
      environment.apiUrl.replace('{business}', business),
      formData
    );
  }
}
