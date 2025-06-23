import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  getPokeList(limit: number = 100) {
    return this.http.get(`${this.url}pokemon?limit=${limit}`);
  }
}

