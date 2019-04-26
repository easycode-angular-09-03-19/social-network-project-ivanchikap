import { Injectable } from '@angular/core';
import { HttpClient} from "@angular/common/http";
import { environment } from "../../environments/environment";
import { Observable } from "rxjs/internal/Observable";

@Injectable({
  providedIn: 'root'
})
export class NavbarService {
  apiUrl: string = environment.apiUrl;

  constructor(
    private http: HttpClient,
  ) { }

  getNotifications(header): Observable<Notification> {
    const options = {
      headers: {
        'x-access-token': header
      }
    };
    return this.http.get<Notification>(`${this.apiUrl}/public/users/notification`, options);
  }
}
