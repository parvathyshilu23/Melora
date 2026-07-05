import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Api {

  constructor(private http: HttpClient) {}

  getAllSongs() {
    return this.http.get(
      'https://itunes.apple.com/search?term=music&entity=song&limit=12'
    );
  }
}