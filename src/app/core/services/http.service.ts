import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { environment } from '../../../environments/environment';

@Injectable()
export class HttpService {

  headers = new HttpHeaders().set('content-type', 'application/json');

  data: Observable<any>;
  newdata: Observable<any>;

  constructor(private http: HttpClient) {

  }
  post(url, data) {
    const headers = new HttpHeaders().set('content-type', 'application/json');
    headers.append('Access-Control-Allow-Origin', '*');
    return this.http.post(url, data, { headers });
  }
  get(url) {
    const headers = new HttpHeaders().set('content-type', 'application/json');
     headers.append('Access-Control-Allow-Origin', '*');
    return this.http.get(url, { headers });
  }

  put(url, data) {

    const headers = new HttpHeaders().set('content-type', 'application/json');
    headers.append('Access-Control-Allow-Origin', '*');
    return this.http.put(url, data, { headers });

  }
  delete(url, data) {
    const headers = new HttpHeaders().set('content-type', 'application/json');
    headers.append('Access-Control-Allow-Origin', '*');
    return this.http.delete(url + data, { headers });

  }
}



