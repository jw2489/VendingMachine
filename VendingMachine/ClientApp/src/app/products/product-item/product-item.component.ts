import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {

  @Input() productItem = {} as Product

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  handleBuy() {
    this.router.navigate(['/buy', this.productItem.productID])
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
