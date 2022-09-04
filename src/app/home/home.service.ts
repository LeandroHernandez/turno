import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import firebase from 'firebase/compat/app';
import 'firebase/compat/storage';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { ICede } from 'src/interfaces/cede.interface';

firebase.initializeApp(environment.firebaseConfig);

@Injectable({
  providedIn: 'root',
})
export class HomeService {
  private _storareRef = firebase.app().storage().ref();
  private _URI: string = 'http://localhost:3000/api/v1';

  constructor(private readonly _http: HttpClient) {}

  async uploadFile(name: string, imgBase64: any) {
    try {
      let response = await this._storareRef
        .child('users/' + name)
        .putString(imgBase64, 'data_url');
      return await response.ref.getDownloadURL();
    } catch (err) {
      console.log({ error: err });
      return null;
    }
  }

  assignPhotosToCede(
    cedeId: string | undefined,
    photoDTOs: any
  ): Observable<any> {
    return this._http.put(
      `${this._URI}/cede/assignPhotosToCede/cedeId/${cedeId}`,
      photoDTOs
    );
  }

  getCedes(): Observable<ICede[]> {
    return this._http.get<ICede[]>(`${this._URI}/cede`);
  }
}
