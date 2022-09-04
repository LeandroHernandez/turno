import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
// import { ICede } from 'src/interfaces/cede.interface';

import { Geolocation } from '@capacitor/geolocation';
import { Map } from 'mapbox-gl';
import { MapService } from './map.service';
import { ICede } from 'src/interfaces/cede.interface';
import * as mapboxgl from 'mapbox-gl';
// import * as mapboxgl from 'mapbox-gl';
// import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css'],
})
export class MapComponent implements OnInit {
  // private _subscriptions: Subscription = new Subscription();
  private _map!: Map;

  // public companies: GeoJSON.FeatureCollection;
  // public cedes: ICede[] = [];
  public cedes!: GeoJSON.FeatureCollection;
  public mapBox = environment.mapBox;
  public loading: boolean = true;
  constructor(
    private readonly _MapSvc: MapService,
    private _cd: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    // (mapboxgl as any).accessToken = environment.mapboxToken;
    // var map = new mapboxgl.Map({
    //   container: 'map',
    //   style: 'mapbox://styles/mapbox/streets-v11',
    // });
    // this.getCedes();
  }

  // getProperties(feature: GeoJSON.Feature<GeoJSON.Point>): PublicCompany {
  getProperties(feature: GeoJSON.Feature<GeoJSON.Point>): ICede {
    return { ...feature.properties } as ICede;
  }

  // viewCompany(feature: GeoJSON.Feature<GeoJSON.Point>): void {
  //   const company = feature.properties;
  //   const contact = JSON.parse(company.contact);
  //   const catalogues = JSON.parse(company.catalogues);
  //   this._previewCompanySvc.open({
  //     ...company,
  //     contact,
  //     catalogues,
  //   } as PublicCompany);
  // }

  // async selectCluster(feature: GeoJSON.Feature<GeoJSON.Point>): Promise<void> {
  //   const [lng, lat] = feature?.geometry?.coordinates;
  //   const clusterId = feature.properties.cluster_id;

  //   const expansionZoom = await this._source?.getClusterExpansionZoom(
  //     clusterId
  //   );
  //   this._map.easeTo({
  //     zoom: expansionZoom + 2,
  //     center: [lng, lat],
  //     duration: 1000,
  //   });
  // }

  loadMap(event: Map): void {
    this._map = event;
    this._map.resize();
    this._map.setLayoutProperty('country-label', 'text-field', [
      'get',
      `name_es`,
    ]);
    const geolocate = new mapboxgl.GeolocateControl();
    const nav = new mapboxgl.NavigationControl();
    this._map.addControl(geolocate);
    this._map.addControl(nav);
  }

  async getLocation(): Promise<void> {
    this.loading = true;

    Geolocation.getCurrentPosition()
      .then(({ coords }: any) => {
        const { latitude, longitude } = coords;
        console.log({ Geolocation_coords: coords });
        // this._map.easeTo({
        //   center: [coords.longitude, coords.latitude],
        //   zoom: 90,
        //   // duration: 1,
        //   animate: true,

        // });
        this._map.flyTo({
          // center: [-76.60965978429182, 7.8795115845708885],
          center: [coords.longitude, coords.latitude],
          zoom: 18,
          // essential: true,
          // speed: 2,
        });
        this._cd.markForCheck();
      })
      .finally(() => {
        this.loading = false;
        this._cd.markForCheck();
      });
  }

  getCedes(): void {
    this._MapSvc.getCedes().subscribe(
      (data) => {
        console.log({ data: data });
        this.loading = false;
        this.cedes = data;
      },
      (err) => console.log({ error: err })
    );
  }

  changeMapCenter(center: Array<number>) {
    this._map.flyTo({
      center: [center[0], center[1]],
      zoom: 14,
    });
  }

  // geojson = {
  //   type: 'FeatureCollection',
  //   features: [
  //     {
  //       type: 'Feature',
  //       properties: {
  //         message: 'Foo',
  //         iconSize: [60, 60],
  //       },
  //       geometry: {
  //         type: 'Point',
  //         coordinates: [-66.324462890625, -16.024695711685304],
  //       },
  //     },
  //     {
  //       type: 'Feature',
  //       properties: {
  //         message: 'Bar',
  //         iconSize: [50, 50],
  //       },
  //       geometry: {
  //         type: 'Point',
  //         coordinates: [-61.2158203125, -15.97189158092897],
  //       },
  //     },
  //     {
  //       type: 'Feature',
  //       properties: {
  //         message: 'Baz',
  //         iconSize: [40, 40],
  //       },
  //       geometry: {
  //         type: 'Point',
  //         coordinates: [-63.29223632812499, -18.28151823530889],
  //       },
  //     },
  //   ],
  // };

  // alert(message: string) {
  //   alert(message);
  // }
}
