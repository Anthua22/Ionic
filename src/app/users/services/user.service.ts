import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { UserResponse } from 'src/app/auth/responses/user-response';
import { PhotoResponse } from '../interfaces/photoresponse';
import { User } from '../interfaces/user.interface';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  getProfile(id?: number): Observable<User> {
    if(id){
      return this.http.get<UserResponse>(`users/${id}`).pipe(map(x=>x.user));
    }
    return this.http.get<UserResponse>('users/me').pipe(map(x=>x.user));
  }

  updateProfile(name: string, email: string): Observable<void> {
    return this.http.put<void>('users/me', { name, email }).pipe(map(x => {
      return;
    }));
  }

  updateAvatar(avatar: string): Observable<string> {
    return this.http.put<PhotoResponse>('users/me/photo', { photo: avatar })
    .pipe(
      map(x => {
      return x.photo;
    }));
  }

  updatePassword(password: string): Observable<void> {
    return this.http.put('users/me/password', { password }).pipe(map(
      x => {
        return;
      }
    ));
  }

}
