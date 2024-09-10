import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { InputGroupModule } from 'primeng/inputgroup';
import { InputGroupAddonModule } from 'primeng/inputgroupaddon';
import { ButtonModule } from 'primeng/button';
import { AvatarModule } from 'primeng/avatar';
import { AvatarGroupModule } from 'primeng/avatargroup';
import { BreadcrumbModule } from 'primeng/breadcrumb';
import { MenuItem } from 'primeng/api';
import { CardModule } from 'primeng/card';
import { TableModule } from 'primeng/table';

import { PanelMenuComponent } from '../components/panel-menu/panel-menu.component';
import { ProductService } from '../../../../service/product.service';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [
    PanelMenuComponent,
    InputTextModule,
    InputGroupModule,
    InputGroupAddonModule,
    AvatarModule,
    AvatarGroupModule,
    BreadcrumbModule,
    ButtonModule,
    CardModule,
    TableModule,
    FormsModule,
  ],
  templateUrl: './product.component.html',
  styleUrl: './product.component.scss',
})
export class ProductComponent {
  constructor(private __service: ProductService) {}
  title: any = 'product';
  value: string | undefined;

  items: MenuItem[] | undefined;
  home: MenuItem | undefined;
  ngOnInit() {
    this.items = [{ label: 'Quản lý' }, { label: 'Sản phảm' }];
    this.home = { icon: 'pi pi-home', routerLink: '/' };
    this.loadData()
  }
  products: any;
  loadData() {
    this.__service.getAllProducts().subscribe((data: any) => {
      console.log(data.data);
      this.products = data.data;
    });
  }
}
