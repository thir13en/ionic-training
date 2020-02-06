import { Injectable } from '@angular/core';

import { BehaviorSubject, Observable } from 'rxjs';

import { Beer } from '@core/interfaces';


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
      id: '2',
      name: 'Montseny',
      imageUrl: 'https://cdn.shopify.com/s/files/1/0137/9872/products/MONTSENY-IPA-_ampolla_grande.jpg?v=1422615773',
      artisan: true
    }
  ];
  private beers$: BehaviorSubject<Beer[]> = new BehaviorSubject<Beer[]>([...this.beers]);

  getBeers$(): Observable<Beer[]> {
    return this.beers$.asObservable();
  }

  getBeer(beerId: string): Beer {
    return { ...this.beers.find((beer: Beer) => beer.id === beerId) } as Beer;
  }

  deleteBeer(beerId: string): void {
    this.beers = this.beers.filter((beer: Beer): boolean => beer.id !== beerId);
    this.beers$.next([...this.beers]);
  }

}
