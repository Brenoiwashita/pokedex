import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PokemonService } from '../service/pokemon.service';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.scss']
})
export class PokemonComponent implements OnInit {
  public ID: object;
  constructor(private pokemonService: PokemonService, 
              private router: Router) {
   }

  ngOnInit() {
    this.pokemonService.pokemonChoicedObservable
    .subscribe(res => {
      if (res ) {
        this.ID = res;
      } else {
        this.router.navigate(['']);
      }
    });
  }
}
