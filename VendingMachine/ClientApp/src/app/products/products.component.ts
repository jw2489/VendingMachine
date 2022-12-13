import { Component, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {

  public productList: Product[] = [];

  constructor(http: HttpClient, @Inject('BASE_URL') baseUrl: string) {
    http.get<Product[]>(baseUrl + 'product').subscribe(result => {
      this.productList = result;
    }, error => console.error(error));
  }
}

interface Product {
  productID: string;
  description: string;
  price: number;
  inStockCount: number;
  quantityPurchased: number;
  imageUri: string;
}
