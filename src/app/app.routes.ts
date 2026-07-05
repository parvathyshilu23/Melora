import { Routes } from '@angular/router';

import { HomeComponent } from './home/home';
import { SongsComponent } from './songs/songs';
import { AboutComponent } from './about/about';
import { ContactComponent } from './contact/contact';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'songs', component: SongsComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent }
];