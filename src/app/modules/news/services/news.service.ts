import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { environment } from "@env/environment";
import { Observable } from "rxjs/internal/Observable";
import { NewsAnswer } from "../../../common/interfaces/NewsAnswer";

@Injectable({
  providedIn: 'root'
})
export class NewsService {
  apiUrl: string = environment.apiUrl;
  constructor(
    private http: HttpClient
  ) { }

  getNews(page = 1): Observable<NewsAnswer> {
    return this.http.get<NewsAnswer>(`${this.apiUrl}/public/news`, {
      params: {
        page: page.toString(),
        count: '15'
      }
    });
  }
}
