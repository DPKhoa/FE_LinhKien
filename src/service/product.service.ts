import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { env } from '../environments/env';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor(private httpClient: HttpClient) {}
  mainApi = env.main_api;

  private apiUrl = `${this.mainApi}products/getAllProducts`;

  getAllProducts() {
    return this.httpClient.get(this.apiUrl, {});
  }
}
