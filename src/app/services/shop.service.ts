import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root',
})
export class ShopService {
    productsCart: any[] = [];

    addToCart(product: any) {
        // make the price end with ,00 (maybe use pipe)
        this.productsCart.push(product);
    }

    getCart() {
        return this.productsCart;
    }

    // API //
    private baseUrl = 'https://fakestoreapi.com/';

    // eslint-disable-next-line no-unused-vars
    constructor(private http: HttpClient) {}

    getAllProducts() {
        return this.http.get(`${this.baseUrl}products`);
    }
}
