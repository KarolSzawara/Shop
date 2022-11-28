import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductDetails } from 'src/app/Product-side/product-side/interfacesProductSide/productDetails';

@Injectable({
  providedIn: 'root'
})
export class DetailsService {

  url:string="http://localhost:8080/details"
  private headers=new HttpHeaders({'Content-Type': 'application/json',
  'Access-Control-Allow-Origin': '*',
  "Accept": "application/json"});

  constructor(private http:HttpClient) { }


  getProduct(productId:number):Observable<ProductDetails>{
    return this.http.get<ProductDetails>(`${this.url}/${productId}`,{headers:this.headers})
  }
}
