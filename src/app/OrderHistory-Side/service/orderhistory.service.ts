import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TokenServiceService } from 'src/app/Login-Side/loginservices/token-service.service';

@Injectable({
  providedIn: 'root'
})
export class OrderhistoryService {

  url:string="http://localhost:8080/history"
  private headers!:HttpHeaders

  constructor(private httpClient:HttpClient,private tokenService:TokenServiceService) { 
    let token =this.tokenService.getJwtToken()
    if(token!=null){
      this.headers=new HttpHeaders({'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      "Accept": "application/json",
      "Authorization":token
      });
    }
  }
  getOrderHistory(){
    return this.httpClient.get<any>(this.url,{headers:this.headers})
  }
}
