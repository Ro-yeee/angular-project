import { Injectable } from '@angular/core';
import { IProducts } from '../products/product-list/products.tyes';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, catchError, filter, tap, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor(private http: HttpClient) {}

  getProducts(): Observable<IProducts[]> {
    return this.http.get<IProducts[]>('api/products/products.json').pipe(
      tap((data) => console.log(data)),
      catchError(this.handleError)
    );
  }

  private handleError(err: HttpErrorResponse) {
    return throwError(() => err);
  }
}
