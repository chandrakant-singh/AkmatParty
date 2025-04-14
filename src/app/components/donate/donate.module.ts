import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DonateRoutingModule } from './donate-routing.module';
import { DonateComponent } from './donate.component';
import { FooterComponent } from '../layout/footer/footer.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HeaderModule } from '../layout/header/header.module';


@NgModule({
  declarations: [
    DonateComponent
  ],
  imports: [
    CommonModule,
    DonateRoutingModule,
    ReactiveFormsModule,
    FooterComponent,
    HeaderModule
  ]
})
export class DonateModule { }
