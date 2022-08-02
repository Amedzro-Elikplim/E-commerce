import { Component, OnInit } from '@angular/core';
import { getFromLocalStorage } from 'src/app/storage/localDB';


@Component({
  selector: 'app-checkout-page',
  templateUrl: './checkout-page.component.html',
  styleUrls: ['./checkout-page.component.css']
})
  
export class CheckoutPageComponent implements OnInit {
  orders: any;

  constructor() { }

  ngOnInit(): void {
    this.orders = this.fetchOrders();
    console.log(this.orders);
  }

  fetchOrders() {
    return getFromLocalStorage('orders');
  }

}


