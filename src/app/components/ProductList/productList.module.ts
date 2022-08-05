import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { NumberToRealPipe } from "src/app/pipe/numberToReal.pipe";
import { ProductCardComponent } from "./ProductCard/productCard.component";
import { ProductListComponent } from "./productList.component";

@NgModule({
    declarations: [
        ProductCardComponent,
        ProductListComponent,
        NumberToRealPipe
    ],
    imports: [
        CommonModule,
        FormsModule
    ]
})
export class ProductListModule {

}