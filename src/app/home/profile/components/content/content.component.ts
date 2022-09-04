import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-content',
  template: `
    <!-- <p>content works!</p> -->
    <div
      nz-row
      nzAlign="middle"
      [nzGutter]="[10, 10]"
      nzJustify="space-around"
      class="nz-row-container-content"
    >
      <div
        nz-col
        nzSpan="6"
        class="nz-col-container-content col-establishments"
      >
        <nz-card class="nz-card">
          <div
            nz-row
            nzAlign="middle"
            [nzGutter]="[0, 0]"
            nzJustify="center"
            class="nz-row-card"
          >
            <div nz-col class="nz-col-card">
              <h6>Mis negocios</h6>
            </div>
          </div>
        </nz-card>
      </div>
      <div
        nz-col
        nzSpan="6"
        class="nz-col-container-content col-purchases-appointment"
      >
        <nz-card class="nz-card">
          <div
            nz-row
            nzAlign="middle"
            [nzGutter]="[0, 0]"
            nzJustify="center"
            class="nz-row-card"
          >
            <div nz-col class="nz-col-card">
              <h6>Mis compras y citas</h6>
            </div>
          </div>
        </nz-card>
      </div>
    </div>
  `,
  styles: [
    `
      [nz-row] {
        height: 100%;
      }
      .nz-card {
        height: 100px;
        width: 100%;
      }
      .nz-card:hover {
        scale: 1.2;
      }
    `,
  ],
})
export class ContentComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
