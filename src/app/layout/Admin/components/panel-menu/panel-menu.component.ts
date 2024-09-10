import { NgFor } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';

import { MenuItem } from 'primeng/api';
import { MenuModule } from 'primeng/menu';
import { BadgeModule } from 'primeng/badge';
import { RippleModule } from 'primeng/ripple';
import { AvatarModule } from 'primeng/avatar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-panel-menu',
  standalone: true,
  imports: [
    ButtonModule,
    CommonModule,
    NgFor,
    MenuModule,
    BadgeModule,
    RippleModule,
    AvatarModule,
  ],
  templateUrl: './panel-menu.component.html',
  styleUrl: './panel-menu.component.scss',
})
export class PanelMenuComponent implements OnInit {
  constructor(private router: Router) {}

  items: MenuItem[] | undefined;

  handleRouter(url: any) {
    this.router.navigate([`${url}`]);
  }
  ngOnInit() {
    this.items = [
      {
        separator: true,
      },
      {
        label: 'Thống kê',
        items: [
          {
            label: 'Biểu đồ',
            url: '',
            icon: 'pi pi-align-center',
          },
          {
            label: 'Doanh thu',
            url: '/revenue',
            icon: 'pi pi-list',
          },
        ],
      },
      {
        separator: true,
      },
      {
        label: 'Quản lý',
        items: [
          {
            label: 'Thương hiệu',
            url: '/brand',
            icon: 'pi pi-align-center',
          },
          {
            label: 'Danh mục',
            url: '/category',
            icon: 'pi pi-list',
          },
          {
            label: 'Sản phẩm',
            url: '/product',
            icon: 'pi pi-box',
          },
        ],
      },
      {
        separator: true,
      },
    ];
  }
}
