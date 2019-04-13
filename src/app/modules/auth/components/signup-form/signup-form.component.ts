import {Component, OnInit} from '@angular/core';
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { passwordEqual } from '@helpers/validators';
import { Router } from "@angular/router";
import { AuthService } from "../../services/auth.service";
import { DefaultServerAnswer } from "../../interfaces/DefaultServerAnswer";

@Component({
  selector: 'app-signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.css']
})
export class SignupFormComponent implements OnInit {
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
      repeatPassword: new FormControl('', Validators.required),
    }, { validators: passwordEqual,  updateOn: 'submit' });
  }

  onSubmit() {
    this.authService.signUp({...this.signUpForm.value}).subscribe((res: DefaultServerAnswer) => {
      if (!res.error) {
        this.router.navigate(['auth/login']);
      }
    });
  }

  signIn() {
    this.router.navigate(['auth/login']);
  }
}
