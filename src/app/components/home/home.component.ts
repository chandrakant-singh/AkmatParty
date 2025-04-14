import { Component } from '@angular/core';
import { HeroComponent } from "./hero/hero.component";
import { CtaSectionComponent } from './cta-section/cta-section.component';
import { StateMapComponent } from './state-map/state-map.component';
import { FooterComponent } from '../layout/footer/footer.component';
import { HeaderModule } from '../layout/header/header.module';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    HeroComponent,
    CtaSectionComponent,
    StateMapComponent,
    FooterComponent,
    HeaderModule
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
