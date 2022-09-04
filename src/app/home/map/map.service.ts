import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { IMapBoxAPIGeocodingResponse } from 'src/interfaces/IMapBox.interface';
import { environment } from 'src/environments/environment';
import { ICede } from 'src/interfaces/cede.interface';

@Injectable({
  providedIn: 'root',
})
export class MapService {
  private _URL: string = 'http://localhost:3000/api/v1';
  private _apiBase: string = `${environment.api}/api/v1`;

  constructor(private readonly _http: HttpClient) {}

  // getCedes(): Observable<ICede[]> {
  //   return this._http.get<ICede[]>(`${this._URL}/cede`);
  // }

  getCedes(): Observable<GeoJSON.FeatureCollection> {
    return this._http.get<ICede[]>(`${this._URL}/cede`).pipe(
      map((cedes) => {
        const features = cedes.map((cede) => {
          // const { lat, lng } = cede.contact.location;
          const lat = cede.ubication.lat;
          const lng = cede.ubication.long;

          return {
            type: 'Feature',
            properties: cede,
            geometry: { type: 'Point', coordinates: [-76.6297183, 7.8843198] },
            // geometry: { type: 'Point', coordinates: [lng, lat] },
          } as GeoJSON.Feature<GeoJSON.Point>;
        });

        return {
          type: 'FeatureCollection',
          features,
        } as GeoJSON.FeatureCollection;
      })
    );
  }

  geocodingSearch(place: string): Observable<IMapBoxAPIGeocodingResponse> {
    // return this._http.get(
    //   `https://api.mapbox.com/geocoding/v5/mapbox.places/${place}.json?proximity=ip&types=place%2Cpostcode%2Caddress&access_token=${environment.mapBox.apiKey}`
    // );
    return this._http.get<IMapBoxAPIGeocodingResponse>(
      `https://api.mapbox.com/geocoding/v5/mapbox.places/${place}.json?limit=10&proximity=ip&types=place%2Cpostcode%2Caddress%2Ccountry&access_token=${environment.mapBox.apiKey}`
    );
  }
}
