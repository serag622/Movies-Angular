import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { environment } from "../../../../environments/environment.prod";
import { ApiRoutes } from "../../Models/app/ApiRoutes";
import { BehaviorSubject } from "rxjs/internal/BehaviorSubject";
import { AppRoutes } from "../../Models/app/AppRoutes";
import { Router } from '@angular/router';
import {LoginData , RegisterData} from '../../Models/user/auth.model'
import { tap } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private apiUrl = environment.apiUrl;
  isLoggedIn = new BehaviorSubject<boolean>(this.isTokenAvailable());


  constructor(private http: HttpClient, private router: Router) { }

  UserRegister(data : RegisterData){
  return   this.http.post(this.apiUrl+ApiRoutes.register,data).pipe(tap((response: any) => {
      if(response.status === 'success'){
        localStorage.setItem('token', response.authorisation.token);
        this.setIsLoggedIn(true);
        this.router.navigate([AppRoutes.Movies.full]);
      }
    }))
  }

  UserLogin(data : LoginData){
    return this.http.post(this.apiUrl+ApiRoutes.login,data).pipe(tap((response: any) => {
      if(response.status === 'success'){
        localStorage.setItem('token', response.authorisation.token);
        this.setIsLoggedIn(true);
        this.router.navigate([AppRoutes.Movies.full]);
      }
    }))
  }

  async logout(): Promise<any> {
    // Clear JWT from localstorage
    await localStorage.removeItem('token');
    // Update logged in status
    this.setIsLoggedIn(false);
    // Navigate user back to login page
    await this.router.navigate([AppRoutes.Authentication.login.full]);
  }


  private isTokenAvailable(): boolean {
    return !!localStorage.getItem("token");
  }

  setIsLoggedIn(isLoggedIn: boolean): void {
    this.isLoggedIn.next(isLoggedIn);
  }

  getIsLoggedIn(): BehaviorSubject<boolean> {
    return this.isLoggedIn;
  }

}
