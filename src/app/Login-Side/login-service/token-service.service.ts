import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, tap } from 'rxjs';
import { LoginUser } from '../interface/login-user';
import { LoginServiceService } from './login-service.service';

@Injectable({
  providedIn: 'root'
})
export class TokenServiceService {
  private _isLoggedin$=new BehaviorSubject<boolean>(false)
  isLoggedin$=this._isLoggedin$.asObservable();
  
  constructor(private router:Router,private loginService:LoginServiceService) {
    const token =localStorage.getItem('auth')
    this._isLoggedin$.next(!!token)
  }
  login(user:LoginUser){
    this.loginService.loginUser(user).pipe(
      tap((response:any)=>{
        this._isLoggedin$.next(true)
        localStorage.setItem('auth',response.access_token)
      })
    )
  }

}
