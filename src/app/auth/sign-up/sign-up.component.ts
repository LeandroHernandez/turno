import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ITypeDocument } from 'src/interfaces/type-document.interface';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css'],
})
export class SignUpComponent implements OnInit {
  public documentTypes!: Array<ITypeDocument>;
  // validateForm!: UntypedFormGroup;
  // validateForm!: FormBuilder;
  signUpForm = this.fb.group({
    documentType: [null, [Validators.required]],
    documentNumber: [
      '',
      [Validators.required, Validators.minLength(6), Validators.maxLength(12)],
    ],
    names: [
      null,
      [Validators.required, Validators.minLength(3), Validators.maxLength(20)],
    ],
    surnames: [
      null,
      [Validators.required, Validators.minLength(3), Validators.maxLength(20)],
    ],
    username: [
      null,
      [Validators.required, Validators.minLength(3), Validators.maxLength(10)],
    ],
    email: [
      null,
      [Validators.required, Validators.minLength(3), Validators.email],
    ],
    password: [
      null,
      [Validators.required, Validators.minLength(3), Validators.maxLength(20)],
    ],
    remember: [true],
  });

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
    this.getDocumentTypes();
  }
  submitForm(): void {
    console.log('submit', this.signUpForm.value);
    if (this.signUpForm.valid) {
      this.signUpForm.value.documentNumber = JSON.stringify(
        this.signUpForm.value.documentNumber
      );
      this._authSvc.signUp(this.signUpForm.value).subscribe(
        (userDB) => {
          console.log({ userDB: userDB });
          this._router.navigate(['/auth/sign-in']);
        },
        (err) => console.log({ error: err })
      );
    }
  }
  getDocumentTypes(): void {
    this._authSvc.getDocumentTypes().subscribe(
      (documentTypes) => {
        console.log({ documentTypes: documentTypes });
        this.documentTypes = documentTypes;
      },
      (err) => console.log({ error: err })
    );
  }
}
