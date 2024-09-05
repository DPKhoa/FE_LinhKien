import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { HomeComponent } from './layout/Admin/home/home.component';
import { BrandComponent } from './layout/Admin/brand/brand.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    // BrowserAnimationsModule,

    HomeComponent, 
    BrandComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {}
