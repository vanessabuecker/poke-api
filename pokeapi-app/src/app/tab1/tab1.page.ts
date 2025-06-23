import { Component } from '@angular/core';
import { ApiService } from '../service/api.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  standalone: false,
})
export class Tab1Page {

  public pokemons: any[] = [];

  constructor(private apiService: ApiService) {
    this.getPokeList();
  }

  getPokeList() {
    this.apiService.getPokeList().subscribe((data: any) => {
      this.pokemons = data.results;
    });
  }

  getPokeId(pokemonUrl: string): string {
    const segments = pokemonUrl.split('/');
    return segments[segments.length - 2];
  }

  getPokeImage(pokemonUrl: string): string {
    const id = this.getPokeId(pokemonUrl);
    return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;
  }

}
