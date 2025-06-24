import { Component } from '@angular/core';
import { ApiService } from '../service/api.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
  standalone: false,
})
export class Tab2Page {
  pokemons: any[] = [];
  constructor(private apiService: ApiService) {

  }

  ngOnInit() {
    this.apiService.getPokeList(100).subscribe((res: any) => {
      res.results.forEach((pokemon: any) => {
        this.apiService.getPokeDetails(pokemon.name).subscribe((details: any) => {
          this.pokemons.push({
            name: details.name,
            image: details.sprites.front_default,
            base_experience: details.base_experience,
            height: details.height,
            weight: details.weight,
            types: details.types.map((t: any) => t.type.name),
            abilities: details.abilities.map((a: any) => a.ability.name),
            moves: details.moves.slice(0, 3).map((m: any) => m.move.name),
            cry: {
              latest: `https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/${details.id}.ogg`,
              legacy: `https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/legacy/${details.id}.ogg`
            }
          });
        });
      });
    });
  }
}
