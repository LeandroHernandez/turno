import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IAccessToken } from 'src/interfaces/access-token.interface';
import { ITypeDocument } from 'src/interfaces/type-document.interface';
import { IUser } from 'src/interfaces/user.interface';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private _apiBase: string = environment.api;
  private _api: string = `${this._apiBase}/api/v1`;
  private _apiAuth: string = `${this._api}/auth`;

  constructor(private _http: HttpClient) {}

  getDocumentTypes(): Observable<Array<ITypeDocument>> {
    return this._http.get<Array<ITypeDocument>>(`${this._api}/type-document`);
  }

  // registerUser(user: any): Observable<IUser> {
  //   return this._http.post<IUser>(`${this._api}/user`, user);
  // }

  signIn(credentials: any): Observable<IUser> {
    return this._http.post<IUser>(`${this._apiAuth}/signIn`, credentials);
  }

  signUp(user: any): Observable<IAccessToken> {
    return this._http.post<IAccessToken>(`${this._apiAuth}/signUp`, user);
  }
}
