import { ProductServiceService } from './../../../services/product-service.service';
import { Component, OnInit } from '@angular/core';
import { saveToLocalStorage, getFromLocalStorage } from 'src/app/storage/localDB';
import { MatSnackBar } from '@angular/material/snack-bar';
@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css'],
})
export class HomepageComponent implements OnInit {
  data: any;
  result: any[] = [];
  input_value: any;
  order: any[] = [];

  constructor(private productService: ProductServiceService, private _snackBar: MatSnackBar) {}

  generateRandomPrice(min: number, max: number) {
    let result = Math.random() * (max - min) + min;
    return '$' + result.toFixed(2);
  }


  cleanUpResponse(response: Object) {
    this.data = response;

    this.data.drinks.map((item: any) => {
      const { idDrink, strDrink, strDrinkThumb } = item;

      const temp = {
        id: idDrink,
        name: strDrink,
        image: strDrinkThumb,
        price: this.generateRandomPrice(100, 1000),
      };

      this.result.push(temp);
      
    });

    saveToLocalStorage('products',this.result);
  }

  ngOnInit(): void {
    this.productService.fetchProducts().subscribe((response) => {
      this.cleanUpResponse(response);
    });
  }

  handleChange(e: any) {
    if (e === '') {
      return this.result = getFromLocalStorage('products');
    }

    this.result = this.result.filter((item) =>
      item.name.toLowerCase().includes(e.toLowerCase())
    );


  }

  displaySnackBar(item: any, message: string) {
    this._snackBar.open(item[0].name + message, 'OK', {
      duration: 5 * 1000,
    });
  }

  isAvailableInCart(selected: any) {
    let status = false;
    const itemsInCart = getFromLocalStorage('orders') || [];
    itemsInCart.map((item: any) => {
      if (item.id === selected.id) {
         status = true
         return
      }
    })

    return status
  }

  placeOrder(id: string) {
    const selected = this.result.filter((item) => item.id === id);
    const status = this.isAvailableInCart(selected[0]);

    if (status) {
      this.displaySnackBar(selected, ' is already available in your cart');
      return;
    }

    this.order.push(selected[0]);
    this.displaySnackBar(selected, ' added to cart');
    saveToLocalStorage('orders', this.order);
  }
}
