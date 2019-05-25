import { Injectable } from '@angular/core';
import { Observable } from "rxjs/internal/Observable";
import { environment } from "@env/environment";
import { HttpClient } from "@angular/common/http";
import { WinnersAnswer } from "../../../common/interfaces/WinnersAnswer";

@Injectable({
  providedIn: 'root'
})
export class WinnersService {
  apiUrl: string = environment.apiUrl;
  constructor(
    private http: HttpClient
  ) { }

  getWinners(page = 1): Observable<WinnersAnswer> {
    return this.http.get<WinnersAnswer>(`${this.apiUrl}/public/winners`, {
      params: {
        page: page.toString(),
        count: '15'
      }
    });
  }
}
