import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private httpClient:HttpClient) { }

  allProduct():Observable<any>{
    return this.httpClient.get(`products`)
  }
  getProductById(id:any):Observable<any>{
    return this.httpClient.get(`products/${id}`)
  }

}
