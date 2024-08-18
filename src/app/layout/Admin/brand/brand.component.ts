import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ButtonModule } from 'primeng/button';

import { PanelMenuComponent } from '../components/panel-menu/panel-menu.component';

@Component({
  selector: 'app-brand',
  standalone: true,
  imports: [ButtonModule, PanelMenuComponent],
  templateUrl: './brand.component.html',
  styleUrl: './brand.component.scss',
})
export class BrandComponent {
  constructor(private router: Router) {}

  title: any = 'brand';

  routeToBrand() {
    this.router.navigate([`brand`]);
  }
}
