import { Component } from '@angular/core';
import { Navbar } from "../navbar/navbar";
import { Footer } from '../footer/footer';
import { Accordion } from "../accordion/accordion";

@Component({
  selector: 'app-about',
  imports: [Navbar, Accordion],
  templateUrl: './about.html',
  styleUrl: './about.css',
})
export class AboutComponent  {}
