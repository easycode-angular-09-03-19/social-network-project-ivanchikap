import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs/internal/Observable";
import { environment } from "@env/environment";
import { MyUser } from "../interfaces/MyUser";
import { GlobalAuthService } from "./global-auth.service";
import { CurrentUserStoreService } from "./current-user-store.service";
import { map } from "rxjs/operators";
import {ActivatedRoute, Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiUrl: string = environment.apiUrl;
  constructor(
    private http: HttpClient,
    private globalAuth: GlobalAuthService,
    private currentUser: CurrentUserStoreService
  ) { }

  getUserById(id: string): Observable<MyUser> {
    return this.http.get<MyUser>(`${this.apiUrl}/public/users/get-info/${id}`).pipe(
      map((user: MyUser) => {
        if (user._id === this.globalAuth.userId) {
          this.currentUser.info = user;
        }
        return user;
      })
    );
  }
  uploadCover(file: File): Observable<any> {
    const formData = new FormData();
    formData.append('coverImg', file);
    const id = this.globalAuth.userId;
    return this.http.post(`${this.apiUrl}/public/users/upload-cover/${id}`, formData)
  }
  getImages(id: string) {
    return this.http.get(`${this.apiUrl}/public/users/my-images/${id}`)
  }
}
