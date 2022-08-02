import { ProductServiceService } from './../../../services/product-service.service';
import { Component, OnInit } from '@angular/core';
import { saveToLocalStorage, getFromLocalStorage } from 'src/app/storage/localDB';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css'],
})
export class HomepageComponent implements OnInit {
  data: any;
  result: any[] = [];
  input_value: any;

  constructor(private productService: ProductServiceService) {}

  generateRandomPrice(min: number, max: number) {
    let result = Math.random() * (max - min) + min;
    return '$' + result.toFixed(2);
  }


  cleanUpResponse(response: Object) {
    this.data = response;

    this.data.drinks.map((item: any) => {
      const { strDrink, strDrinkThumb } = item;

      const temp = {
        name: strDrink,
        image: strDrinkThumb,
        price: this.generateRandomPrice(100, 1000),
      };

      this.result.push(temp);
      
    });

    saveToLocalStorage(this.result);
  }

  ngOnInit(): void {
    this.productService.fetchProducts().subscribe((response) => {
      this.cleanUpResponse(response);
    });
  }

  handleChange(e: any) {
    if (e === '') {
      return this.result = getFromLocalStorage();
    }

    this.result = this.result.filter((item) =>
      item.name.toLowerCase().includes(e.toLowerCase())
    );

  }
}
