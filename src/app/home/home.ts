import { Component } from '@angular/core';
import { Navbar } from '../navbar/navbar';
import { Carousel } from '../carousel/carousel';
import { Footer } from '../footer/footer';

@Component({
  selector: 'app-home',
  imports: [Navbar,Carousel],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class HomeComponent {}
