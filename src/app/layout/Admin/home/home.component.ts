import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ButtonModule } from 'primeng/button';

import { PanelMenuComponent } from "../components/panel-menu/panel-menu.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ButtonModule, PanelMenuComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  constructor(private router: Router) {}

  title: any = 'home';

  routeToBrand() {
    this.router.navigate([`brand`]);
  }
}
