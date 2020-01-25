import { Injectable } from '@angular/core';

import { Beer } from '@core/interfaces';
// TODO: solved core proxy routing

@Injectable({
  providedIn: 'root'
})
export class BeersService {
  private beers: Beer[] = [
    {
      id: '1',
      name: 'Mumbai',
      imageUrl: 'https://media.area-gourmet.com/c/product/cerveza-vic-brewery-mumbai-520x520.jpeg',
      artisan: true
    },
    {
      id: '1',
      name: 'Montseny',
      imageUrl: 'https://cdn.shopify.com/s/files/1/0137/9872/products/MONTSENY-IPA-_ampolla_grande.jpg?v=1422615773',
      artisan: true
    }
  ];

  getBeers(): Beer[] {
    return [...this.beers];
  }

  getBeer(beerId: string): Beer {
    return { ...this.beers.find((beer: Beer) => beer.id === beerId) };
  }

}
