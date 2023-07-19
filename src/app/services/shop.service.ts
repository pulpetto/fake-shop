import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root',
})
export class ShopService {
    private baseUrl = 'https://fakestoreapi.com/';

    // eslint-disable-next-line no-unused-vars
    constructor(private http: HttpClient) {}

    getAllProducts() {
        return this.http.get(`${this.baseUrl}products`);
    }
}
