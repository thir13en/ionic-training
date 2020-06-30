import { Injectable } from '@angular/core';

import { BehaviorSubject, Observable } from 'rxjs';

import { Beer } from '@core/interfaces';
import { AuthService } from '@app/auth/services/auth.service';


@Injectable({
  providedIn: 'root'
})
export class BeersService {
  private beers: Beer[] = [
    {
      ownerId: 'abc',
      id: '1',
      name: 'Mumbai',
      price: 2,
      description: 'The kabbaddhi of beers is arguably the best homebrewed beer openly commencialized',
      imageUrl: 'https://media.area-gourmet.com/c/product/cerveza-vic-brewery-mumbai-520x520.jpeg',
      homebrew: true
    },
    {
      ownerId: 'abc',
      id: '2',
      name: 'Montseny',
      price: 2.2,
      description: 'A wonder of homebrewed beers, it\'s IPA essence gives a the perfect flavour for a calmed gourmet afternoon',
      imageUrl: 'https://cdn.shopify.com/s/files/1/0137/9872/products/MONTSENY-IPA-_ampolla_grande.jpg?v=1422615773',
      homebrew: true
    }
  ];
  private offers: Beer[] = [
    {
      ownerId: 'abc',
      id: '3',
      name: 'Brewdog',
      description: 'A Punk IPA that will trash your senses',
      price: 1.5,
      homebrew: true,
      imageUrl: 'https://cdn.shopify.com/s/files/1/1176/1532/products/Thumbnail-PDP-Brewdogpunk_1024x1024.jpg'
    },
    {
      ownerId: 'abc',
      id: '4',
      name: 'Corona',
      description: 'THE mexican beer and novel devastating virus',
      price: 1,
      homebrew: false,
      imageUrl: 'https://birrapedia.prevista.net/modulos/market/fc/f5/corona-extra--355--15775688333106-g.jpg'
    },
    {
      ownerId: 'abc',
      id: '5',
      name: 'Kozel Světlý',
      description: 'An excellent beer from an excellent country when it comes to this beverage',
      price: 2,
      homebrew: false,
      imageUrl: 'https://birrapedia.com/img/modulos/cerveza/5a4/kozel-sv-tly_15245918107247_t.jpg'
    }
  ];
  private beers$: BehaviorSubject<Beer[]> = new BehaviorSubject<Beer[]>([...this.beers]);
  private offers$: BehaviorSubject<Beer[]> = new BehaviorSubject<Beer[]>([...this.offers]);

  constructor(private authService: AuthService) {}

  getBeers$(): Observable<Beer[]> {
    return this.beers$.asObservable();
  }

  getOffers$(): Observable<Beer[]> {
    return this.offers$.asObservable();
  }

  getBeer(beerId: string): Beer {
    const searchItems: Beer[] = [...this.beers, ...this.offers];
    return { ...searchItems.find((beer: Beer) => beer.id === beerId) } as Beer;
  }

  addOffer(newBeer: {
    name: string,
    description: string,
    price: number,
    imageUrl: string,
    homebrew: boolean,
  }): void {
    this.offers.push({
      ...newBeer,
      ownerId: this.authService.userId,
      id: this.offers.length + 1 + '',
    });
    this.offers$.next(this.offers);
  }

  deleteBeer(beerId: string): void {
    this.beers = this.beers.filter((beer: Beer): boolean => beer.id !== beerId);
    this.beers$.next([...this.beers.slice()]);
  }

}
