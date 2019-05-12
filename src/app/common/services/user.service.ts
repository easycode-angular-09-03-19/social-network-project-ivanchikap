import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs/internal/Observable";
import { environment } from "@env/environment";
import { MyUser } from "../interfaces/MyUser";
import { GlobalAuthService } from "./global-auth.service";
import { CurrentUserStoreService } from "./current-user-store.service";
import { map } from "rxjs/operators";
import { UploadPhotosAnswer } from "../interfaces/UploadPhotosAnswer";
import { FollowersFollowingsAnswer } from "../interfaces/FollowersFollowingsAnswer";
import { ImagesAnswer } from "../interfaces/ImagesAnswer";
import {DefaultServerAnswer} from "../interfaces/DefaultServerAnswer";

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
  getImages(id: string): Observable<ImagesAnswer> {
    return this.http.get<ImagesAnswer>(`${this.apiUrl}/public/users/my-images/${id}`)
  }
  uploadPhotos(files: any[]): Observable<UploadPhotosAnswer> {
    const formData = new FormData();
    files.forEach((file) => formData.append('userPhotos', file));
    const id = this.globalAuth.userId;
    return this.http.post<UploadPhotosAnswer>(`${this.apiUrl}/public/users/upload-photos/${id}`, formData)
  }
  getFavourites(id: string): Observable<ImagesAnswer> {
    return this.http.get<ImagesAnswer>(`${this.apiUrl}/public/users/my-favorites/${id}`, {
      params: {
        part: '1',
        limit: '20'
      }
    });
  }
  getFollowers(id: string): Observable<FollowersFollowingsAnswer> {
    return this.http.get<FollowersFollowingsAnswer>(`${this.apiUrl}/public/users/my-followers-followings/${id}`, {
      params: {
        part: '1',
        limit: '15',
        path: 'followings'
      }
    });
  }
  getFollowings(id: string): Observable<FollowersFollowingsAnswer> {
    return this.http.get<FollowersFollowingsAnswer>(`${this.apiUrl}/public/users/my-followers-followings/${id}`, {
      params: {
        part: '1',
        limit: '6',
        path: 'followers'
      }
    });
  }
  followUnFollow(id: string): Observable<DefaultServerAnswer> {
    return this.http.put<DefaultServerAnswer>(`${this.apiUrl}/public/users/following/${id}`, {});
  }
}
