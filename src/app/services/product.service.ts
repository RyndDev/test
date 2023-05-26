import { Injectable } from '@angular/core';
import { IProduct } from '../interfaces/product'; 
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient ) { }
  getProducts():Observable<IProduct[]>{
    return this.http.get<IProduct[]>('http://localhost:3000/products')
  }
  getProduct(id:any):Observable<IProduct>{
    return this.http.get<IProduct>('http://localhost:3000/products/'+id)
  }
  deleteProduct(id:number):Observable<IProduct>{
    return this.http.delete<IProduct>('http://localhost:3000/products/'+id)
  }
  addProduct(product:IProduct):Observable<IProduct>{
    return this.http.post<IProduct>('http://localhost:3000/products/',product)
  }
  updateProduct(product:IProduct):Observable<IProduct>{
    return this.http.put<IProduct>(`http://localhost:3000/products/${product.id}`,product)
  }
}
