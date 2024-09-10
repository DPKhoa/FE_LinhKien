import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { env } from '../environments/env';
// import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class CatogoryService {
  constructor(private httpClient: HttpClient) {}
  mainApi = env.main_api;
  private apiUrl = `${this.mainApi}categories/getAllCategory`;
  private createApiUrl = `${this.mainApi}categories/createCategory`;

  getAllCategory() {
    return this.httpClient.get(this.apiUrl, {});
  }
  createCategory(data: any) {
    return this.httpClient.post(this.createApiUrl, data);
  }
}
