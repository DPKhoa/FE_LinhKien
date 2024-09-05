import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { MenuItem } from 'primeng/api';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { FloatLabelModule } from 'primeng/floatlabel';
import { InputGroupModule } from 'primeng/inputgroup';
import { InputGroupAddonModule } from 'primeng/inputgroupaddon';
import { AvatarModule } from 'primeng/avatar';
import { AvatarGroupModule } from 'primeng/avatargroup';
import { BreadcrumbModule } from 'primeng/breadcrumb';
import { CardModule } from 'primeng/card';

import { PanelMenuComponent } from '../components/panel-menu/panel-menu.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    ButtonModule,
    InputTextModule,
    FormsModule,
    FloatLabelModule,
    InputGroupModule,
    InputGroupAddonModule,
    AvatarModule,
    AvatarGroupModule,
    BreadcrumbModule,
    CardModule,

    PanelMenuComponent,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  constructor(private router: Router) {}

  title: any = 'home';
  value: string | undefined;

  routeToBrand() {
    this.router.navigate([`brand`]);
  }

  items: MenuItem[] | undefined;
  home: MenuItem | undefined;
  ngOnInit() {
    this.items = [
      { label: 'Thống kê' },
      { label: 'Biểu đồ' }
    ];

    this.home = { icon: 'pi pi-home', routerLink: '/' };
  }
}
