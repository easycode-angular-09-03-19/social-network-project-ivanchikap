import { Component, OnInit } from '@angular/core';
import { AuthService } from "../../services/auth.service";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { GlobalAuthService}  from "../../../../common-services/global-auth.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
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
    if (this.globalAuth.isLogin) {
      this.router.navigate(['/']);
    }
  }

  onSubmit() {
    this.authService.login({ ...this.loginForm.value }).subscribe((res) => {
      this.router.navigate(['/']);
    });
  }

}
