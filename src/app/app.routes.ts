import { Routes } from '@angular/router';
import { HomeComponent } from './layout/Admin/home/home.component';
import { BrandComponent } from './layout/Admin/brand/brand.component';
import { CategoryComponent } from './layout/Admin/category/category.component';
import { ProductComponent } from './layout/Admin/product/product.component';

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
    path: 'category',
    component: CategoryComponent,
    title: 'Category page',
  },
  {
    path: 'product',
    component: ProductComponent,
    title: 'Product page',
  },
  {
    path: '**',
    redirectTo: 'home',
    pathMatch: 'full',
  },
];
