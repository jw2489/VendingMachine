import { Component, OnInit, Input, AfterContentChecked } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-buy-item',
  templateUrl: './buy-item.component.html',
  styleUrls: ['./buy-item.component.css']
})
export class BuyItemComponent implements OnInit, AfterContentChecked {

  @Input() productItem = {} as Product
  @Input() quantityPurchased: number = 1
  public totalAmount: number = 0;

  constructor(private router: Router) {
    
  }

  ngAfterContentChecked(): void {
    this.totalAmount = this.productItem.price * this.quantityPurchased;

  }

  ngOnInit(): void {
    
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
