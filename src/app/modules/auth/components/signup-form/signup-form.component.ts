import { Component, OnInit} from '@angular/core';
import { FormControl, FormGroup, FormGroupDirective, NgForm, Validators} from "@angular/forms";
import { passwordEqual, passwordEqualForInput } from '@helpers/validators';
import { Router } from "@angular/router";
import { AuthService } from "../../services/auth.service";
import { DefaultServerAnswer } from "../../interfaces/DefaultServerAnswer";
import {ErrorStateMatcher} from "@angular/material";

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (isSubmitted));
  }
}

@Component({
  selector: 'app-signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.css']
})
export class SignupFormComponent implements OnInit {
  matcher = new MyErrorStateMatcher();
  signUpForm: FormGroup;
  constructor(
    private router: Router,
    private authService: AuthService
  ) { }

  ngOnInit() {
    this.signUpForm = new FormGroup({
      first_name: new FormControl('', Validators.required),
      last_name: new FormControl('', Validators.required),
      nickname: new FormControl('', Validators.required),
      date_of_birth_day: new FormControl('', [Validators.required, Validators.max(31), Validators.min(0)]),
      date_of_birth_month: new FormControl('', [Validators.required, Validators.max(12), Validators.min(1)]),
      date_of_birth_year: new FormControl('', Validators.required),
      country: new FormControl('', Validators.required),
      city: new FormControl('', Validators.required),
      gender_orientation: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email]),
      phone: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
      repeatPassword: new FormControl('', [Validators.required, passwordEqualForInput]),
    });
  }

  onSubmit() {
    if (this.signUpForm.invalid) {
      console.log('Форма не валидна, отправлятся на сервер не будет');
      return;
    }
    this.authService.signUp({...this.signUpForm.value}).subscribe((res: DefaultServerAnswer) => {
      if (!res.error) {
        this.router.navigate(['auth/login']);
      }
    }, (err: DefaultServerAnswer) => {
      console.log(err);
    });
  }

  signIn() {
    this.router.navigate(['auth/login']);
  }
}
