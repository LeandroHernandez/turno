import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  UntypedFormBuilder,
  UntypedFormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-log-in',
  template: `
    <!-- <p>log-in works!</p> -->
    <div
      nz-row
      nzJustify="center"
      nzAlign="middle"
      class="nz-row-log-in-container"
    >
      <div nz-col class="nz-col-log-in-container">
        <nz-card nzTitle="Bienvenido" [nzExtra]="signUp" class="nz-card">
          <form
            nz-form
            [nzLayout]="'inline'"
            [formGroup]="signInForm"
            (ngSubmit)="submitForm()"
          >
            <div nz-row nzJustify="center" class="nz-row-content-form">
              <div nz-col class="nz-col-content-form col-username-input">
                <nz-form-item>
                  <nz-form-control
                    nzErrorTip="!Porfavor ingresa tu nombre de usuario¡"
                  >
                    <nz-input-group nzPrefixIcon="user">
                      <input
                        formControlName="username"
                        nz-input
                        placeholder="Nombre de Usuario"
                      />
                    </nz-input-group>
                  </nz-form-control>
                </nz-form-item>
              </div>
              <div nz-col class="nz-col-content-form col-password-input">
                <nz-form-item>
                  <nz-form-control
                    nzErrorTip="!Porfavor ingresa tu contraseña¡"
                  >
                    <nz-input-group nzPrefixIcon="lock">
                      <input
                        formControlName="password"
                        nz-input
                        type="password"
                        placeholder="Contraseña"
                      />
                    </nz-input-group>
                  </nz-form-control>
                </nz-form-item>
              </div>
            </div>
            <nz-form-item>
              <nz-form-control>
                <button
                  nz-button
                  nzType="primary"
                  [disabled]="!signInForm.valid"
                >
                  Ingresar
                </button>
              </nz-form-control>
            </nz-form-item>
          </form>
        </nz-card>
        <ng-template #signUp>
          <a [routerLink]="['/auth/sign-up']">Registrarse</a>
        </ng-template>
      </div>
    </div>
  `,
  styles: [
    `
      .nz-row-log-in-container {
        height: 100%;
        width: 100%;
      }

      .nz-card {
        width: 270px;
        min-width: 270px;
        border-radius: 7px;
        /* border-top-right-radius: 10px; */
        box-shadow: 7px 7px #1a334d;
      }

      .nz-col-content-form {
        margin-bottom: 10px;
      }
    `,
  ],
})
export class LogInComponent implements OnInit {
  // signInForm!: UntypedFormGroup;
  // signInForm!: FormBuilder;
  signInForm = this.fb.group({
    username: [null, [Validators.required]],
    password: [null, [Validators.required]],
    remember: [true],
  });

  submitForm(): void {
    console.log('submit', this.signInForm.value);
    if (this.signInForm.valid) {
      this._authSvc.signIn(this.signInForm.value).subscribe(
        (accessToken) => {
          // console.log({ accessToken: accessToken });
          console.log(accessToken);
          localStorage.setItem('accessToken', JSON.stringify(accessToken));
          this._router.navigate(['/map']);
        },
        (err) => console.log({ error: err })
      );
    }
  }

  // constructor(private fb: UntypedFormBuilder) {}
  constructor(
    private fb: FormBuilder,
    private _authSvc: AuthService,
    private _router: Router
  ) {}

  ngOnInit(): void {
    // this.validateForm = this.fb.group({
    //   userName: [null, [Validators.required]],
    //   password: [null, [Validators.required]],
    //   remember: [true],
    // });
  }
}
