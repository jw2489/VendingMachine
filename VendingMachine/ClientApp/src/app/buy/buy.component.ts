import { Component, Inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-buy',
  templateUrl: './buy.component.html',
  styleUrls: ['./buy.component.css']
})
export class BuyComponent {

  productItem = {} as Product
  httpClient = {} as HttpClient
  baseUrl: string = ""
  quantityPurchased: number = 1

  

  constructor(private router: Router, private activatedRoute: ActivatedRoute, http: HttpClient, @Inject('BASE_URL') baseUrl: string) {
    http.get<Product>(baseUrl + 'product/' + this.activatedRoute.snapshot.params["productID"]).subscribe(result => {
      this.productItem = result;
    }, error => console.error(error));
    this.baseUrl = baseUrl;
    this.httpClient = http;
  }

  handleCompletePurchase() {
    alert(this.baseUrl + 'transaction')

    const body = JSON.stringify({ productID: this.productItem.productID, Amount: this.productItem.price * this.quantityPurchased });
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };

    alert(body)

    this.httpClient.get<Product[]>(this.baseUrl + 'transaction').subscribe(result => {
      alert(result)
    }, error => console.error(error));

    this.httpClient.post(this.baseUrl + 'transaction', body, httpOptions);

    

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

interface Transaction {
  productID: string;
  amount: number;
}
