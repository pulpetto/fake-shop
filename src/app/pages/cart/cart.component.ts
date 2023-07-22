import { Component, OnInit } from '@angular/core';
import { ShopService } from 'src/app/services/shop.service';

@Component({
    selector: 'app-cart',
    templateUrl: './cart.component.html',
    styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
    // dont hold multiple product objects in array but hold one object and change quantity
    productsCart: any[] = [];

    // eslint-disable-next-line no-unused-vars
    constructor(private shopService: ShopService) {}

    ngOnInit() {
        this.productsCart = this.shopService.getCart();
        console.log(this.productsCart);
    }

    increaseQuantity(productCart: any) {
        productCart.quantity++;
    }

    decreaseQuantity(productCart: any) {
        // if (productCart.quantity === 0) return;
        productCart.quantity--;
        if (productCart.quantity === 0) {
            const index = this.productsCart.indexOf(productCart);
            if (index !== -1) {
                this.productsCart.splice(index, 1);
            }

            console.log(this.productsCart.length);
        }
    }
}
