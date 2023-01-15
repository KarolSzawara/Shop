import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ProductInfo } from '../interface/ProductInfo';

@Injectable({
  providedIn: 'root'
})
export class AdminServiceService {

  url:string="http://localhost:8080/admin"
  private headers=new HttpHeaders({'Content-Type': 'application/json',
  'Access-Control-Allow-Origin': '*',
  "Accept": "application/json"});
  constructor(private http:HttpClient) { }
  getAllProduct(){
      return this.http.get<any>(`${this.url}`,{headers:this.headers});
  }
  add(product:ProductInfo){
    return this.http.post<any>(`${this.url}/add`,product,{headers:this.headers})
  }
  edit(product:ProductInfo){
    return this.http.post<any>(`${this.url}/edit`,product,{headers:this.headers})
  }
}

