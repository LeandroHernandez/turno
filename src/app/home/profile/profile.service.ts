import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IUser } from 'src/interfaces/user.interface';

@Injectable({
  providedIn: 'root',
})
export class ProfileService {
  private _apiBase: string = `${environment.api}/api/v1`;

  constructor(private _http: HttpClient) {}

  getUser(userId: string): Observable<IUser> {
    return this._http.get<IUser>(`${this._apiBase}/user/${userId}`);
  }
}
