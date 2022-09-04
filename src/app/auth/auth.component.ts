import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-auth',
  template: `
    <!-- <p>
      auth works!
    </p> -->
    <router-outlet></router-outlet>
  `,
  styles: [],
})
export class AuthComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
