import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../service/pokemon.service';
import * as pkInterface from '../../pk-config/sdk';
import { Router, ActivatedRoute } from '@angular/router';
import * as $ from 'jquery';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public pokemonArray;
  public pokemonArrayBackUp;
  public inputSearch = '';
  public loading = true;
  public page = 0;
  constructor(
    private pokemonService: PokemonService,
    private router: Router
    ) { }

  ngOnInit() {
    this.loading = true;
    $('body').css({'background-color': '#181b1d'});

    this.pokemonService.getArrayPk().subscribe ((res: any) => {
      this.pokemonArray = res.cards;
      this.pokemonArrayBackUp = res.cards;
      this.pokemonArray.sort((a,b) => {
        return (a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0);
      });
      this.loading = false;
     });
  }

  public search() {
    if (!this.inputSearch || this.inputSearch === '') {
      this.pokemonArray = this.pokemonArrayBackUp;
      return;
    }
    this.pokemonArray = this.pokemonArray.filter(e => e.name === this.inputSearch);
    if (!this.pokemonArray || this.pokemonArray.length === 0) {
      this.pokemonArray = this.pokemonArrayBackUp;
    }
  }

  public clickedCard(id: string): void {
    let selectedCard;
    selectedCard = this.pokemonArray.find(e => e.id === id);
    this.pokemonService.pokemonChoiced$.next(selectedCard);
    this.router.navigate(['/pokemon']);
  }

  public pagination(action: string): void {
    if (action === 'next') {
      this.page = this.page + 1;
      this.loading = true;
      this.pokemonService.getArrayPk(this.page).subscribe((res) => {this.pokemonArray = res.cards; this.loading = false; });
    } else {
      if (this.page > 0) {
        this.page = this.page - 1;
        this.loading = true;
        this.pokemonService.getArrayPk(this.page).subscribe((res) => {this.pokemonArray = res.cards; this.loading = false;});
      }
    }
  }
}
