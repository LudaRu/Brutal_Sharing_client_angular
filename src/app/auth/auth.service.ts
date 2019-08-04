import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';

const endpoint = 'http://127.0.0.1:3000';
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json'
  })
};

@Injectable({providedIn: 'root'})
export class AuthService {

  public token = null;
  public tmpSessionId = null;

  constructor(private http: HttpClient) {}

  private extractData(res: Response) {
    return res || { };
  }

  vkLogin(): Observable<any> {
    return this.http.post('/auth/vk', this.tmpSessionId).pipe(map(this.extractData));
  }
  vkLogin2(): Observable<any> {
    return this.http.post('/auth/vk', {tmpSessionId: this.tmpSessionId}).pipe(map(this.extractData));
  }

  initSession() {
    this.http.get('/auth/initSession')
      .subscribe(res => {
        this.tmpSessionId = res;
    });
  }

}
