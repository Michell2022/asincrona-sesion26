import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  formLogin!: FormGroup;

  constructor(private formBuilder: FormBuilder, private router: Router) { }

  // VALIDANDO LOS CAMPOS CON UN MINIMO DE 3 CARÁCTERES.
  ngOnInit(): void {
    this.formLogin = this.formBuilder.group({
      username: ['',
        [
          Validators.required,
          Validators.minLength(3)
        ]
      ],
      password: ['',
        [
          Validators.required,
          Validators.minLength(3)
        ]
      ]
    })
  }
  get username() {
    return this.formLogin.get('username')!;
  }
  get password() {
    return this.formLogin.get('password')!;
  }

  public validate(): void {
    if (this.formLogin.invalid) {
      for (const control of Object.keys(this.formLogin.controls)) {
        this.formLogin.controls[control].markAsTouched();
      }
      return;
    }
  }



  validar() {

  }
}
