import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { GlobalAuthService } from "./global-auth.service";
import { BehaviorSubject } from "rxjs/internal/BehaviorSubject";
import { MyUser } from "../interfaces/MyUser";
import { environment } from "@env/environment";

@Injectable({
  providedIn: 'root'
})
export class CurrentUserStoreService {
  private currentUser = {};
  private userWatcherSource: BehaviorSubject<any> = new BehaviorSubject(this.info);
  public userWatcher = this.userWatcherSource.asObservable();
  private apiUrl: string = environment.apiUrl;
  constructor(
    private http: HttpClient,
    private globalAuth: GlobalAuthService
  ) { }

  public get info() {
    return this.currentUser;
  }
  public set info(user) {
    this.currentUser = {...user};
    this.userWatcherSource.next({...user});
  }

  initCurrentUser() {
    const id = this.globalAuth.userId;
    this.http.get<MyUser>(`${this.apiUrl}/public/users/get-info/${id}`).subscribe((user: MyUser) => {
      if(user._id) {
        this.info = user;
      }
    });
  }
}
