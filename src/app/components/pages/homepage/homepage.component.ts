import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent {
  data: any
  result: any[] = []
  temp: any

  constructor(http: HttpClient) { 
     http
      .get('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita')
      .subscribe((response) => {
        this.data = response

        this.data.drinks.map((item: any) => {
          this.result.push({
            name: item.strDrink,
            image: item.strDrinkThumb
          })
        })
        console.log(this.data);
      });
  };

}
