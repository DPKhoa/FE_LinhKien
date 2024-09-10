import { CatogoryService } from './../../../../service/category.service';
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
import { InputSwitchModule } from 'primeng/inputswitch';

import { PanelMenuComponent } from '../components/panel-menu/panel-menu.component';
import { response } from 'express';

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
    InputSwitchModule,

    PanelMenuComponent,
  ],
  templateUrl: './category.component.html',
  styleUrl: './category.component.scss',
})
export class CategoryComponent {
  constructor(private router: Router, private _service: CatogoryService) {}

  title: any = 'category';
  value: string | undefined;

  routeToBrand() {
    this.router.navigate([`category`]);
  }
  checked: boolean = false;
  items: MenuItem[] | undefined;
  home: MenuItem | undefined;
  ngOnInit() {
    this.items = [{ label: 'Quản lý' }, { label: 'Danh mục' }];

    this.home = { icon: 'pi pi-home', routerLink: '/' };
    this.loadData();
  }

  categories: any;
  loadData() {
    this._service.getAllCategory().subscribe((data: any) => {
      this.categories = data.data;
      console.log(this.categories);
    });
  }

  visible: boolean = false;
  popUp() {
    console.log('Ngu');
    this.visible = true;
  }
  category = {
    name: '',
    status: true,
  };
  onCreateCategory() {
    const categoryData = JSON.stringify(this.category);
    console.log('Trạng thái hiện tại:', this.categories.status);

    const invalidChars = /[^\w\s.,-]/; // Các ký tự hợp lệ bao gồm chữ cái, số, dấu cách, dấu chấm, dấu phẩy, dấu gạch ngang
    if (invalidChars.test(this.category.name)) {
      console.error('Tên hoặc mô tả chứa ký tự không hợp lệ');
      return;
    }

    this.categories.status =
      this.categories.status === 'true' || this.categories.status === true;

    if (typeof this.category.status == 'boolean') {
      console.error('Trạng thái không hợp lệ');
      return;
    }

    this._service.createCategory(categoryData).subscribe(
      (response) => {
        console.log('Category created:', response);
      },
      (error) => {
        console.error('Error creating category:', error);
      }
    );
  }
}
