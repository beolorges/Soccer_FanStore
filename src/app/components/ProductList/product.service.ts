import { Injectable } from "@angular/core";
import { IProduct } from "./product";

@Injectable({
    providedIn: 'root'
})
export class ProductService {
    Products: IProduct[] = [
        {
            title: "Camisa Vasco 2022 I",
            code: "VAS20221J",
            description: "Camisa número 1 do Vasco, na temporada de 2022/23.",
            imgUrl: "https://images.tcdn.com.br/img/img_prod/994317/180_camisa_vasco_oficial_i_2022_kappa_masc_plus_size_425_1_d7458a23d25eea6f93ea20208db6da44.jpg",
            price: 249,
            rating: 4.8
        },
        {
            title: "Camisa Vasco 2021 III Jogador",
            code: "VAS20213J",
            description: "Camisa número 3 do Vasco, na temporada de 2021/22.",
            imgUrl: "https://static.shopvasco.com.br/produtos/camisa-vasco-iii-2122-sn-torcedor-kappa-masculina/06/D24-3377-006/D24-3377-006_zoom1.jpg?ts=1628633432",
            price: 149.52,
            rating: 5
        },
        {
            title: "Camisa Vasco 2022 III Goleiro",
            code: "VAS20213G",
            description: "Camisa número 3 do Vasco de goleiro, na temporada de 2021/22.",
            imgUrl: "https://static.kappabrasil.com.br/produtos/camisa-de-goleiro-vasco-iii-2122-sn-torcedor-kappa-masculina/10/D24-3376-010/D24-3376-010_zoom1.jpg?ts=1615469158",
            price: 249,
            rating: 4.8
        },
        {
            title: "Camisa Vasco LGBT",
            code: "VAS2021GG",
            description: "Camisa número 3 do Vasco de goleiro, na temporada de 2021/22.",
            imgUrl: "https://static.netshoes.com.br/produtos/camisa-vasco-lgbt-torcedor-kappa-masculina/14/D24-3524-014/D24-3524-014_zoom1.jpg?ts=1624355144",
            price: 249,
            rating: 4.8
        }
    ]

    getAll(): IProduct[] {
        return this.Products
    }

    getByCode(code: string): IProduct | undefined {
        return this.Products.find(product => product.code === code)
    }

}


