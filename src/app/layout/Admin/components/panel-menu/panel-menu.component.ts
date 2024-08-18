import { NgFor } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { ButtonModule } from 'primeng/button';

import { MenuItem } from 'primeng/api';
import { MenuModule } from 'primeng/menu';
import { BadgeModule } from 'primeng/badge';
import { RippleModule } from 'primeng/ripple';
import { AvatarModule } from 'primeng/avatar';

@Component({
  selector: 'app-panel-menu',
  standalone: true,
  imports: [
    ButtonModule,
    NgFor,
    MenuModule,
    BadgeModule,
    RippleModule,
    AvatarModule,
  ],
  templateUrl: './panel-menu.component.html',
  styleUrl: './panel-menu.component.scss',
})
export class PanelMenuComponent {
  // constructor(private router: Router) {}

  items: MenuItem[] | undefined;

  routeToPage() {
    console.log('NGU');
  }

  ngOnInit() {
    this.items = [
      {
        separator: true,
      },
      {
        label: 'Quản lý',
        items: [
          {
            label: 'Thương hiệu',
            icon: 'pi pi-align-center',
            // shortcut: '⌘+N',
          },
          {
            label: 'Danh mục',
            icon: 'pi pi-list',
            // shortcut: '⌘+S',
          },
        ],
      },
      // {
      //     label: 'Profile',
      //     items: [
      //         {
      //             label: 'Settings',
      //             icon: 'pi pi-cog',
      //             shortcut: '⌘+O'
      //         },
      //         {
      //             label: 'Messages',
      //             icon: 'pi pi-inbox',
      //             badge: '2'
      //         },
      //         {
      //             label: 'Logout',
      //             icon: 'pi pi-sign-out',
      //             shortcut: '⌘+Q'
      //         }
      //     ]
      // },
      {
        separator: true,
      },
    ];
  }
}
