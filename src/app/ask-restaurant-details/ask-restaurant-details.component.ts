import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-ask-restaurant-details',
  templateUrl: './ask-restaurant-details.component.html',
  styleUrls: ['./ask-restaurant-details.component.css']
})
export class AskRestaurantDetailsComponent implements OnInit {

  constructor(private route: ActivatedRoute, private router: Router) { }
  cities: any[];
  restaurantList: any[];
  restaurants: any[];
  selectedRestaurant: any;
  selectedCity: any;

  ngOnInit(): void {
    this.cities = [{ cityId: 1, cityName: 'Lisbon' },
    { cityId: 2, cityName: 'Porto' },
    { cityId: 3, cityName: 'Braga' },
    { cityId: 4, cityName: 'Amadora' },
    { cityId: 5, cityName: 'Coimbra' },
    { cityId: 6, cityName: 'Setúbal' }
    ];
    this.restaurantList = [
      { restaurantId: 1, cityId: 1, restaurantName: 'Augusto Lisboa' },
      { restaurantId: 2, cityId: 1, restaurantName: 'Treestory' },
      { restaurantId: 3, cityId: 1, restaurantName: 'Leo Restaurant' },
      { restaurantId: 4, cityId: 2, restaurantName: 'O Paparico' },
      { restaurantId: 5, cityId: 2, restaurantName: 'Farinha' },
      { restaurantId: 6, cityId: 3, restaurantName: 'Retrokitchen' },
      { restaurantId: 7, cityId: 3, restaurantName: 'Lakkana' },
      { restaurantId: 8, cityId: 4, restaurantName: 'Elevador' },
      { restaurantId: 9, cityId: 4, restaurantName: 'Maria Azeitona' },
      { restaurantId: 10, cityId: 4, restaurantName: 'Lugar ao Sul' },
      { restaurantId: 11, cityId: 5, restaurantName: 'Passeite' },
      { restaurantId: 12, cityId: 6, restaurantName: 'Casa do Mar' },
    ];

  }
  navigateNext(): void {
    this.router.navigate(['play-speech']);
  }

  onCityChange(): void {
    if (this.selectedCity) {
      this.selectedRestaurant = undefined;
      this.restaurants = this.restaurantList.filter(x => x.cityId === this.selectedCity.cityId);
    }
  }

  valid(): boolean {
    let isValid = false;
    if (this.selectedCity && this.selectedRestaurant) {
      isValid = true;
    }
    return isValid;
  }

}
