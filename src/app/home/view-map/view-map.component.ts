import { Component, OnInit, ViewChild } from '@angular/core';
import { Map } from 'mapbox-gl';
import { GeoJSONSourceComponent } from 'ngx-mapbox-gl';
import { Subscription } from 'rxjs';
// import * as mapboxgl from 'mapbox-gl';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-view-map',
  template: `
    <!-- <p>view-map works!</p> -->

    <div nz-row class="row" nzJustify="space-between" nzAlign="middle">
      <div
        nz-col
        [nzSpan]="17"
        nzXl="17"
        nzMd="14"
        nzSm="24"
        nzXs="24"
        class="col map"
        id="map_col"
      >
        <!-- <h6>Mapa</h6> -->
        <!-- <app-map></app-map> -->
        <!-- <nz-spin nzTip="Cargando..." [nzSpinning]="loading" nzSize="large"> -->
        <!-- <div id="map"></div> -->
        <mgl-map
          [zoom]="[mapBox.zoom]"
          [style]="mapBox.style"
          [center]="[mapBox.center[0], mapBox.center[1]]"
          [minZoom]="mapBox.minZoom"
          class="mgl-map"
          [interactive]="false"
          routerLink="/map"
        >
        </mgl-map>
        <!-- </nz-spin> -->
        <!-- <img src="../photos/New_York_map.jpg" alt="NY" /> -->
      </div>
      <div
        nz-col
        [nzSpan]="7"
        nzXl="7"
        nzMd="10"
        nzSm="24"
        nzXs="24"
        class="col auth"
      >
        <!-- <app-auth></app-auth> -->
      </div>
    </div>
  `,
  styles: [
    `
      .row {
        height: 100%;
        width: 100%;
      }
      .col {
        height: 100%;
        width: 100%;
      }
      #map {
        height: 100%;
        width: 100%;
      }
      .map {
        display: relative;
      }
      /* .auth {
        background: red;
      } */

      .mgl-map {
        height: 100%;
        width: 100%;
      }

      .mgl-map:hover {
        cursor: pointer;
      }
    `,
  ],
})
export class ViewMapComponent implements OnInit {
  private _subscriptions: Subscription = new Subscription();
  // private _map!: Map;
  public _map!: Map;
  // private _map: Map = new Map();

  public companies!: GeoJSON.FeatureCollection;
  public mapBox = environment.mapBox;
  public loading: boolean = true;

  @ViewChild(GeoJSONSourceComponent, { static: false })
  private _source!: GeoJSONSourceComponent;

  constructor() {} // private _homeSvc: HomeService // private _cd: ChangeDetectorRef, // private _previewCompanySvc: PreviewCompanyService,

  // ngOnInit(): void {
  //   (mapboxgl as any).accessToken = environment.mapBox.apiKey;
  //   var map = new mapboxgl.Map({
  //     container: 'map',
  //     style: 'mapbox://styles/mapbox/streets-v11',
  //     interactive: false,
  //   });
  // }

  ngOnInit(): void {
    // this._subscriptions.add(
    //   this._homeSvc
    //     .loadCompanies()
    //     .pipe(
    //       finalize(() => {
    //         this.loading = false;
    //         this._cd.markForCheck();
    //       })
    //     )
    //     .subscribe((companies) => {
    //       this.companies = companies;
    //       this._cd.markForCheck();
    //     })
    // );
  }

  loadMap(event: Map): void {
    this._map = event;
    this._map.resize();
    // this._map.setLayoutProperty('country-label', 'text-field', [
    //   'get',
    //   `name_es`,
    // ]);
    this.loading = false;
  }

  // getProperties(feature: GeoJSON.Feature<GeoJSON.Point>): PublicCompany {
  //   return { ...feature.properties } as PublicCompany;
  // }

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

  // async getLocation(): Promise<void> {
  //   this.loading = true;

  //   Geolocation.getCurrentPosition()
  //     .then(({ coords }) => {
  //       const { latitude, longitude } = coords;
  //       this._map.easeTo({ center: [longitude, latitude] });
  //       this._cd.markForCheck();
  //     })
  //     .finally(() => {
  //       this.loading = false;
  //       this._cd.markForCheck();
  //     });
  // }

  // ngOnDestroy(): void {
  //   this._subscriptions.unsubscribe();
  // }
}
