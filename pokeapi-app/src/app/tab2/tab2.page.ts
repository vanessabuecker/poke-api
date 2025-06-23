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
            types: details.types.map((t: any) => t.type.name),
            abilities: details.abilities.map((a: any) => a.ability.name)
          });
        });
      });
    });
  }
}
