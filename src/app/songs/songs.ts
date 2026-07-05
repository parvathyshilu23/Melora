import { Component, ChangeDetectorRef } from '@angular/core';
import { Api } from '../api';
import { Songcard } from '../songcard/songcard';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-songs',
  imports: [Songcard, CommonModule],
  templateUrl: './songs.html',
  styleUrl: './songs.css'
})
export class SongsComponent {

  songs: any;

  constructor(
    private api: Api,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit() {
    this.api.getAllSongs().subscribe((res: any) => {
      this.songs = res.results;
      this.cdr.detectChanges();
    });
  }
}