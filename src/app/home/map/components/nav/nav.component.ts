import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { IAccessToken } from 'src/interfaces/access-token.interface';
import { Feature } from 'src/interfaces/IMapBox.interface';
import { MapService } from '../../map.service';

@Component({
  selector: 'app-nav',
  template: `
    <!-- <p>nav works!</p> -->
    <div nz-row nzJustify="space-between" [nzGutter]="[0, 30]">
      <div
        nz-col
        nzSpan="18"
        nzXXl="18"
        nzXl="18"
        nzLg="17"
        nzMd="17"
        nzSm="17"
        nzXs="24"
      >
        <form nz-form [formGroup]="selectForm">
          <nz-form-item>
            <nz-form-control>
              <!-- <nz-input-group nzSearch [nzAddOnAfter]="suffixIconButton"> -->
              <nz-input-group nzSearch>
                <input
                  placeholder="input here"
                  nz-input
                  [(ngModel)]="inputValue"
                  (input)="geocodingSearch()"
                  [nzAutocomplete]="auto"
                  formControlName="select"
                />
              </nz-input-group>
              <!-- <ng-template #suffixIconButton>
                <button nz-button nzType="primary" type="submit" nzSearch>
                  <i nz-icon nzType="search" nzTheme="outline"></i>
                </button>
              </ng-template> -->
              <!-- (input)="onInput($event)" -->
              <!-- <nz-autocomplete
                [nzDataSource]="options"
                nzBackfill
                #auto
              ></nz-autocomplete> -->
              <nz-autocomplete #auto>
                <div *ngFor="let feature of features">
                  <!-- *ngFor="let feature of features" -->
                  <nz-auto-option
                    class="global-search-item"
                    [nzValue]="feature.place_name"
                    (click)="selectedPlace(feature)"
                  >
                    {{ feature.place_name }}
                  </nz-auto-option>
                </div>
              </nz-autocomplete>

              <!-- <b>{{ selectForm | json }}</b> -->
            </nz-form-control>
          </nz-form-item>
        </form>
      </div>
      <div
        nz-col
        nzSpan="4"
        nzXXl="4"
        nzXl="4"
        nzLg="5"
        nzMd="5"
        nzSm="5"
        nzXs="24"
        class="nz-col-profile"
      >
        <button
          *ngIf="accessToken"
          nz-button
          nzSize="large"
          [routerLink]="['/profile']"
        >
          Perfil
        </button>
        <button
          *ngIf="!accessToken"
          nz-button
          nzSize="large"
          [routerLink]="['/auth']"
        >
          Ingresar o registrarme
        </button>
      </div>
    </div>
  `,
  styles: [
    `
      [nz-row] {
        width: 100%;
      }
      /* nz-select {
        width: 300px;
        width: 100%;
        min-width: 200px;
        height: 100%;
        margin-left: 18px;
      } */
      form,
      nz-form-item,
      nz-form-control,
      nz-input-group,
      input {
        width: 100%;
        /* height: 100%; */
      }
      [nz-button] {
        width: 100%;
        color: #ffffffff;
        background: #1a334d;
        border-radius: 5px;
        font-family: sans-serif;
      }

      nz-input-group [nz-button] {
        width: 40px;
        /* border-top-right-radius: 10%;
        border-bottom-right-radius: 10%; */
      }
    `,
  ],
})
export class NavComponent implements OnInit {
  public inputValue?: string;
  // public options: string[] = [];
  public features: Array<Feature> = [];

  public selectForm = this._fb.group({
    select: ['', [Validators.required]],
  });

  public accessToken: IAccessToken | null = null;

  @Output() placeCenter = new EventEmitter<Array<number>>();

  constructor(private _mapSvc: MapService, private _fb: FormBuilder) {
    const accessToken = localStorage.getItem('accessToken');
    console.log(accessToken);
    if (accessToken) {
      const accessTokenParse: IAccessToken = JSON.parse(accessToken);
      this.accessToken = accessTokenParse;
    }
  }

  ngOnInit(): void {
    // const value = (event.target as HTMLInputElement).value;
    // const value = 'hola';
    // this.options = value ? [value, value + value, value + value + value] : [];
  }

  geocodingSearch() {
    if (this.selectForm.valid && this.selectForm.controls.select.value) {
      // console.log({ selectForm: this.selectForm.value });
      this._mapSvc
        .geocodingSearch(this.selectForm.controls.select.value)
        .subscribe(
          (places) => {
            // console.log({ places: places });
            this.features = places.features;
          },
          (err) => console.log({ error: err })
        );
    } else {
      this.features = [];
    }
  }

  selectedPlace(place: Feature) {
    this.inputValue = place.place_name;
    this.placeCenter.emit(place.center);
  }
}
