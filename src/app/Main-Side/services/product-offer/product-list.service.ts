import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../../interfaces/product';
import { ProductView } from '../../interfaces/productView';

@Injectable({
  providedIn: 'root'
})
export class ProductListService {
  url:string="http://localhost:8080/product"
  private headers=new HttpHeaders({'Content-Type': 'application/json',
  'Access-Control-Allow-Origin': '*',
  "Accept": "application/json"});
  constructor(private http:HttpClient) { }

  getCategories(categoryId:number):Observable<ProductView[]>{
    return this.http.get<ProductView[]>(`${this.url}/${categoryId}`,{headers:this.headers})
  }
  search(query:string){
    return this.http.get<ProductView[]>(`${this.url}/search`,{params:{query},headers:this.headers})
  }
}
