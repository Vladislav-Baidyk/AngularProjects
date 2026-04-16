import { HttpClient } from '@angular/common/http';
import {  inject, Injectable } from '@angular/core';
import { UserI } from './../../Interfaces/user/user-i';
import { catchError, map, of } from 'rxjs';


@Injectable({
  providedIn: 'root',
})
export class UsersService {
  private http = inject(HttpClient)
  getUsers(start:number,end:number){
    return this.http.get<UserI[]>('https://jsonplaceholder.typicode.com/users').pipe(
      map(users=> users.slice(start,end)),
      catchError(error => {
        console.log("Error occurs",error)
        return of([]);
      })
    )
  }
}
