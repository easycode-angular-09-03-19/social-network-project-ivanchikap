import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { environment } from "@env/environment";
import { map } from "rxjs/operators";
import { Observable } from "rxjs";
import { LoginServerAnswer } from "../interfaces/LoginServerAnswer";
import { DefaultServerAnswer } from "../../../common/interfaces/DefaultServerAnswer";
import { MySignup } from "../interfaces/MySignup";

@Injectable()
export class AuthService {
  private apiUrl: string = environment.apiUrl;
  constructor(
    private http: HttpClient
  ) {}

  login(cred): Observable<LoginServerAnswer> {
    return this.http.post<LoginServerAnswer>(`${this.apiUrl}/public/auth/login`, cred).pipe(
      map((res: LoginServerAnswer): LoginServerAnswer => {
        if (!res.error) {
          localStorage.setItem('sn_app_token', res.token);
        }
        return res;
      })
    );
  }

  resetPassword(email: string): Observable<DefaultServerAnswer> {
    return this.http.post<DefaultServerAnswer>(`${this.apiUrl}/public/auth/reset-password`, email);
  }

  signUp(body: MySignup): Observable<DefaultServerAnswer> {
    const signupBody = {
      email: body.email,
      password: body.password,
      nickname: body.nickname,
      first_name: body.first_name,
      last_name: body.last_name,
      phone: body.phone,
      gender_orientation: body.gender_orientation,
      city: body.city,
      country: body.country,
      date_of_birth_day: body.date_of_birth_day,
      date_of_birth_month: body.date_of_birth_month,
      date_of_birth_year: body.date_of_birth_year
    };
    return this.http.post<DefaultServerAnswer>(`${this.apiUrl}/public/auth/signup`, signupBody);
  }
}

