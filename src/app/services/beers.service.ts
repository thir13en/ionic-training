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
      price: 2,
      description: 'The kabbaddhi of beers is arguably the best homebrewed beer openly commencialized',
      imageUrl: 'https://media.area-gourmet.com/c/product/cerveza-vic-brewery-mumbai-520x520.jpeg',
      artisan: true
    },
    {
      id: '2',
      name: 'Montseny',
      price: 2.2,
      description: 'A wonder of homebrewed beers, it\'s IPA essence gives a the perfect flavour for a calmed gourmet afternoon',
      imageUrl: 'https://cdn.shopify.com/s/files/1/0137/9872/products/MONTSENY-IPA-_ampolla_grande.jpg?v=1422615773',
      artisan: true
    }
  ];
  private offers: Beer[] = [
    {
      id: '3',
      name: 'Brewdog',
      description: 'A Punk IPA that will trash your senses',
      price: 1.5,
      artisan: true,
      imageUrl: 'https://cdn.shopify.com/s/files/1/1176/1532/products/Thumbnail-PDP-Brewdogpunk_1024x1024.jpg'
    }
    // TODO: add a couple more offers
  ];
  private beers$: BehaviorSubject<Beer[]> = new BehaviorSubject<Beer[]>([...this.beers]);
  private offers$: BehaviorSubject<Beer[]> = new BehaviorSubject<Beer[]>([...this.offers]);

  getBeers$(): Observable<Beer[]> {
    return this.beers$.asObservable();
  }

  getOffers$(): Observable<Beer[]> {
    return this.offers$.asObservable();
  }

  getBeer(beerId: string): Beer {
    return { ...this.beers.find((beer: Beer) => beer.id === beerId) } as Beer;
  }

  deleteBeer(beerId: string): void {
    this.beers = this.beers.filter((beer: Beer): boolean => beer.id !== beerId);
    this.beers$.next([...this.beers]);
  }

}
