import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-songcard',
  templateUrl: './songcard.html',
  styleUrl: './songcard.css'
})
export class Songcard {
  @Input() songData: any;
}
