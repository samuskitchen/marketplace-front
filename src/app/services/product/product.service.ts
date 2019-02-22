import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment as ENV} from '../../../environments/environment'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json'
    })
  };


  constructor(private http: HttpClient) { }

  public getAllProducts(): Observable<any> {
    return this.http.get(`${ENV.baseUrl}/findall/product-score`, this.httpOptions);
  }

  public addCardProduct(productId): Observable<any> {
    console.log([{id: productId, quantity: 1}]);
    return this.http.post(`${ENV.baseUrl}/add/cart`, [{id: productId, quantity: 1}], this.httpOptions);
  }
}
