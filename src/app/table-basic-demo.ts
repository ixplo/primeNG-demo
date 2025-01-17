import { Component, OnInit } from '@angular/core';
import { ImportsModule } from './imports';
import { Product } from '@domain/product';
import { ProductService } from '@service/productservice';
@Component({
    selector: 'table-basic-demo',
    templateUrl: 'table-basic-demo.html',
    standalone: true,
    imports: [ImportsModule],
    providers: [ProductService]
})

export class TableBasicDemo implements OnInit {
    products!: Product[];

    constructor(private productService: ProductService) {}

    ngOnInit() {
        this.productService.getProductsMini().then((data) => {
            this.products = data;
        });
    }
}