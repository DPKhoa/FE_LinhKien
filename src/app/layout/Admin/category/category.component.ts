import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

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
import { DialogModule } from 'primeng/dialog';

import { PanelMenuComponent } from '../components/panel-menu/panel-menu.component';
import { CatogoryService } from '../../../../service/category.service';

@Component({
  selector: 'app-category',
  standalone: true,
  imports: [
    CommonModule,

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
    DialogModule,

    PanelMenuComponent,
  ],
  templateUrl: './category.component.html',
  styleUrl: './category.component.scss'
})
export class CategoryComponent {
  constructor(
    private router: Router,
    private _service: CatogoryService
  ) {}

  title: any = 'category';
  value: string | undefined;

  routeToBrand() {
    this.router.navigate([`brand`]);
  }

  items: MenuItem[] | undefined;
  home: MenuItem | undefined;
  ngOnInit() {
    this.items = [
      { label: 'Quản lý' },
      { label: 'Danh mục' }
    ];

    this.home = { icon: 'pi pi-home', routerLink: '/' };
    this.loadData();
  }

  categories: any;
  loadData() {
    this._service.getAllCategory().subscribe((data: any) => {
      this.categories = data.data;
      console.log(this.categories)
    })
  }

  visible: boolean = false;
  popUp() {
    console.log('Ngu')
    this.visible = true;
  }
}
