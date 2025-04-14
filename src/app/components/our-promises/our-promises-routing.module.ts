import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OurPromisesComponent } from './our-promises.component';

const routes: Routes = [
  {
    path: '',
    component: OurPromisesComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OurPromisesRoutingModule { }
