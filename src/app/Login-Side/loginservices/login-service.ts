import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RegisterProfile } from 'src/app/Login-Side/interface/register-profile';
import { LoginUser } from 'src/app/Login-Side/interface/login-user';
import { ReturnToken } from 'src/app/Login-Side/interface/return-token';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  url:string="http://localhost:8080"
  private headers=new HttpHeaders({'Content-Type': 'application/json',
  'Access-Control-Allow-Origin': '*',
  "Accept": "application/json"});
constructor(private http:HttpClient) { }

registerUser(user:RegisterProfile){
  return this.http.post(`${this.url}/registr`,user)
}
verficationUser(token:string){
  return this.http.post(`${this.url}/verfication`,token,{responseType:'text'})
}
loginUser(user:LoginUser){
  return this.http.post<ReturnToken>(`${this.url}/login`,user)
}

}

