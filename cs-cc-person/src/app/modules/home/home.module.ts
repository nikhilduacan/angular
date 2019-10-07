import { NgModule, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { PersonListComponent } from './person-list/person-list.component';
import { PieChartComponent } from './pie-chart/pie-chart.component';
import { LandingComponent } from './landing/landing.component';


export const homeRoutes: Routes = [
  {
      path: '',
      component: LandingComponent
  },
  {
      path: '**',
      redirectTo: ''
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(homeRoutes)
  ],
  declarations: [PersonListComponent, PieChartComponent, LandingComponent]
})

export class HomeModule {
}
