import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from "@angular/common/http";
import { environment } from "@env/environment";
import { Observable } from "rxjs/internal/Observable";
import { HomePageInfo } from "../interfaces/HomePageInfo";
import { MyChallenges } from "../interfaces/MyChallenges";

@Injectable()
export class HomeService {
  apiUrl: string = environment.apiUrl;

  constructor(
    private http: HttpClient
  ) { }

  getHomePage(): Observable<HomePageInfo> {
    return this.http.get<HomePageInfo>(`${this.apiUrl}/public/home`);
  }

  getActiveChallenges(): Observable<MyChallenges> {
    let params = new HttpParams();
    params = params.append('isActive', '0');
    params = params.append('isClosed', '1');
    params = params.append('limit', '6');
    const httpOptions = {
      params
    };
    return this.http.get<MyChallenges>(`${this.apiUrl}/public/challenges/list`, httpOptions);
  }
}
