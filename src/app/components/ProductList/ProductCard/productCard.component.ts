import { Component, Input, OnInit } from "@angular/core";
import { IProduct } from "../product";
import { ProductService } from "../product.service";

@Component({
    selector: 'app-product-card',
    templateUrl: './productCard.component.html',
    styleUrls: ['./productCard.component.css']
})
export class ProductCardComponent implements OnInit, IProduct {

    constructor(private productService: ProductService) { }

    @Input() code: string = '';
    title: string = '';
    price: number = 0;
    imgUrl: string = '';
    description: string = '';
    rating: number = 0;

    ngOnInit(): void {
        const productByCode = this.productService.getByCode(this.code);
        if (productByCode) {
            this.title = productByCode.title;
            this.price = productByCode.price;
            this.imgUrl = productByCode.imgUrl;
            this.description = productByCode.description;
            this.rating = productByCode.rating;
        }
    }

    addToCart(): void {

    }

    addToWishlist(): void { }
}