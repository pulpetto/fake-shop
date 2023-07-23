import { Component, OnInit } from '@angular/core';
import { ShopService } from 'src/app/services/shop.service';

@Component({
    selector: 'app-cart',
    templateUrl: './cart.component.html',
    styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
    productsCart: any[] = [];
    totalPrice: number = 0;

    // eslint-disable-next-line no-unused-vars
    constructor(private shopService: ShopService) {}

    ngOnInit() {
        this.productsCart = this.shopService.getCart();

        this.updateTotalPrice();
    }

    increaseQuantity(productCart: any) {
        productCart.quantity++;

        this.updateTotalPrice();
    }

    decreaseQuantity(productCart: any) {
        productCart.quantity--;
        if (productCart.quantity === 0) {
            const index = this.productsCart.indexOf(productCart);
            if (index !== -1) {
                this.productsCart.splice(index, 1);
            }
        }

        this.updateTotalPrice();
    }

    onItemDelete(productCart: any) {
        const index = this.productsCart.indexOf(productCart);
        this.productsCart.splice(index, 1);

        this.updateTotalPrice();
    }

    updateTotalPrice() {
        this.totalPrice = this.productsCart.reduce(
            (total, product) => total + product.price * product.quantity,
            0
        );
    }
}
