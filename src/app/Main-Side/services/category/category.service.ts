import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Category } from '../../interfaces/category';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  url:string="http://localhost:8080/categories"
  private headers=new HttpHeaders({'Content-Type': 'application/json',
  'Access-Control-Allow-Origin': '*',
  "Accept": "application/json"});
constructor(private http:HttpClient) { }
getCategories():Observable<Category[]>{
  return this.http.get<Category[]>(`${this.url}`,{headers:this.headers})
}
add(category:Category){
  return this.http.post<any>(`${this.url}/add`,category,{headers:this.headers})
}
edit(category:Category){
  return this.http.post<any>(`${this.url}/edit`,category,{headers:this.headers})
}
}
