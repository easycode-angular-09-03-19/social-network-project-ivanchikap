import { Component, OnInit } from '@angular/core';
import { AuthService } from "../../services/auth.service";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { GlobalAuthService}  from "../../../../common-services/global-auth.service";
import { LoginServerAnswer } from "../../interfaces/LoginServerAnswer";

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {
  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(8)])
  });

  constructor(
    private authService: AuthService,
    private router: Router,
    private globalAuth: GlobalAuthService
  ) { }

  ngOnInit() {
  }

  onSubmit() {
    this.authService.login({ ...this.loginForm.value }).subscribe((res: LoginServerAnswer) => {
      if (!res.error) {
        this.router.navigate(['/']);
      }
    });
  }

}
