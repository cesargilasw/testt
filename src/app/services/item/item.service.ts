import { Injectable } from '@angular/core';
import { HttpClient } from  '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  constructor(private httpClient: HttpClient) { }

  /**
  * Http request to get items of mock api creator
  */
  async getMockItems() {
    // Manejo de HttpClient y operaciones RxJS en Observables
    let url = `https://5f538201e5de110016d5194e.mockapi.io/api/v1/cards/list`;
    return this.httpClient.get(url).toPromise();
  }

}
