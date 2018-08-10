import { Injectable } from '@angular/core';
import { HttpService } from '../../../core/services/http.service';
import { environment } from '../../../../environments/environment.prod';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';

@Injectable()
export class LoginService {

  constructor(private http: HttpService) { }
  login(data) {
    const headers = new HttpHeaders().set('content-type', 'application/json');
    headers.append('Access-Control-Allow-Origin', '*');
    return this.http.post(environment.apiUrl + 'login', data);
  }
  forgotPassword(data) {
    return this.http.post(environment.apiUrl + 'forgot_password', data);
  }
  resetPassword (data) {
    return this.http.get(environment.apiUrl + 'reset/' + data);
  }
}
