import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
  
export class ProductServiceService {
  private URL: string = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita';
  constructor(private http: HttpClient) {}

  fetchProducts() {
    return this.http.get(this.URL);
  }
}
