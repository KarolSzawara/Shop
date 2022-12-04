import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, tap } from 'rxjs';
import { LoginUser } from 'src/app/Login-Side/interface/login-user';
import { LoginService } from 'src/app/Login-Side/loginservices/login-service';

@Injectable({
  providedIn: 'root'
})
export class TokenServiceService {
  private _isLoggedin$=new BehaviorSubject<boolean>(false)
  isLoggedin$=this._isLoggedin$.asObservable();
  
  constructor(private router:Router,private loginService:LoginService) {
    const token =localStorage.getItem('jwttoken')
    this._isLoggedin$.next(!!token)
    
    
  }

  login(user:LoginUser){
    return this.loginService.loginUser(user).pipe(
      tap((response:any)=>{
        this._isLoggedin$.next(true)
        localStorage.clear();
        localStorage.setItem('refreshToken',response.refreshToken)
        localStorage.setItem('jwttoken',response.jwttoken)
        console.log(response);
        console.log(localStorage.getItem('jwttoken'));
        console.log(localStorage.getItem('refreshToken'));
        
        
      })
    )
  }
  getJwtToken(){
    return localStorage.getItem("jwttoken")
  }
  logout(){
    localStorage.clear();
    this._isLoggedin$.next(false)
  }

}
