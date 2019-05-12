import { Injectable } from '@angular/core';
import { HttpClient} from "@angular/common/http";
import { Observable } from "rxjs/internal/Observable";
import  { environment } from "@env/environment";

@Injectable({
  providedIn: 'root'
})
export class NavbarService {
  apiUrl: string = environment.apiUrl;

  constructor(
    private http: HttpClient,
  ) { }

  getNotifications(): Observable<Notification> {
    return this.http.get<Notification>(`${this.apiUrl}/public/users/notification`);
  }
}
