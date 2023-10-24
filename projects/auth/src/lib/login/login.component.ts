import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormControl,
  FormGroup,
  ValidationErrors,
  ValidatorFn,
  Validators,
} from '@angular/forms';
import { APIService } from 'projects/share/src/lib/api.service';
import { User } from 'projects/share/src/lib/models/user.model';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'lib-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  constructor(
    private api: APIService,
    private authService: AuthService,
    private router: Router
  ) {
    if (authService.isLogged()) {
      this.router.navigate(['']);
    }
  }

  loginFG!: FormGroup;
  registerFG!: FormGroup;
  ngOnInit(): void {
    console.log('run login');
    this.loginFG = new FormGroup({
      phone: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
    });

    this.registerFG = new FormGroup(
      {
        userName: new FormControl('', Validators.required),
        nickName: new FormControl(''),
        phone: new FormControl('', [Validators.required]),
        password: new FormControl('', Validators.required),
        confirmPassword: new FormControl('', [Validators.required]),
      },
      {
        validators: this.passwordValidator,
      }
    );
  }

  passwordValidator(control: AbstractControl): ValidationErrors | null {
    const password = control.get('password');
    const confirmPassword = control.get('confirmPassword');

    return password?.value === confirmPassword?.value
      ? null
      : { notmatched: true };
  }

  loginSubmit() {
    console.log('lgfg', this.loginFG.value);
    if (this.loginFG.valid) {
      this.api
        .call('User', 'LoginAsync', [
          this.loginFG.value['phone'],
          this.loginFG.value['password'],
        ])
        .subscribe((res: User) => {
          this.authService.setAuth(res);
          this.router.navigate(['']);
        });
    }
  }

  registerSubmit() {
    console.log('rgtfg', this.registerFG);
    if (this.registerFG.valid) {
      let user = new User(this.registerFG.value);

      this.api
        .call('User', 'AddUpdateUserAsync', [this.registerFG.value])
        .subscribe((res) => {
          console.log('tao user ne', res);
        });
    }
  }
}
