import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RegisterProfile } from './registerprofile';

@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {
  url:string="http://localhost:8080/registr"
  private headers=new HttpHeaders({'Content-Type': 'application/json',
  'Access-Control-Allow-Origin': '*',
  "Accept": "application/json"});
constructor(private http:HttpClient) { }

registerUser(user:RegisterProfile){
  return this.http.post(`${this.url}`,user)
}
}

