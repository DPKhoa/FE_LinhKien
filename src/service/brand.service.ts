import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { env } from '../environments/env';

@Injectable({
    providedIn: 'root'
})
export class BrandService {
    constructor(private httpClient: HttpClient) { }
    mainApi = env.main_api;

    private apiUrl = `${this.mainApi}brand/getAllBrand`;

    getAllBrand() {
        return this.httpClient.get(this.apiUrl, {}) 
    }

    getBrandBy(id: number) {
        return this.httpClient.post(this.apiUrl, {
            id
        })
    }
}