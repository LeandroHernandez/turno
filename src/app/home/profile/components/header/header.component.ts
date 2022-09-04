import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NzModalService } from 'ng-zorro-antd/modal';
import { InfoUserComponent } from '../info-user/info-user.component';

@Component({
  selector: 'app-header',
  template: `
    <!-- <p>
      header works!
    </p> -->

    <div
      nz-row
      nzAlign="middle"
      nzJustify="space-between"
      [nzGutter]="[50, 10]"
      class="nz-row-container"
    >
      <div
        nz-col
        nzSpan="4"
        nzXXl="4"
        nzXl="4"
        nzLg="4"
        nzMd="6"
        nzSm="8"
        nzXs="24"
        class="nz-col-container col-log-out"
      >
        <!-- (click)="logOut()" -->
        <button
          nz-button
          nzType="primary"
          nzDanger
          nz-popover
          nzPopoverTitle="¿Seguro?"
          [(nzPopoverVisible)]="visible"
          (nzPopoverVisibleChange)="change($event)"
          nzPopoverTrigger="click"
          [nzPopoverContent]="contentTemplate"
          nzSize="large"
        >
          Cerrar secion
        </button>
        <ng-template #contentTemplate>
          <!-- <a (click)="logOut()">Cerrar</a>
          <a (click)="visible = false">Mejor no</a> -->
          <div nz-row [nzGutter]="[10, 10]">
            <div nz-col nzSpan="12">
              <button nz-button nzType="primary" nzDanger (click)="logOut()">
                Cerrar
              </button>
            </div>
            <div nz-col nzSpan="12">
              <button nz-button nzType="primary" (click)="visible = false">
                Mejor no
              </button>
            </div>
          </div>
        </ng-template>
      </div>
      <div
        nz-col
        nzSpan="4"
        nzXXl="4"
        nzXl="4"
        nzLg="5"
        nzMd="7"
        nzSm="9"
        nzXs="24"
        class="nz-col-container col-go-map"
      >
        <button nz-button [routerLink]="['/map']" nzSize="large">
          <div
            nz-row
            nzAlign="middle"
            nzJustify="space-between"
            [nzGutter]="[0, 0]"
            class="nz-row-go-map-button"
          >
            <div
              nz-col
              nzSpan="10"
              nzXXl="10"
              nzXl="10"
              nzLg="10"
              nzMd="12"
              nzSm="10"
              nzXs="9"
              class="nz-col-go-map-button col-img"
            >
              <img
                src="https://firebasestorage.googleapis.com/v0/b/audio-visual-turno.appspot.com/o/utils%2FNew_York_map.jpg?alt=media&token=e12ad908-f1c8-47e2-ba16-f719f220c3ea"
                alt="map"
              />
            </div>
            <div
              nz-col
              nzSpan="14"
              nzXXl="14"
              nzXl="14"
              nzLg="14"
              nzMd="12"
              nzSm="14"
              nzXs="15"
              class="nz-col-go-map-button col-button-text"
            >
              <span
                nz-icon
                nzType="arrow-left"
                style="color: black; margin-left: 5px"
              ></span>
              <!-- <span nz-icon nzType="arrow-left" nzTheme="outline"></span> -->
              <!-- <span style="color: black"> Ir a mapa </span> -->
              Ir a mapa
            </div>
          </div>
        </button>
      </div>
      <div
        nz-col
        nzSpan="4"
        nzXXl="4"
        nzXl="4"
        nzLg="5"
        nzMd="7"
        nzSm="9"
        nzXs="24"
        class="nz-col-container col-show-info-user"
      >
        <button
          nz-button
          nzType="primary"
          nzSize="large"
          (click)="showInfoUser()"
        >
          Mi información
        </button>
      </div>
    </div>
  `,
  styles: [
    `
      * {
        margin: 0;
        color: #ffffffff;
      }

      /* .col-go-map .col-img img { */
      .col-img,
      .col-img img {
        height: 100%;
        width: 100%;
      }

      /* .col-go-map {
        height: 30px;
      } */

      .nz-row-go-map-button {
        height: 100%;
      }

      .col-log-out button {
        padding: 2px 5px;
      }

      button {
        width: 100%;
        padding: 0;
        background: #ffffffff;
        color: #1a334d;
      }

      .col-go-map button {
        padding-right: 5px;
      }

      button,
      h6 {
        font-family: sans-serif;
      }

      .col-go-map button:hover {
        scale: 1.2;
        color: #1a334d;
      }

      .col-button-text {
        color: black;
      }
    `,
  ],
})
export class HeaderComponent implements OnInit {
  constructor(private _router: Router, private modalService: NzModalService) {}

  ngOnInit(): void {}

  logOut(): void {
    localStorage.removeItem('accessToken');
    this._router.navigate(['/auth']);
  }

  visible: boolean = false;

  clickMe(): void {
    this.visible = false;
  }

  change(value: boolean): void {
    console.log(value);
  }

  showInfoUser(): void {
    this.modalService.create({
      nzTitle: 'Mi información',
      nzContent: InfoUserComponent,
      nzFooter: null,
    });
  }
}
