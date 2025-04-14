import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { PromisesSectionComponent } from './promises-section/promises-section.component';
import { HeroSectionComponent } from './hero-section/hero-section.component';
import { FooterComponent } from '../layout/footer/footer.component';
import { HeaderModule } from '../layout/header/header.module';

@Component({
  selector: 'app-our-promises',
  standalone: true,
  imports: [
    CommonModule,
    HeaderModule,
    PromisesSectionComponent,
    HeroSectionComponent,
    FooterComponent
],
  templateUrl: './our-promises.component.html',
  styleUrl: './our-promises.component.scss'
})
export class OurPromisesComponent {

}
