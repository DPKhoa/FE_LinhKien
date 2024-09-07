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
import { TableModule } from 'primeng/table';

import { PanelMenuComponent } from '../components/panel-menu/panel-menu.component';
import { BrandService } from '../../../../service/brand.service';

@Component({
  selector: 'app-brand',
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
    TableModule,

    PanelMenuComponent,
  ],
  templateUrl: './brand.component.html',
  styleUrl: './brand.component.scss',
})
export class BrandComponent {
  constructor(
    private router: Router,
    private _service: BrandService
  ) {}

  title: any = 'brand';
  value: string | undefined;

  // routeToBrand() {
  //   this.router.navigate([`brand`]);
  // }

  items: MenuItem[] | undefined;
  home: MenuItem | undefined;
  ngOnInit() {
    this.items = [
      { label: 'Quản lý' },
      { label: 'Thương hiệu' }
    ];

    this.home = { icon: 'pi pi-home', routerLink: '/' };
    this.loadData();
  }

  products: any;
  loadData() {
    this._service.getAllBrand().subscribe((data: any) => {
      console.log(data.data)
      this.products = data.data;
    })
  }
}
