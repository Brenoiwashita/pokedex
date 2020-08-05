import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';
import * as pkInterface from '../../pk-config/sdk';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  public env = environment;

  pokemonChoiced$: BehaviorSubject<any> = new BehaviorSubject(null);
  pokemonChoicedObservable = this.pokemonChoiced$.asObservable();

  constructor(private http: HttpClient) { }

  public getArrayPk(page?): Observable<any> {
    if (page) {
      return this.http.get(this.env.urlApi + 'cards?page=' + page);
    }
    return this.http.get(this.env.urlApi + 'cards');
  }

}
