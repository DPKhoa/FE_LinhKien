import { Routes } from '@angular/router';
import { HomeComponent } from './layout/Admin/home/home.component';
import { BrandComponent } from './layout/Admin/brand/brand.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    title: 'Home page',
  },
  {
    path: 'brand',
    component: BrandComponent,
    title: 'Brand page',
  },
  {
    path: '**',
    redirectTo: 'home',
    pathMatch: 'full',
  },
];
