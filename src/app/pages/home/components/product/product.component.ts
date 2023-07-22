import { Component, Input } from '@angular/core';
import { ShopService } from 'src/app/services/shop.service';

@Component({
    selector: 'app-product',
    templateUrl: './product.component.html',
    styleUrls: ['./product.component.css'],
})
export class ProductComponent {
    @Input() allProducts: any[] = [];

    // eslint-disable-next-line no-unused-vars
    constructor(private shopService: ShopService) {}

    onProductAdded(product: any) {
        if (this.shopService.productsCart.includes(product)) {
            product.quantity++;
        } else {
            product.quantity = 1;
            this.shopService.productsCart.push(product);
        }
    }
}
