import { Component, OnInit } from '@angular/core';
import { ShopService } from 'src/app/services/shop.service';

@Component({
    selector: 'app-cart',
    templateUrl: './cart.component.html',
    styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
    productsCart: object[] = [];

    // eslint-disable-next-line no-unused-vars
    constructor(private shopService: ShopService) {}

    ngOnInit() {
        this.productsCart = this.shopService.getCart();
    }
}
