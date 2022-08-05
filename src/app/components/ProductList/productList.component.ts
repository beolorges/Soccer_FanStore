import { Component, OnInit } from "@angular/core";
import { IProduct } from "./product";
import { ProductService } from "./product.service";

@Component({
    selector: 'app-product-list',
    templateUrl: './productList.component.html',
    styleUrls: ['./productList.component.css']
})
export class ProductListComponent implements OnInit {
    filteredProducts: IProduct[] = [];
    _products: IProduct[] = [];
    _filter: string = '';

    constructor(private productService: ProductService) { }

    ngOnInit() {
        this._products = this.productService.getAll()
        this.filteredProducts = this.productService.getAll()
    }

    handleSearch() {
        this.filteredProducts = this._products.filter((product) => {
            console.log(this._filter)
            return product.title.includes(this._filter);
        })
    }

}