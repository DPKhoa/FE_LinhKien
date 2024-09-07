import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
// import { environment } from 'src/environments/environment';

@Injectable({
    providedIn: 'root'
})
export class CatogoryService {
    constructor(private httpClient: HttpClient) { }

    private apiUrl = 'https://0683-2001-ee0-50f5-5be0-59b-c29-ef46-3352.ngrok-free.app/categories/getAllCategory';

    getAllCategory() {
        return this.httpClient.get(this.apiUrl, {}) 
    }
}