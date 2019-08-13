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

  constructor(private http: HttpClient) {}

  private extractData(res: Response) {
    return res || { };
  }

  vkLogin(): Observable<any> {
    const body = {tmpSessionId: localStorage.getItem('tmpSessionId')};
    // return this.http.post('/auth/vk', body).pipe(map(this.extractData));
    return this.http.post('/auth/vk', body).pipe(map(this.extractData));
  }

  initSession() {
      if (!localStorage.getItem('tmpSessionId')) { // �������� � ���� ��������� ������ ��� �����������
          console.log('if')
          this.http.get('/auth/session')
              .subscribe((res: any) => {
                  localStorage.setItem('tmpSessionId', res);
          });
      } else { // ����� ��� ����, ����� ������� � ���� - ���� �� ��� ��� ���������� �����
          console.log('else')
          this.http.get('/auth/session/' + localStorage.getItem('tmpSessionId'))
              .subscribe(res => {
                  localStorage.removeItem('tmpSessionId');
              });
      }

  }

}
