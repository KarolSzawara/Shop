import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TokenServiceService } from 'src/app/Login-Side/loginservices/token-service.service';
import { CartItem } from '../../../Main-Side/interfaces/cartitem';
import { Cartlist } from '../../interfeces/cartlist';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  url:string="http://localhost:8080/cart"
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
  addToCart(cartItem:CartItem):Observable<any>{
    
     return this.httpClient.post<any>(`${this.url}/add`,cartItem,{headers:this.headers})
   
  }
  getCart(){
    return this.httpClient.get<Cartlist[]>(this.url,{headers:this.headers})
  }
  buyCart(){
    
    return this.httpClient.post<any>(`${this.url}/buy`,"buy",{headers:this.headers})
  }
  deleteCart(item:Cartlist){
    return this.httpClient.post<any>(`${this.url}/delete`,item,{headers:this.headers})
  }
  editAmount(item:Cartlist){
    return this.httpClient.post<any>(`${this.url}/edit`,item,{headers:this.headers})
  }
  addToCartWithToken(cartItem:CartItem,zet:string){
    let head=new HttpHeaders({'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
    "Accept": "application/json",
    "Authorization":zet
    });
    return this.httpClient.post<any>(`${this.url}/add`,cartItem,{headers:head})
   
  }
}

