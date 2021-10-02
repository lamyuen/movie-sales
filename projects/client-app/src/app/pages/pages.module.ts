import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatHelperModule } from 'projects/mat-helper/src/public-api';

import { PagesRoutingModule } from './pages-routing.module';
import { HomeComponent } from './home/home.component';
import { PagesLayoutComponent } from './pages-layout/pages-layout.component';
import { SalesComponent } from './sales/sales.component';

@NgModule({
  declarations: [HomeComponent, PagesLayoutComponent, SalesComponent],
  imports: [CommonModule, PagesRoutingModule, MatHelperModule],
})
export class PagesModule {}
