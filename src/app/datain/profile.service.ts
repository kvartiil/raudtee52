import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ProfileService {

  constructor(private http: HttpClient) { }

  getUser (userId) {
    return this.http.get(`https://jsonplaceholder.typicode.com/users/${userId}`);
    //return this.http.get('http://185.174.163.1:8080/eestat/1/elujoud/12345678');
  }

}